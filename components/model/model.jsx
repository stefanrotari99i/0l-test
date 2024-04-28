import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/earthquakes_-_2010__2011.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
        <points
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_4.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_5.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/earthquakes_-_2010__2011.glb");
