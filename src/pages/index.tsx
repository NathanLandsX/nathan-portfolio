import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { NextPage } from 'next'
import Layout from "../components/Layouts/Content"
import { Scene } from "../components/Scene"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'

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
                <Link href="/works">
                  <a>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="btn">
                      View Works
                    </motion.button>
                  </a>
                </Link>
                <Link href="mailto:nathan@lore.com">
                  <a>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="ml-2 btn-secondary">
                      Contact
                    </motion.button>
                  </a>
                </Link>
              </div>

            </div>
            <div className="col-span-1 h-[500px]">
              <Canvas linear dpr={[1, 2]} camera={{ fov: 33 }}>
                <ambientLight intensity={2} />
                <directionalLight position={[0, 0, 30]} intensity={10} color={0xCD0BC1} />
                <directionalLight position={[10, 10, 0]} intensity={5} color={0x0EEBE2} />
                <Suspense fallback={null}>
                  <Scene />
                </Suspense>
                <OrbitControls autoRotate={true} target={[0, 4, 0]} />
              </Canvas>
            </div>
          </div>
          <div className="py-[120px]">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-3">
                <div className="col-span-1">
                  <Image src="/nathan.jpg" width="250" height="250" alt="Nathan Lands" className="rounded-full grayscale hover:grayscale-0" />
                </div>
                <div className="col-span-2">
                  <div className="pt-24 font-cursive font-bold text-[48px] antialiased">Hi, I'm Nathan</div>
                  <div className="pt-2 font-sans max-w-md text-zinc-500 antialiased"> I've spent most of my career in Silicon Valley. But I also have a long story. Learn more about me
                  </div>
                  <div className="mt-2">
                    <Link href="/about">
                      <a>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="btn-secondary">
                          Read My Story
                        </motion.button>
                      </a>
                    </Link>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          //  Investors / Worked With
        //  Speaking / Books

        // // Works Section

        // Contact Section

        </main>
      </Layout>

    </div >
  )
}

export default Home
