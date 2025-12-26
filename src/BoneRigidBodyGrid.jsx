// bonePositions is a 2D array of bone positions.

import BoneRigidBody from "./BoneRigidBody";

export default function BoneRigidBodyGrid({ bonePositionColumns }) {
  const boneRigidBodies = [];

  for (let column of bonePositionColumns) {
    for (let bonePosition of column) {
      const rb = <BoneRigidBody position={bonePosition} />;
      boneRigidBodies.push(rb);
    }
  }

  return <>{boneRigidBodies}</>;
}
