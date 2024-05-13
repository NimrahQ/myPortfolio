/* eslint-disable react/no-unknown-property */
 // eslint-disable-next-line react/no-unknown-property
import { Suspense} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const { viewport } = useThree();
  const scale = viewport.width > 768 ? 0.75 : 0.7;
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
     
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={[0, -3.25, -1.5]}
        angle={0.1}
        penumbra={1}
      />
    </mesh>
  );
};
export const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload />
    </Canvas>
  );
};

export default Computers;
