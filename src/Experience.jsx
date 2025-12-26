import { OrbitControls, useGLTF } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import * as THREE from "three";
import BoneRigidBodyGrid from "./BoneRigidBodyGrid";

export default function Experience() {
  const paperModel = useGLTF("./paperModel.glb");
  //   console.log(paperModel);

  const cube = paperModel.meshes.Cube;

  const bonePositions = [];

  for (let rootBone of paperModel.nodes.Armature.children) {
    let workingBone = rootBone;
    const bonePositionsColumn = [];

    while (workingBone?.children) {
      const worldPosition = new THREE.Vector3();
      workingBone.getWorldPosition(worldPosition);

      bonePositionsColumn.push(worldPosition);
      workingBone = workingBone.children[0];
    }
    bonePositions.push(bonePositionsColumn);
  }

  return (
    <>
      <OrbitControls />

      <Physics debug={true}>
        <BoneRigidBodyGrid bonePositionColumns={bonePositions} />
      </Physics>

      <primitive object={cube} />
    </>
  );
}
