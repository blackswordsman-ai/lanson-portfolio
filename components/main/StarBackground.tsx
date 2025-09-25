    'use client';

    import React, { useState, useRef, Suspense } from 'react';
    import { Canvas, useFrame } from '@react-three/fiber';
    import { Points, PointMaterial, Preload } from '@react-three/drei';
    // @ts-expect-error - maath import path issue
    import * as random from 'maath/random/dist/maath-random.esm';
    import * as THREE from 'three';

    const StarBackground: React.FC = () => {
    // Corrected: useRef, typed to THREE.Points
    const ref = useRef<THREE.Points>(null);

    const [positions] = useState(() =>
        random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
        // *3 because stride is 3 (x, y, z per point)
    );

    useFrame((state, delta) => {
        if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
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
    return (
        <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
            <StarBackground />
            </Suspense>
            <Preload all />
        </Canvas>
        </div>
    );
    };

    export default StarCanvas;
