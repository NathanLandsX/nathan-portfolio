import { useGLTF } from '@react-three/drei';

export const Temple = () => {
  const { scene } = useGLTF('/models/temple2.glb');

  return <primitive object={scene} />
};

