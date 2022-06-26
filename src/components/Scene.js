import { Stage } from '@react-three/drei';
import { Temple } from '../components/Temple';

export const Scene = () => {

  return (
    <Stage intensity={0.3} environment="night" >
      <mesh>
        <Temple />
      </mesh>
    </Stage >
  )
}

export default Scene
