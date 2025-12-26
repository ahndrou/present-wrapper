import { BallCollider, RigidBody } from "@react-three/rapier";

// Will allow bone transforms to be driven by physics interactions.
export default function BoneRigidBody({ position }) {
  return (
    <RigidBody colliders={false} type="dynamic" position={position}>
      <BallCollider sensor args={[0.025]} />
    </RigidBody>
  );
}
