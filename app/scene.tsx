"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, RoundedBox, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Laptop() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ pointer, clock }) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.15 - 0.1, 0.035);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.07, 0.035);
    group.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.045;
  });
  return (
    <group ref={group} position={[-0.45, -0.15, 0]} rotation={[-0.08, -0.22, 0]}>
      <RoundedBox args={[2.55, 1.62, 0.09]} radius={0.07} smoothness={4} position={[0, 0.82, 0]}>
        <meshStandardMaterial color="#202a39" metalness={0.85} roughness={0.25} />
      </RoundedBox>
      <mesh position={[0, 0.82, 0.052]}>
        <planeGeometry args={[2.38, 1.45]} />
        <meshBasicMaterial color="#080e18" />
      </mesh>
      <mesh position={[0, 0.82, 0.06]}>
        <planeGeometry args={[2.25, 1.31]} />
        <meshBasicMaterial color="#101c2c" />
      </mesh>
      <mesh position={[-0.58, 1.05, 0.068]}>
        <planeGeometry args={[0.8, 0.018]} />
        <meshBasicMaterial color="#a68cff" />
      </mesh>
      <mesh position={[-0.58, 0.94, 0.068]}>
        <planeGeometry args={[0.8, 0.012]} />
        <meshBasicMaterial color="#6cdedc" />
      </mesh>
      <mesh position={[-0.58, 0.83, 0.068]}>
        <planeGeometry args={[0.56, 0.012]} />
        <meshBasicMaterial color="#53677f" />
      </mesh>
      <mesh position={[0.55, 0.75, 0.069]}>
        <planeGeometry args={[0.65, 0.32]} />
        <meshBasicMaterial color="#172b40" />
      </mesh>
      {[0,1,2,3,4,5,6].map((v) => (
        <mesh key={v} position={[0.31 + v * 0.075, 0.65 + Math.sin(v * 0.7) * 0.08, 0.072]}>
          <boxGeometry args={[0.035, 0.12 + (v % 3) * 0.05, 0.004]} />
          <meshBasicMaterial color={v % 2 ? "#70e0d8" : "#9c88ff"} />
        </mesh>
      ))}
      <mesh position={[0, -0.02, 0.12]} rotation={[-Math.PI / 2 + 0.07, 0, 0]}>
        <boxGeometry args={[2.72, 1.75, 0.07]} />
        <meshStandardMaterial color="#8794a6" metalness={0.9} roughness={0.22} />
      </mesh>
      <mesh position={[0, -0.005, 0.16]} rotation={[-Math.PI / 2 + 0.07, 0, 0]}>
        <boxGeometry args={[0.62, 0.42, 0.008]} />
        <meshStandardMaterial color="#526073" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Phone() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.12 + 0.15, 0.04);
  });
  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.12}>
      <group ref={ref} position={[1.25, -0.15, 0.65]} rotation={[0.03, -0.15, -0.08]}>
        <RoundedBox args={[0.78, 1.62, 0.12]} radius={0.11} smoothness={6}>
          <meshStandardMaterial color="#293448" metalness={0.9} roughness={0.22} />
        </RoundedBox>
        <mesh position={[0, 0, 0.064]}>
          <planeGeometry args={[0.66, 1.46]} />
          <meshBasicMaterial color="#0b111c" />
        </mesh>
        <mesh position={[-0.16, 0.48, 0.07]}>
          <circleGeometry args={[0.09, 24]} />
          <meshBasicMaterial color="#a18cff" />
        </mesh>
        <mesh position={[0.08, 0.23, 0.071]}>
          <planeGeometry args={[0.36, 0.018]} />
          <meshBasicMaterial color="#e2e8f4" />
        </mesh>
        <mesh position={[0.02, 0.13, 0.071]}>
          <planeGeometry args={[0.24, 0.012]} />
          <meshBasicMaterial color="#77869a" />
        </mesh>
        <mesh position={[0, -0.18, 0.071]}>
          <planeGeometry args={[0.48, 0.38]} />
          <meshBasicMaterial color="#17263a" />
        </mesh>
        {[0,1,2,3,4,5].map((v) => (
          <mesh key={v} position={[-0.18 + v * 0.07, -0.28 + Math.sin(v * 0.9) * 0.09, 0.074]}>
            <boxGeometry args={[0.035, 0.1 + (v % 3) * 0.06, 0.004]} />
            <meshBasicMaterial color={v % 2 ? "#75e3db" : "#9f8bff"} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function FloatingShape({ position, color, size, shape = "icosahedron" }: { position: [number,number,number], color: string, size: number, shape?: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.elapsedTime * 0.22;
      ref.current.rotation.y = clock.elapsedTime * 0.32;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.45}>
      <mesh ref={ref} position={position}>
        {shape === "octahedron" ? <octahedronGeometry args={[size, 1]} /> : <icosahedronGeometry args={[size, 1]} />}
        <meshPhysicalMaterial color={color} metalness={0.45} roughness={0.17} clearcoat={1} clearcoatRoughness={0.12} emissive={color} emissiveIntensity={0.18} />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 4]} intensity={2.5} color="#dce8ff" />
      <pointLight position={[-3, 1, 2]} intensity={22} color="#7e69ff" distance={8} />
      <pointLight position={[3, -1, 2]} intensity={18} color="#55e5dc" distance={7} />
      <Laptop />
      <Phone />
      <FloatingShape position={[-2.1, 0.75, -0.2]} color="#9c87ff" size={0.32} shape="octahedron" />
      <FloatingShape position={[1.9, 1.15, -0.4]} color="#77e5de" size={0.22} />
      <FloatingShape position={[2.05, -0.95, -0.1]} color="#8d79ff" size={0.3} shape="octahedron" />
      <Sparkles count={22} scale={[5.2, 3.1, 2.2]} size={1.1} speed={0.1} color="#b3c9ff" opacity={0.42} />
      <ContactShadows position={[0, -1.12, 0]} opacity={0.48} scale={5.5} blur={2.6} far={3.5} />
      <Environment preset="city" />
    </>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0.4, 6.1], fov: 36 }} dpr={[1, 1.15]} gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}>
      <SceneContent />
    </Canvas>
  );
}
