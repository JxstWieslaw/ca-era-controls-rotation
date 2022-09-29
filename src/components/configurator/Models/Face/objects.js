import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

//Models / GLB files outside the Home function.

export function Face1({ ...props }) {
  console.log(props);
  const name = "F1";
  const group = useRef();
  const { nodes, materials } = useGLTF("/Cow Glb.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={240}
      position={[0, -2.5, 0]}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          geometry={nodes.Mesh052.geometry}
          material={materials.lambert32}
        />
        <mesh
          geometry={nodes.Mesh052_1.geometry}
          material={materials.lambert31}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Cow Glb.glb");

export function Face2({ ...props }) {
  console.log(props);
  const name = "F2";
  const group = useRef();
  const { nodes, materials } = useGLTF("/Dog Glb.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={285}
      position={[0, -3.2, 0]}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          geometry={nodes.Mesh054.geometry}
          material={materials["lambert34.001"]}
        />
        <mesh
          geometry={nodes.Mesh054_1.geometry}
          material={materials["lambert33.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Dog Glb.glb");

export function Face3({ ...props }) {
  console.log(props);
  const name = "F3";
  const group = useRef();
  const { nodes, materials } = useGLTF("/Elephant GLB.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2, 0]}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          geometry={nodes.Mesh058.geometry}
          material={materials.lambert36}
        />
        <mesh
          geometry={nodes.Mesh058_1.geometry}
          material={materials.lambert37}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Elephant GLB.glb");

export function Face4({ ...props }) {
  console.log(props);
  const name = "F4";
  const group = useRef();
  const { nodes, materials } = useGLTF("/Human Face.glb");
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
        geometry={nodes.Head.geometry}
        material={materials["lambert8.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/Human Face.glb");

export function Face5({ ...props }) {
  console.log(props);
  const name = "F5";
  const group = useRef();
  const { nodes, materials } = useGLTF("/Panda.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={240}
      position={[0, -2.55, 0]}
    >
      <mesh
        geometry={nodes.Panda.geometry}
        material={materials.lambert83}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/Panda.glb");

export function Face6({ ...props }) {
  console.log(props);
  const name = "F6";
  const group = useRef();
  const { nodes, materials } = useGLTF("/Pig.glb");
  return (
    <group
      name={name}
      ref={group}
      {...props}
      dispose={null}
      scale={200}
      position={[0, -2.05, 0]}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          geometry={nodes.Mesh002.geometry}
          material={materials.lambert84}
        />
        <mesh
          geometry={nodes.Mesh002_1.geometry}
          material={materials.lambert85}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Pig.glb");
