import { BallCollider, RigidBody } from "@react-three/rapier";

// Will allow bone transforms to be driven by physics interactions.
export default function BoneRigidBody() {
  return (
    <RigidBody colliders={false} type="fixed">
      <BallCollider sensor args={[0.5]} />
    </RigidBody>
  );
}
