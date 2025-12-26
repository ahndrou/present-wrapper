// bonePositions is a 2D array of bone positions.

import { useFrame } from "@react-three/fiber";
import BoneRigidBody from "./BoneRigidBody";

export default function BoneRigidBodyGrid({ bonePositionColumns, boneChains }) {
  const boneRigidBodies = [];
  useFrame(() => {
    // For each bone chain, drive the bone transforms from the corresponding rigid body.
    for (let chainIndex = 0; chainIndex < boneChains.length; chainIndex++) {
      const boneChain = boneChains[chainIndex];
      for (let boneIndex = 0; boneIndex < boneChain.length; boneIndex++) {
        const bone = boneChain[boneIndex];
        const rigidBody = boneRigidBodies[chainIndex][boneIndex];

        // bone.setPosition(rigidBody.translation());
      }
    }
  });

  for (let column of bonePositionColumns) {
    for (let bonePosition of column) {
      const rb = <BoneRigidBody position={bonePosition} />;
      boneRigidBodies.push(rb);
    }
  }

  return <>{boneRigidBodies}</>;
}
