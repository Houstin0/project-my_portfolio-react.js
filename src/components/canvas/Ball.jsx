// import React, { Suspense, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Ball = ({ imgUrl }) => {
//   const [decal] = useTexture([imgUrl]);
//   const [hovered, setHovered] = useState(false);
//   const [rotationY, setRotationY] = useState(0);

//   useFrame(({ clock }) => {
//     if (!hovered) {
//       // Rotate the ball gradually
//       setRotationY((prevRotation) => prevRotation + 0.01);
//     } else {
//       // If hovered, set rotation to show front face
//       setRotationY(Math.PI);
//     }
//   });

  
  
//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={4}>
//       <ambientLight intensity={0.75} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh
//         castShadow
//         receiveShadow
//         scale={2.75}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//         rotation={[0, rotationY, 0]} // Apply rotation on the Y-axis
//       >
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color='#fff8eb'
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//        {/* Front face */}
//        <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//         {/* Back face */}
//         <Decal
//           position={[0, 0, -1]} // Adjust position to be on the opposite side
//           rotation={[0, Math.PI, 0]} // Rotate 180 degrees to face the camera
//           scale={1}
//           map={decal}
//           flatShading
//         />
//          {/* Side faces */}
//          <Decal
//           position={[1, 0, 0]} // Right side
//           rotation={[0, Math.PI / 2, 0]} // Rotate 90 degrees around y-axis
//           scale={1}
//           map={decal}
//           flatShading
//         />
//         <Decal
//           position={[-1, 0, 0]} // Left side
//           rotation={[0, -Math.PI / 2, 0]} // Rotate -90 degrees around y-axis
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;
