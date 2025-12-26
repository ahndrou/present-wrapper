import { useGLTF } from "@react-three/drei";

export default function Paper() {
  // This hook provides caching for the whole tree and so we don't need to use it at parent level and pass
  // it in as a prop - we can use it separately where it is needed.
  const paperModel = useGLTF("./paperModel.glb");

  return <primitive object={paperModel.meshes.Cube} />;
}
