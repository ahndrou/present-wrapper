import { RigidBody } from "@react-three/rapier";

export default function GroundPlane({ size, position }) {
  return (
    <RigidBody position={position} type="fixed">
      <mesh>
        <boxGeometry args={size} />
        <meshStandardMaterial color="green" />
      </mesh>
    </RigidBody>
  );
}
