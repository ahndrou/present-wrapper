import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import BoneRigidBody from "./BoneRigidBody";

export default function Experience() {
  return (
    <>
      <OrbitControls />

      <Physics debug={true}>
        <BoneRigidBody />
      </Physics>

      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
