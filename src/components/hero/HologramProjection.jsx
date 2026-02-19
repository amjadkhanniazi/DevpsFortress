import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const LINE_LAYOUT = [
  { width: 2.38, x: 0 },
  { width: 2.05, x: -0.11 },
  { width: 1.76, x: -0.24 },
  { width: 1.96, x: -0.09 },
  { width: 1.64, x: -0.28 },
];

const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 newPosition = position;
    newPosition.y += sin((uv.x * 20.0) + (uTime * 2.0)) * 0.005;
    newPosition.x += sin((uv.y * 28.0) + (uTime * 1.8)) * 0.006;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  uniform float uOpacity;
  uniform vec3 uColor;
  uniform float uSeed;
  varying vec2 vUv;

  void main() {
    float center = 1.0 - smoothstep(0.0, 0.5, abs(vUv.y - 0.5));
    float scan = 0.55 + 0.45 * sin((vUv.y * 120.0) + (vUv.x * (8.0 + uSeed)));
    float glow = center * scan;
    gl_FragColor = vec4(uColor, glow * uOpacity);
  }
`;

function HologramCodeLine({ index, x, width, progressRef, progress }) {
  const materialRef = useRef();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uColor: { value: new THREE.Color("#00f0ff") },
      uSeed: { value: index * 4.2 + 1.5 },
    }),
    [index],
  );

  useFrame(({ clock }) => {
    const liveProgress = progressRef?.current?.hologram ?? progress;
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
      materialRef.current.uniforms.uOpacity.value = liveProgress * (0.3 + index * 0.07);
    }
  });

  return (
    <group position={[x, index * 0.18, 0]}>
      <mesh>
        <planeGeometry args={[width, 0.1]} />
        <shaderMaterial
          ref={materialRef}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </group>
  );
}

export default function HologramProjection({ progress = 0, progressRef }) {
  const groupRef = useRef();
  const lines = useMemo(() => LINE_LAYOUT, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) {
      return;
    }

    const liveProgress = progressRef?.current?.hologram ?? progress;

    // The whole projection hovers and breathes vertically.
    groupRef.current.position.y = 1.18 + Math.sin(clock.elapsedTime * 1.35) * 0.03 + liveProgress * 0.2;
    groupRef.current.position.z = -0.35 + Math.cos(clock.elapsedTime * 1.1) * 0.01;
    groupRef.current.visible = liveProgress > 0.01;
  });

  return (
    <group ref={groupRef} visible={false}>
      {lines.map((line, index) => (
        <HologramCodeLine
          key={`${line.width}-${index}`}
          index={index}
          x={line.x}
          width={line.width}
          progress={progress}
          progressRef={progressRef}
        />
      ))}
    </group>
  );
}
