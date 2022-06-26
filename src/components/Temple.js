import { useGLTF } from '@react-three/drei';

export const Temple = () => {
  const { scene } = useGLTF('/models/temple.glb');

  return <primitive object={scene} />
};

