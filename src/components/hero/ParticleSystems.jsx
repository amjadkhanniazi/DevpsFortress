import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const randomRange = (min, max) => min + Math.random() * (max - min);

function useParticleBuffers(count, bounds) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      positions[i3 + 0] = randomRange(-bounds.x, bounds.x);
      positions[i3 + 1] = randomRange(bounds.minY, bounds.maxY);
      positions[i3 + 2] = randomRange(-bounds.z, bounds.z);
      velocities[i] = randomRange(bounds.speedMin, bounds.speedMax);
    }

    return { positions, velocities };
  }, [bounds.maxY, bounds.minY, bounds.speedMax, bounds.speedMin, bounds.x, bounds.z, count]);
}

export function SandParticles({ count = 180 }) {
  const pointsRef = useRef();
  const { positions, velocities } = useParticleBuffers(count, {
    x: 7.5,
    z: 6.5,
    minY: 0.02,
    maxY: 3.2,
    speedMin: 0.01,
    speedMax: 0.04,
  });

  useFrame((_, delta) => {
    const points = pointsRef.current;
    if (!points) {
      return;
    }

    const attr = points.geometry.getAttribute("position");
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      attr.array[i3 + 0] += Math.sin((i + attr.array[i3 + 1]) * 0.01) * delta * 0.02;
      attr.array[i3 + 1] += velocities[i] * delta;
      if (attr.array[i3 + 1] > 3.2) {
        attr.array[i3 + 1] = 0.02;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} position={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d8ba8d"
        size={0.03}
        transparent
        opacity={0.12}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function HologramParticles({ intensity = 0, intensityRef, count = 120 }) {
  const pointsRef = useRef();
  const materialRef = useRef();
  const { positions, velocities } = useParticleBuffers(count, {
    x: 1.5,
    z: 0.7,
    minY: 0.0,
    maxY: 2.6,
    speedMin: 0.3,
    speedMax: 0.9,
  });

  useFrame((_, delta) => {
    const dynamicIntensity = intensityRef?.current?.hologram ?? intensity;
    const points = pointsRef.current;
    if (!points) {
      return;
    }

    const attr = points.geometry.getAttribute("position");
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      attr.array[i3 + 0] += Math.sin((i * 0.17) + attr.array[i3 + 1]) * delta * 0.02;
      attr.array[i3 + 1] += velocities[i] * delta * (0.5 + dynamicIntensity);
      if (attr.array[i3 + 1] > 2.6) {
        attr.array[i3 + 1] = 0.0;
      }
    }
    attr.needsUpdate = true;

    if (materialRef.current) {
      materialRef.current.opacity = 0.55 * dynamicIntensity;
    }
  });

  return (
    <points ref={pointsRef} position={[0, 1.15, -0.35]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color="#00f0ff"
        size={0.026}
        transparent
        opacity={0}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function DissolveParticles({ progress = 0, progressRef, count = 160 }) {
  const pointsRef = useRef();
  const materialRef = useRef();
  const { positions, velocities } = useParticleBuffers(count, {
    x: 1.3,
    z: 0.95,
    minY: 0.2,
    maxY: 1.6,
    speedMin: 0.18,
    speedMax: 0.45,
  });

  useFrame((_, delta) => {
    const currentProgress = progressRef?.current ?? progress;
    const points = pointsRef.current;
    if (!points) {
      return;
    }

    const attr = points.geometry.getAttribute("position");
    const spread = 1 + currentProgress * 1.4;

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      attr.array[i3 + 0] += Math.sin(i * 0.25) * delta * currentProgress * 0.2;
      attr.array[i3 + 1] += velocities[i] * delta * currentProgress;
      attr.array[i3 + 2] += Math.cos(i * 0.31) * delta * currentProgress * 0.15;

      if (attr.array[i3 + 1] > 2.2) {
        attr.array[i3 + 1] = 0.2;
      }

      attr.array[i3 + 0] = THREE.MathUtils.clamp(attr.array[i3 + 0], -1.3 * spread, 1.3 * spread);
      attr.array[i3 + 2] = THREE.MathUtils.clamp(attr.array[i3 + 2], -0.95 * spread, 0.95 * spread);
    }

    attr.needsUpdate = true;
    if (materialRef.current) {
      materialRef.current.opacity = 0.75 * currentProgress;
    }
  });

  return (
    <points ref={pointsRef} position={[0, 0.7, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color="#8bdfff"
        size={0.03}
        transparent
        opacity={0}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
