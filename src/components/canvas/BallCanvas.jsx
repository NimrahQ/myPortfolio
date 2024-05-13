import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  // eslint-disable-next-line react/prop-types
  const [decal] = useTexture([props.imgUrl]);

  // console.log(props.imgUrl,"ppppppp");
  // console.log('====================================');
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.29} />

      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="white"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flat
        />
      </mesh>
    </Float>
  );
};

// eslint-disable-next-line react/prop-types
const BallCanvas = ({ icon }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }} frameloop="always">
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />

        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
