"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;

    vec3 pos = position;
    pos.y += sin(pos.x * 10.0 + time) * 0.1 * intensity;
    pos.x += cos(pos.y * 8.0 + time * 1.5) * 0.05 * intensity;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vec2 uv = vUv;

    float noise = sin(uv.x * 20.0 + time) * cos(uv.y * 15.0 + time * 0.8);
    noise += sin(uv.x * 35.0 - time * 2.0) * cos(uv.y * 25.0 + time * 1.2) * 0.5;

    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
    color = mix(color, vec3(1.0), pow(abs(noise), 2.0) * intensity);

    float glow = 1.0 - length(uv - 0.5) * 2.0;
    glow = pow(glow, 2.0);

    gl_FragColor = vec4(color * glow, glow * 0.8);
  }
`;

export function ShaderPlane({
  position,
  color1 = "#ff5722",
  color2 = "#ffffff",
}: {
  position: [number, number, number];
  color1?: string;
  color2?: string;
}) {
  const mesh = useRef<THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>>(
    null,
  );

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      intensity: { value: 0.68 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    }),
    [color1, color2],
  );

  useFrame((state) => {
    uniforms.time.value = state.clock.elapsedTime * 0.42;
    uniforms.intensity.value =
      0.58 + Math.sin(state.clock.elapsedTime * 0.9) * 0.14;
  });

  return (
    <mesh ref={mesh} position={position}>
      <planeGeometry args={[2.65, 2.65, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function EnergyRing({
  radius = 1,
  position = [0, 0, 0],
}: {
  radius?: number;
  position?: [number, number, number];
}) {
  const mesh = useRef<
    THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>
  >(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.z = state.clock.elapsedTime * 0.22;
    mesh.current.material.opacity =
      0.18 + Math.sin(state.clock.elapsedTime * 1.1) * 0.08;
  });

  return (
    <mesh ref={mesh} position={position}>
      <ringGeometry args={[radius * 0.96, radius, 96]} />
      <meshBasicMaterial
        color="#ff6a2a"
        transparent
        opacity={0.22}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function BackgroundPaperShaders({
  reducedMotion = false,
}: {
  reducedMotion?: boolean;
}) {
  if (reducedMotion) return null;

  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 5.4], fov: 46 }}
      dpr={[1, 1.35]}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <group position={[0.95, -0.12, 0]} rotation={[0, 0, -0.16]}>
        <ShaderPlane
          position={[0.35, 0.2, 0]}
          color1="#d83a24"
          color2="#f2f2f2"
        />
        <ShaderPlane
          position={[1.25, -0.62, -0.28]}
          color1="#3a211b"
          color2="#ff8936"
        />
        <EnergyRing radius={1.32} position={[0.58, -0.08, 0.05]} />
      </group>
    </Canvas>
  );
}
