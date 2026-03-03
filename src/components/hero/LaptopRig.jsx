import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import HologramProjection from "./HologramProjection";
import { HologramParticles } from "./ParticleSystems";

export default function LaptopRig({
  pointerRef,
  scrollProgressRef,
  liteMode = false,
  animationStateRef,
}) {
  const rootRef = useRef();
  const lidRef = useRef();
  const amberPointLightRef = useRef();
  const bodyMaterialRef = useRef();
  const lidMaterialRef = useRef();
  const keyboardMaterialRef = useRef();
  const screenMaterialRef = useRef();
  const glassMaterialRef = useRef();

  const staticMaterials = useMemo(
    () => [bodyMaterialRef, lidMaterialRef, keyboardMaterialRef, screenMaterialRef, glassMaterialRef],
    [],
  );

  useFrame(({ clock }, delta) => {
    if (!rootRef.current || !lidRef.current) {
      return;
    }

    const anim = animationStateRef.current;
    const pointer = pointerRef.current;
    const scroll = THREE.MathUtils.clamp(scrollProgressRef.current, 0, 1);
    // Keep a visible base opacity through the hero scroll so the section never feels blank.
    const opacity = THREE.MathUtils.clamp(1 - scroll * 0.82, 0.2, 1);

    // Mouse-based parallax with timeline-driven oscillation.
    const pointerRotationY = THREE.MathUtils.degToRad(pointer.x * 6);
    const pointerRotationX = THREE.MathUtils.degToRad(-pointer.y * 4.2);
    const oscillation = Math.sin(clock.elapsedTime * 2.5) * THREE.MathUtils.degToRad(5) * anim.oscillation;
    const targetY = pointerRotationY + oscillation + anim.yaw;

    rootRef.current.rotation.y = THREE.MathUtils.lerp(rootRef.current.rotation.y, targetY, 0.08);
    rootRef.current.rotation.x = THREE.MathUtils.lerp(rootRef.current.rotation.x, pointerRotationX, 0.08);
    rootRef.current.position.y = 0.68 + Math.sin(clock.elapsedTime * 1.8) * 0.05;

    // Stage 3: lid opening from 0 to 110 degrees.
    lidRef.current.rotation.x = -anim.lidAngle;

    // Stage lighting and glow transitions.
    if (amberPointLightRef.current) {
      amberPointLightRef.current.intensity = anim.amberIntensity;
      amberPointLightRef.current.distance = 2.7 + anim.internalGlow * 0.7;
    }

    if (keyboardMaterialRef.current) {
      keyboardMaterialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        keyboardMaterialRef.current.emissiveIntensity,
        anim.keyboardGlow,
        delta * 3.6,
      );
      keyboardMaterialRef.current.opacity = opacity;
    }

    if (screenMaterialRef.current) {
      screenMaterialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        screenMaterialRef.current.emissiveIntensity,
        anim.internalGlow,
        delta * 3.2,
      );
      screenMaterialRef.current.opacity = opacity;
    }

    if (glassMaterialRef.current) {
      glassMaterialRef.current.opacity = 0.16 * opacity;
    }

    staticMaterials.forEach((materialRef) => {
      if (!materialRef.current) {
        return;
      }
      materialRef.current.opacity = opacity;
      materialRef.current.needsUpdate = true;
    });
  });

  return (
    <group ref={rootRef} position={[0, 0.68, 0]}>
      {/* Body and chassis */}
      <mesh castShadow receiveShadow position={[0, 0.02, 0]}>
        <boxGeometry args={[2.65, 0.15, 1.82]} />
        <meshPhysicalMaterial
          ref={bodyMaterialRef}
          color="#1c2228"
          metalness={0.82}
          roughness={0.24}
          clearcoat={0.65}
          clearcoatRoughness={0.17}
          transparent
          opacity={1}
        />
      </mesh>

      {/* Keyboard deck with cyan emissive trigger at 30 degrees */}
      <mesh castShadow receiveShadow position={[0, 0.09, -0.05]}>
        <boxGeometry args={[2.38, 0.02, 1.36]} />
        <meshStandardMaterial
          ref={keyboardMaterialRef}
          color="#171b20"
          emissive="#00f0ff"
          emissiveIntensity={0}
          roughness={0.48}
          metalness={0.72}
          transparent
          opacity={1}
        />
      </mesh>

      {/* Lid and display panel */}
      <group ref={lidRef} position={[0, 0.08, -0.92]}>
        <mesh castShadow receiveShadow position={[0, 0.04, 0.92]}>
          <boxGeometry args={[2.62, 0.08, 1.72]} />
          <meshPhysicalMaterial
            ref={lidMaterialRef}
            color="#12171c"
            metalness={0.83}
            roughness={0.2}
            clearcoat={0.72}
            clearcoatRoughness={0.14}
            transparent
            opacity={1}
          />
        </mesh>

        <mesh position={[0, 0.048, 0.92]}>
          <planeGeometry args={[2.34, 1.46]} />
          <meshStandardMaterial
            ref={screenMaterialRef}
            color="#0b1014"
            emissive="#ff8c42"
            emissiveIntensity={0.22}
            roughness={0.1}
            metalness={0.35}
            transparent
            opacity={1}
          />
        </mesh>

        <mesh position={[0, 0.049, 0.92]}>
          <planeGeometry args={[2.42, 1.54]} />
          <meshPhysicalMaterial
            ref={glassMaterialRef}
            color="#59d4f0"
            transmission={0.82}
            roughness={0.02}
            metalness={0.1}
            thickness={0.25}
            transparent
            opacity={0.16}
          />
        </mesh>
      </group>

      {/* Neon amber source in chassis for cinematic underglow */}
      <pointLight
        ref={amberPointLightRef}
        position={[0, 0.18, -0.2]}
        color="#ff8c42"
        intensity={0.38}
        distance={3.0}
        decay={2.0}
      />

      <HologramProjection progressRef={animationStateRef} />
      <HologramParticles intensityRef={animationStateRef} count={liteMode ? 70 : 120} />
    </group>
  );
}
