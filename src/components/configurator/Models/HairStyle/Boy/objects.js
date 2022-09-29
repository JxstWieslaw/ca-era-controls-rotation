import { useRef } from "react";
import { useGLTF } from "@react-three/drei";


//Models / GLB files outside the Home function.
export function BoyHairstyle1({ ...props }) {
  console.log(props);
  const name = "BHS1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/Boy Hair 01.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.BoysHair1.geometry}
        material={materials.aiStandardSurface2}
      >
        {props.texture !== null && (
          <meshPhongMaterial
            attachArray="material"
            map={props.texture.map}
            shininess={props.texture.shininess}
          />
        )}
        {props.color != null && (
          <meshPhongMaterial
            attachArray="material"
            color={props.color.color}
            normalMap={props.normalMap}
            shininess={props.color.shininess}
          />
        )}
      </mesh>
    </group>
  );
}

useGLTF.preload("/Boy Hair 01.glb");

export function BoyHairstyle2({ ...props }) {
  console.log(props);
  const name = "BHS2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/Boy Hair 02.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, -0.08]}
    >
      <mesh
        geometry={nodes.BoysHair2.geometry}
        material={materials.aiStandardSurface5}
      >
        {props.texture !== null && (
          <meshPhongMaterial
            attachArray="material"
            map={props.texture.map}
            shininess={props.texture.shininess}
          />
        )}
        {props.color != null && (
          <meshPhongMaterial
            attachArray="material"
            color={props.color.color}
            normalMap={props.normalMap}
            shininess={props.color.shininess}
          />
        )}
      </mesh>
    </group>
  );
}

useGLTF.preload("/Boy Hair 02.glb");

export function BoyHairstyle3({ ...props }) {

  console.log(props);
  const name = "BHS3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/Boy Hair 03.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <mesh
        geometry={nodes.BoysHair3.geometry}
        material={materials.aiStandardSurface9}
      >
        {props.texture !== null && (
          <meshPhongMaterial
            attachArray="material"
            map={props.texture.map}
            shininess={props.texture.shininess}
          />
        )}
        {props.color != null && (
          <meshPhongMaterial
            attachArray="material"
            color={props.color.color}
            normalMap={props.normalMap}
            shininess={props.color.shininess}
          />
        )}
      </mesh>
    </group>
  );
}

useGLTF.preload("/Boy Hair 03.glb");
