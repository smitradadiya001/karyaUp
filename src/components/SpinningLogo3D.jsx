import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, OrbitControls, Center } from '@react-three/drei';
import * as THREE from 'three';
import glbUrl from '../assets/Karyaup-logo.glb';

function Model({ isHovered }) {
  const { scene } = useGLTF(glbUrl);
  const groupRef = useRef();

  // Clone the scene to ensure we have a fresh instance with independent transforms
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // Rotate smoothly over time on the parent group which is now perfectly centered at the bottom
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 2.0 : 0.8);
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive
          object={clonedScene}
          scale={0.5}
        />
      </Center>
    </group>
  );
}

export default function SpinningLogo3D({ className, isHovered }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 20 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={2.5} />
        <directionalLight position={[5, 10, 7]} intensity={3} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <Model isHovered={isHovered} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
