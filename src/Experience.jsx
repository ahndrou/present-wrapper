import { OrbitControls, useGLTF } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import * as THREE from "three";
import BoneRigidBodyGrid from "./BoneRigidBodyGrid";
import GroundPlane from "./GroundPlane";
import Paper from "./Paper";

export default function Experience() {
  const bonePositions = useBonePositions("./paperModel.glb");

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={2} />
      <OrbitControls />

      <Physics debug={true}>
        <BoneRigidBodyGrid bonePositionColumns={bonePositions} />

        <GroundPlane size={[5, 0.1, 5]} position={[0, -1, 0]} />
      </Physics>

      <Paper />
    </>
  );
}

// Loads the given GLTF file and extracts the world positions of armature bones.
// Assumes bones are arranged in chains - each bone in a chain has just one child.
function useBonePositions(gltf) {
  const loadedGLTF = useGLTF(gltf);
  const bonePositions = [];

  for (let rootBone of loadedGLTF.nodes.Armature.children) {
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

  return bonePositions;
}
