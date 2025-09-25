'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ThanosPortal: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Portal core geometry
    const coreGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // Electric core glow
    const glowGeometry = new THREE.SphereGeometry(1.8, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Smoke particles system
    const smokeGeometry = new THREE.BufferGeometry();
    const smokeCount = 1000;
    const smokePositions = new Float32Array(smokeCount * 3);
    const smokeColors = new Float32Array(smokeCount * 3);
    const smokeSizes = new Float32Array(smokeCount);

    for (let i = 0; i < smokeCount; i++) {
      const i3 = i * 3;
      
      // Position in a sphere around the core
      const radius = Math.random() * 3 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      smokePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      smokePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      smokePositions[i3 + 2] = radius * Math.cos(phi);
      
      // Dark grey to white smoke colors
      const greyValue = 0.3 + Math.random() * 0.7;
      smokeColors[i3] = greyValue;
      smokeColors[i3 + 1] = greyValue;
      smokeColors[i3 + 2] = greyValue;
      
      smokeSizes[i] = Math.random() * 0.5 + 0.1;
    }

    smokeGeometry.setAttribute('position', new THREE.BufferAttribute(smokePositions, 3));
    smokeGeometry.setAttribute('color', new THREE.BufferAttribute(smokeColors, 3));
    smokeGeometry.setAttribute('size', new THREE.BufferAttribute(smokeSizes, 1));

    const smokeMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const smoke = new THREE.Points(smokeGeometry, smokeMaterial);
    scene.add(smoke);

    // Lightning system
    const lightningGeometry = new THREE.BufferGeometry();
    const lightningCount = 50;
    const lightningPositions = new Float32Array(lightningCount * 6); // 2 points per line
    const lightningColors = new Float32Array(lightningCount * 6);

    for (let i = 0; i < lightningCount; i++) {
      const i6 = i * 6;
      
      // Start from core edge
      const startRadius = 1.5 + Math.random() * 0.5;
      const startTheta = Math.random() * Math.PI * 2;
      const startPhi = Math.random() * Math.PI;
      
      const startX = startRadius * Math.sin(startPhi) * Math.cos(startTheta);
      const startY = startRadius * Math.sin(startPhi) * Math.sin(startTheta);
      const startZ = startRadius * Math.cos(startPhi);
      
      // End point (jagged)
      const endRadius = 2.5 + Math.random() * 1;
      const endTheta = startTheta + (Math.random() - 0.5) * 0.5;
      const endPhi = startPhi + (Math.random() - 0.5) * 0.5;
      
      const endX = endRadius * Math.sin(endPhi) * Math.cos(endTheta);
      const endY = endRadius * Math.sin(endPhi) * Math.sin(endTheta);
      const endZ = endRadius * Math.cos(endPhi);
      
      lightningPositions[i6] = startX;
      lightningPositions[i6 + 1] = startY;
      lightningPositions[i6 + 2] = startZ;
      lightningPositions[i6 + 3] = endX;
      lightningPositions[i6 + 4] = endY;
      lightningPositions[i6 + 5] = endZ;
      
      // Electric blue color
      lightningColors[i6] = 0.2;
      lightningColors[i6 + 1] = 0.6;
      lightningColors[i6 + 2] = 1.0;
      lightningColors[i6 + 3] = 0.1;
      lightningColors[i6 + 4] = 0.4;
      lightningColors[i6 + 5] = 0.8;
    }

    lightningGeometry.setAttribute('position', new THREE.BufferAttribute(lightningPositions, 3));
    lightningGeometry.setAttribute('color', new THREE.BufferAttribute(lightningColors, 3));

    const lightningMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      linewidth: 2,
    });

    const lightning = new THREE.LineSegments(lightningGeometry, lightningMaterial);
    scene.add(lightning);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.016;
      
      // Rotate core
      core.rotation.y = time * 0.5;
      core.rotation.x = time * 0.3;
      
      // Animate glow
      glow.rotation.y = -time * 0.3;
      glow.rotation.x = -time * 0.2;
      glow.material.opacity = 0.3 + Math.sin(time * 2) * 0.1;
      
      // Animate smoke
      const smokePositions = smoke.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < smokeCount; i++) {
        const i3 = i * 3;
        
        // Swirling motion
        const radius = Math.sqrt(smokePositions[i3] ** 2 + smokePositions[i3 + 1] ** 2);
        const angle = Math.atan2(smokePositions[i3 + 1], smokePositions[i3]);
        
        smokePositions[i3] = radius * Math.cos(angle + time * 0.5);
        smokePositions[i3 + 1] = radius * Math.sin(angle + time * 0.5);
        
        // Vertical drift
        smokePositions[i3 + 2] += Math.sin(time + i) * 0.001;
      }
      smoke.geometry.attributes.position.needsUpdate = true;
      
      // Animate lightning
      const lightningPositions = lightning.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < lightningCount; i++) {
        const i6 = i * 6;
        
        // Random flickering
        if (Math.random() > 0.95) {
          const startRadius = 1.5 + Math.random() * 0.5;
          const startTheta = Math.random() * Math.PI * 2;
          const startPhi = Math.random() * Math.PI;
          
          lightningPositions[i6] = startRadius * Math.sin(startPhi) * Math.cos(startTheta);
          lightningPositions[i6 + 1] = startRadius * Math.sin(startPhi) * Math.sin(startTheta);
          lightningPositions[i6 + 2] = startRadius * Math.cos(startPhi);
          
          const endRadius = 2.5 + Math.random() * 1;
          const endTheta = startTheta + (Math.random() - 0.5) * 0.5;
          const endPhi = startPhi + (Math.random() - 0.5) * 0.5;
          
          lightningPositions[i6 + 3] = endRadius * Math.sin(endPhi) * Math.cos(endTheta);
          lightningPositions[i6 + 4] = endRadius * Math.sin(endPhi) * Math.sin(endTheta);
          lightningPositions[i6 + 5] = endRadius * Math.cos(endPhi);
        }
      }
      lightning.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !renderer) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    setIsLoaded(true);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      smokeGeometry.dispose();
      lightningGeometry.dispose();
      coreGeometry.dispose();
      glowGeometry.dispose();
      smokeMaterial.dispose();
      lightningMaterial.dispose();
      coreMaterial.dispose();
      glowMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden">
      <div 
        ref={mountRef} 
        className="w-full h-full"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black rounded-xl">
          <div className="text-white text-lg">Loading Portal...</div>
        </div>
      )}
    </div>
  );
};

export default ThanosPortal;
