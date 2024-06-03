import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Billboard, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, hovered, setHovered }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Rotate the computer gradually when hovered on
  useFrame(({ clock }) => {
    if (hovered) {
      // Rotate the computer gradually when hovered
      computer.scene.rotation.y = Math.sin(clock.getElapsedTime()) * 0.30;
    }
  });

  return (
<mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <hemisphereLight intensity={3.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    // Hide instructions after a few seconds
    const timeout = setTimeout(() => {
      setShowInstructions(false);
    }, 15000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {showInstructions && (
          <Billboard position={[0, 0, 0]}>
            <Text
              fontSize={0.5}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              Drag to Rotate
            </Text>
          </Billboard>
        )}
<Computers isMobile={isMobile} hovered={hovered} setHovered={setHovered} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
