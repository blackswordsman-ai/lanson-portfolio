    'use client';

    import React, { useState, useRef, Suspense } from 'react';
    import { Canvas, useFrame } from '@react-three/fiber';
    import { Points, PointMaterial, Preload } from '@react-three/drei';
    // @ts-expect-error - maath import path issue
    import * as random from 'maath/random/dist/maath-random.esm';
    import * as THREE from 'three';

    const StarBackground: React.FC<{ morphToStar: boolean }> = ({ morphToStar }) => {
    // Corrected: useRef, typed to THREE.Points
    const ref = useRef<THREE.Points>(null);
      const groupRef = useRef<THREE.Group>(null);
      const mouse = useRef(new THREE.Vector3());

      const [positions] = useState(() =>
        random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
        // *3 because stride is 3 (x, y, z per point)
    );
      const [originalPositions] = useState(() => new Float32Array(positions));
      // Seeds for star shape sampling (angle and radial factor 0..1)
      const [angleSeeds] = useState(() => {
        const out = new Float32Array(positions.length / 3);
        for (let i = 0; i < out.length; i++) out[i] = Math.random() * Math.PI * 2;
        return out;
      });
      const [radialSeeds] = useState(() => {
        const out = new Float32Array(positions.length / 3);
        for (let i = 0; i < out.length; i++) out[i] = Math.random();
        return out;
      });

      useFrame((state, delta) => {
        // Update subtle rotation for parallax
        if (ref.current) {
          ref.current.rotation.x -= delta / 10;
          ref.current.rotation.y -= delta / 15;
        }

        // Compute target from pointer (NDC -> local space-ish)
        mouse.current.set(state.pointer.x, state.pointer.y, 0).multiplyScalar(0.9);

        // If we have a group rotation, approximate local by inverse applying group rotation around Z
        if (groupRef.current) {
          const inv = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(0, 0, -Math.PI / 4));
          mouse.current.applyMatrix4(inv);
        }

        const strengthPerSecond = morphToStar ? 1.2 : 0.9; // approach speed
        const s = Math.min(1, strengthPerSecond * delta);
        const snapThreshold = 0.0015;

        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          const z = positions[i + 2];

          let tx = 0, ty = 0, tz = 0;
          if (morphToStar) {
            // Target is a 5-point star centered at mouse
            const idx = (i / 3) | 0;
            const a = angleSeeds[idx];
            const spikes = 5;
            const step = (Math.PI * 2) / (spikes * 2);
            const k = Math.floor((a % (Math.PI * 2)) / step) % 2; // even -> outer, odd -> inner
            const rOuter = 0.6; // size of the star
            const rInner = 0.25;
            const rEdge = k === 0 ? rOuter : rInner;
            const r = radialSeeds[idx] * rEdge; // fill the interior
            tx = mouse.current.x + Math.cos(a) * r;
            ty = mouse.current.y + Math.sin(a) * r;
            tz = 0;
          } else {
            // Target back to original random field
            tx = originalPositions[i];
            ty = originalPositions[i + 1];
            tz = originalPositions[i + 2];
          }

          const dx = tx - x;
          const dy = ty - y;
          const dz = tz - z;
          const distSq = dx * dx + dy * dy + dz * dz;
          if (distSq < snapThreshold * snapThreshold) {
            positions[i] = tx;
            positions[i + 1] = ty;
            positions[i + 2] = tz;
            continue;
          }

          positions[i] = x + dx * s;
          positions[i + 1] = y + dy * s;
          positions[i + 2] = z + dz * s;
        }

        if (ref.current?.geometry.attributes.position) {
          ref.current.geometry.attributes.position.needsUpdate = true;
        }
      });

    return (
        <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
        <Points
            ref={ref}
            positions={positions}   // corrected prop name
            stride={3}
            frustumCulled={false}    // optional, depending on effect
        >
            <PointMaterial
            transparent={true}
            color="#fff"           // corrected color syntax
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
            />
        </Points>
        </group>
    );
    };

    const StarCanvas: React.FC = () => {
      const [morphToStar, setMorphToStar] = useState(false);
      return (
        <div
          className="w-full h-auto fixed inset-0 z-[20]"
          onMouseDown={() => setMorphToStar(true)}
          onMouseUp={() => setMorphToStar(false)}
          onMouseLeave={() => setMorphToStar(false)}
        >
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <StarBackground morphToStar={morphToStar} />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      );
    };

    export default StarCanvas;
