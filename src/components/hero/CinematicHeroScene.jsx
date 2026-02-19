import { Canvas, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { easeInOutCubic, easeOutExpo } from "../../utils/easings";
import LaptopRig from "./LaptopRig";
import { DissolveParticles, SandParticles } from "./ParticleSystems";

function GroundReflection() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]} receiveShadow>
      <planeGeometry args={[42, 42]} />
      <meshStandardMaterial color="#171819" roughness={0.3} metalness={0.74} />
    </mesh>
  );
}

function ReflectionGlow() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
      <planeGeometry args={[7.2, 4.6]} />
      <meshBasicMaterial
        color="#00f0ff"
        transparent
        opacity={0.08}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function CameraAndLaptopDirector({
  pointerRef,
  scrollProgressRef,
  liteMode,
  onProjectionReady,
  onHeadlineReady,
}) {
  const camera = useThree((state) => state.camera);
  const lookTarget = useRef(new THREE.Vector3(0, 0.75, 0));
  const cameraTarget = useRef(new THREE.Vector3(0, 1.5, 8));
  const projectionNotifiedRef = useRef(false);
  const headlineNotifiedRef = useRef(false);

  const animationStateRef = useRef({
    cameraZ: 8,
    cameraY: 1.5,
    yaw: 0,
    oscillation: 0,
    lidAngle: 0,
    amberIntensity: 0.35,
    keyboardGlow: 0,
    internalGlow: 0.22,
    hologram: 0,
  });

  useLayoutEffect(() => {
    const animationState = animationStateRef.current;
    const timeline = gsap.timeline();
    const speed = liteMode ? 0.82 : 1;

    // Stage 1 (0 - 0.8s): hold preload pose.
    timeline.to(animationState, { duration: 0.8 * speed });

    // Stage 2 (0.8 - 1.9s): camera push in and amber intensification.
    timeline.to(
      animationState,
      {
        duration: 1.1 * speed,
        cameraZ: 5,
        amberIntensity: 1.15,
        oscillation: 1,
        ease: easeInOutCubic,
      },
      0.8 * speed,
    );

    // Stage 3 (1.9 - 3.3s): lid opens with mechanical easing.
    timeline.to(
      animationState,
      {
        duration: 1.4 * speed,
        lidAngle: THREE.MathUtils.degToRad(110),
        ease: easeOutExpo,
      },
      1.9 * speed,
    );
    timeline.to(
      animationState,
      {
        duration: 0.25 * speed,
        keyboardGlow: 1.2,
        ease: "power1.out",
      },
      2.25 * speed,
    );
    timeline.to(
      animationState,
      {
        duration: 0.32 * speed,
        internalGlow: 0.48,
        ease: "power1.out",
      },
      2.58 * speed,
    );
    timeline.to(
      animationState,
      {
        duration: 0.25 * speed,
        hologram: 0.32,
        ease: "power1.out",
      },
      3.12 * speed,
    );
    timeline.to(
      animationState,
      {
        duration: 0.75 * speed,
        hologram: 1,
        oscillation: 0.45,
        ease: "power2.out",
        onStart: () => {
          if (!projectionNotifiedRef.current) {
            projectionNotifiedRef.current = true;
            onProjectionReady?.();
          }
        },
      },
      3.45 * speed,
    );

    // Stage 5 (4.6 - 5.4s): UI heading reveal signal.
    timeline.call(
      () => {
        if (!headlineNotifiedRef.current) {
          headlineNotifiedRef.current = true;
          onHeadlineReady?.();
        }
      },
      [],
      4.6 * speed,
    );

    return () => {
      timeline.kill();
    };
  }, [liteMode, onHeadlineReady, onProjectionReady]);

  useFrame(() => {
    const animationState = animationStateRef.current;
    const dissolveProgress = THREE.MathUtils.clamp(scrollProgressRef.current, 0, 1);

    cameraTarget.current.set(
      0,
      animationState.cameraY + dissolveProgress * 2.1,
      animationState.cameraZ + dissolveProgress * 1.05,
    );
    camera.position.lerp(cameraTarget.current, 0.08);

    lookTarget.current.set(0, 0.75 + dissolveProgress * 0.85, -0.08);
    camera.lookAt(lookTarget.current);
  });

  return (
    <>
      <LaptopRig
        pointerRef={pointerRef}
        scrollProgressRef={scrollProgressRef}
        liteMode={liteMode}
        animationStateRef={animationStateRef}
      />
      <DissolveParticles progressRef={scrollProgressRef} count={liteMode ? 90 : 160} />
    </>
  );
}

export default function CinematicHeroScene({
  pointerRef,
  scrollProgressRef,
  liteMode = false,
  onProjectionReady,
  onHeadlineReady,
}) {
  return (
    <Canvas
      dpr={liteMode ? [1, 1.1] : [1, 1.35]}
      shadows={!liteMode}
      performance={{ min: liteMode ? 0.72 : 0.84 }}
      gl={{
        antialias: !liteMode,
        powerPreference: "high-performance",
      }}
    >
      <perspectiveCamera makeDefault position={[0, 1.5, 8]} fov={44} near={0.1} far={100} />

      <color attach="background" args={["#111111"]} />
      <fogExp2 attach="fog" args={["#111111", 0.1]} />

      {/* Cinematic key lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 1.7, -1.2]} color="#00f0ff" intensity={0.55} distance={8} />
      <spotLight
        position={[0, 6, 2]}
        angle={0.42}
        penumbra={0.8}
        intensity={1.1}
        castShadow={!liteMode}
        shadow-mapSize-width={liteMode ? 512 : 768}
        shadow-mapSize-height={liteMode ? 512 : 768}
      />

      <GroundReflection />
      <ReflectionGlow />
      <SandParticles count={liteMode ? 110 : 180} />

      <Suspense fallback={null}>
        <CameraAndLaptopDirector
          pointerRef={pointerRef}
          scrollProgressRef={scrollProgressRef}
          liteMode={liteMode}
          onProjectionReady={onProjectionReady}
          onHeadlineReady={onHeadlineReady}
        />
      </Suspense>
    </Canvas>
  );
}
