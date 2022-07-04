import { Stage, Reflector } from '@react-three/drei';
import { Temple } from '../components/Temple';

export const Scene = () => {

  return (
    <Stage intensity={0.3} environment="night" >
      <mesh>
        <Temple />
      </mesh>
      <Reflector
        blur={[512, 512]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={0.75} // How much blur mixes with surface roughness
        mixStrength={1.0} // Strength of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality
        args={[10, 10]} // PlaneBufferGeometry arguments
        rotation={[-Math.PI * 0.5, 0, 0]}
        mirror={1} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        minDepthThreshold={0.25}
        maxDepthThreshold={1}
        depthScale={50}
      >
        {(Material, props) => (
          <Material metalness={0.5} roughness={1} {...props} />
        )}
      </Reflector>

    </Stage >
  )
}

export default Scene
