import { OrbitControls, useGLTF } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import * as THREE from "three";
import BoneRigidBodyGrid from "./BoneRigidBodyGrid";
import GroundPlane from "./GroundPlane";
import Paper from "./Paper";
import { useLoader } from "@react-three/fiber";

useGLTF.preload(THREE.GLTFLoader, "./paperModel.glb");

export default function Experience() {
  const { boneChains, bonePositions } = useBones("./paperModel.glb");
  console.log(boneChains);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={2} />
      <OrbitControls />

      <Physics debug={true}>
        <BoneRigidBodyGrid
          bonePositionColumns={bonePositions}
          boneChains={boneChains}
        />

        <GroundPlane size={[5, 0.1, 5]} position={[0, -1, 0]} />
      </Physics>

      <Paper />
    </>
  );
}

// Loads the given GLTF file and extracts the bones, as well as their world positions.
// Assumes bones are arranged in chains - each bone in a chain has just one child.
function useBones(gltf) {
  const loadedGLTF = useGLTF(gltf);
  const bonePositions = [];
  const boneChains = [];

  for (let rootBone of loadedGLTF.nodes.Armature.children) {
    let workingBone = rootBone;
    const bonePositionsColumn = [];
    const boneChain = [];

    while (workingBone?.children) {
      const worldPosition = new THREE.Vector3();
      workingBone.getWorldPosition(worldPosition);
      bonePositionsColumn.push(worldPosition);

      boneChain.push(workingBone);

      workingBone = workingBone.children[0];
    }

    // Weird bug without this instanceof check. During first render an array with a SkinnedMesh is added.
    if (boneChain[0] instanceof THREE.Bone) {
      boneChains.push(boneChain);
      bonePositions.push(bonePositionsColumn);
    }
  }

  return { boneChains, bonePositions };
}
