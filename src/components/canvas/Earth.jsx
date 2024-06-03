import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

import CanvasLoader from "../Loader";

const EarthAndStars = () => {
  const earthRef = useRef();
  const starsRef = useRef();
  const [earth] = useState(() => useGLTF("./planet/scene.gltf"));
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (earthRef.current && starsRef.current) {
      earthRef.current.rotation.y -= delta / 10;
      starsRef.current.rotation.x -= delta / 10;
      starsRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <>
      <primitive object={earth.scene} ref={earthRef} scale={2.5} position-y={0} rotation-y={0} />
      <group rotation={[0, 0, Math.PI / 4]} ref={starsRef}>
        <Points positions={sphere} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color='#f272c8'
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  );
};

const CombinedCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <EarthAndStars />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CombinedCanvas;
