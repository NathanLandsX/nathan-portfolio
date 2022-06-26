import Head from 'next/head'
import React, { Suspense } from 'react'
import { NextPage } from 'next'
import Layout from "../components/Layouts/Content"
import { Scene } from "../components/Scene"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="The NFT Marketplace focused on artists and lore."
        />
      </Head>

      <Layout>

        <main>
          <div className="grid md:grid-cols-2 pt-14">
            <div className="col-span-1">
              <div className="pt-24 font-cursive text-[48px] antialiased">Entrepreneur <span className="font-extrabold text-[#CD0BC1]">developer</span> designer</div>
              <div className="pt-2 font-cursive text-[16px] text-zinc-500 antialiased">Based in Kyoto,Japan</div>

              <div className="pt-6">
                <button className="btn hover:-translate-y-0.5 hover:scale-105 hover:bg-zinc-700 hover:border-zinc-700 duration-150">
                  Works
                </button>
                <button className="ml-2 btn-secondary hover:-translate-y-0.5 ">
                  Contact
                </button>

              </div>

            </div>
            <div className="col-span-1 h-[500px]">
              <Canvas linear dpr={[1, 2]} camera={{ fov: 33 }}>
                <ambientLight intensity={3} />
                <directionalLight position={[0, 0, 30]} intensity={10} color={0xCD0BC1} />
                <directionalLight position={[10, 10, 0]} intensity={5} color={0x0EEBE2} />
                <Suspense fallback={null}>
                  <Scene />
                </Suspense>
                <OrbitControls autoRotate={true} target={[0, 4, 0]} />
              </Canvas>
            </div>
          </div>

        </main>
      </Layout>

    </div >
  )
}

export default Home
