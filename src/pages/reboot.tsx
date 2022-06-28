import Head from 'next/head';
import { NextPage } from 'next';
import Layout from "../components/Layouts/Content"
import { Canvas } from '@react-three/fiber';
import { Stage, Stars, OrbitControls } from '@react-three/drei';

const Reboot: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reboot</title>
        <meta
          name="description"
          content="Reboot"
        />
      </Head>
      <Layout>
        <main>
          <div className="font-cursive text-[40px]">
            Universe rebooting in 10 seconds... <span className="text-atari-red">don't panic</span>.
          </div>
          <div className="h-[1000px]">
            <Canvas>
              <Stage shadows={false}>
                <mesh>
                  <Stars radius={100} depth={50} count={500000} factor={4} saturation={0} fade speed={1} />
                </mesh>
              </Stage>
              <OrbitControls autoRotate={true} />
            </Canvas>

          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Reboot;

