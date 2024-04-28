"use client";

import { Canvas } from "@react-three/fiber";
import { Model } from "@/components/model/model";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="w-[50vw] h-screen absolute bottom-0 right-0 ">
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <spotLight position={[0, 0, 10]} />
        <directionalLight position={[0, 10, 0]} />

        <Model scale={5} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          zoomToCursor={true}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
