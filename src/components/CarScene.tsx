"use client";

import { useRef, Suspense, useEffect, Component, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";




/* ─── Error boundary so a broken GLB never crashes the page ─── */
interface EBState { hasError: boolean }
class CarErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, EBState> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch() {
    // Signal that model failed — preloader should not wait forever
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("car-model-loaded"));
    }
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/* ─── 3D Car Mesh — fires "car-model-loaded" when GLB is ready ─── */
function CarMesh() {
  const { scene } = useGLTF("/car.glb");
  const groupRef = useRef<THREE.Group>(null!);
  const fitted = useRef(false);
  const signalled = useRef(false);

  useEffect(() => {
    if (!groupRef.current || fitted.current) return;
    fitted.current = true;

    const box = new THREE.Box3().setFromObject(groupRef.current);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.8 / maxDim;
    groupRef.current.scale.setScalar(scale);

    const box2 = new THREE.Box3().setFromObject(groupRef.current);
    const min2 = box2.min;
    const center2 = new THREE.Vector3();
    box2.getCenter(center2);
    groupRef.current.position.set(-center2.x, -min2.y, -center2.z);

    // ✅ Signal preloader: 3D model is ready
    if (!signalled.current) {
      signalled.current = true;
      window.dispatchEvent(new Event("car-model-loaded"));
    }
  }, [scene]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const baseRotation = clock.getElapsedTime() * 0.15;
    const scrollY = typeof window !== "undefined" ? window.scrollY || 0 : 0;
    groupRef.current.rotation.y = -Math.PI / 5 + baseRotation + scrollY * 0.002;
    groupRef.current.position.y += Math.sin(clock.getElapsedTime() * 1.5) * 0.001;
  });

  return (
    <group ref={groupRef} rotation={[0, -Math.PI / 5, 0]}>
      <primitive object={scene} />
    </group>
  );
}

/* ─── Error fallback (WebGL unavailable or GLB broken) ─── */
function CanvasErrorFallback() {
  return (
    <div style={{
      height: "100%", width: "100%",
      background: "linear-gradient(135deg, #f5c800 0%, #e6b800 100%)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "0.75rem",
    }}>
      <svg width="100" height="50" viewBox="0 0 120 60" fill="none" style={{ opacity: 0.3 }}>
        <rect x="10" y="28" width="100" height="20" rx="4" fill="#0d0d0d" />
        <path d="M25 28 C30 12 40 8 60 8 C80 8 90 12 95 28 Z" fill="#0d0d0d" />
        <circle cx="30" cy="50" r="9" fill="#0d0d0d" />
        <circle cx="90" cy="50" r="9" fill="#0d0d0d" />
        <circle cx="30" cy="50" r="5" fill="#f5c800" />
        <circle cx="90" cy="50" r="5" fill="#f5c800" />
      </svg>
      <p style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>
        Sri Guru Driving School
      </p>
    </div>
  );
}

/* ─── Main export ─── */
export function CarScene() {
  return (
    <CarErrorBoundary fallback={<CanvasErrorFallback />}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.55, 5.8], fov: 34 }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFShadowMap;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.9;
        }}
      >
        <ambientLight intensity={1.0} color="#e8eeff" />
        <directionalLight position={[3, 5, 4]} intensity={2.8} color="#ffffff" castShadow />
        <directionalLight position={[-3, 3, 2]} intensity={1.4} color="#c8d8ff" />
        <directionalLight position={[0, 2, -5]} intensity={1.0} color="#fff0f0" />
        <directionalLight position={[0, -3, 3]} intensity={0.4} color="#ffe8c8" />
        <pointLight position={[0, -0.4, 2.5]} intensity={1.8} color="#cc0033" distance={6} decay={2} />

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
    </CarErrorBoundary>
  );
}

useGLTF.preload("/car.glb");
