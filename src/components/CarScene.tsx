"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function CarMesh() {
  const { scene } = useGLTF("/car.glb");
  const groupRef = useRef<THREE.Group>(null!);
  const fitted = useRef(false);

  useEffect(() => {
    if (!groupRef.current || fitted.current) return;
    fitted.current = true;

    // ── Auto-fit: measure and scale to fill viewport ──
    const box = new THREE.Box3().setFromObject(groupRef.current);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.8 / maxDim;
    groupRef.current.scale.setScalar(scale);

    // Recompute after scale, sit car on ground plane
    const box2 = new THREE.Box3().setFromObject(groupRef.current);
    const min2 = box2.min;
    const center2 = new THREE.Vector3();
    box2.getCenter(center2);
    groupRef.current.position.set(-center2.x, -min2.y, -center2.z);
  }, [scene]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.003;
    // subtle float (+/- 2cm)
    groupRef.current.position.y += Math.sin(clock.getElapsedTime() * 0.7) * 0.0007;
  });

  // Start with a 3/4 front-right view
  return (
    <group ref={groupRef} rotation={[0, -Math.PI / 5, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export function CarScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      // Low, wide-angle camera — eye-level like a car ad
      camera={{ position: [0, 0.55, 5.8], fov: 34 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFShadowMap;
        // Correct tone-mapping so colours don't clip to white
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 0.9;
      }}
    >
      {/*
        Balanced studio lighting — bright enough to show the car
        without blowing out glass. Key:Fill:Rim = 3:1.5:1
      */}

      {/* Soft ambient — fill in shadows, keep it neutral */}
      <ambientLight intensity={1.0} color="#e8eeff" />

      {/* Key light: upper-front, like a studio softbox */}
      <directionalLight
        position={[3, 5, 4]}
        intensity={2.8}
        color="#ffffff"
        castShadow
      />

      {/* Fill: opposite side, cooler tone */}
      <directionalLight position={[-3, 3, 2]} intensity={1.4} color="#c8d8ff" />

      {/* Rim/backlight: makes the car silhouette pop */}
      <directionalLight position={[0, 2, -5]} intensity={1.0} color="#fff0f0" />

      {/* Ground bounce: warm, low intensity */}
      <directionalLight position={[0, -3, 3]} intensity={0.4} color="#ffe8c8" />

      {/* Brand red under-glow — subtle, just for style */}
      <pointLight
        position={[0, -0.4, 2.5]}
        intensity={1.8}
        color="#cc0033"
        distance={6}
        decay={2}
      />

      <Suspense fallback={null}>
        <CarMesh />

        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.4}
          scale={9}
          blur={2.2}
          far={2}
          frames={1}
          color="#888"
        />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.1}
        rotateSpeed={0.5}
        makeDefault
      />
    </Canvas>
  );
}

useGLTF.preload("/car.glb");
