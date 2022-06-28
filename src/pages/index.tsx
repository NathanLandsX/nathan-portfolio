import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, Suspense } from 'react'
import { NextPage } from 'next'
import Layout from "../components/Layouts/Content"
import { Scene } from "../components/Scene"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Reflector } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter()

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === '4', e.key === '2') {
        router.push('/secret')
      }
    })
  })

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
              <div className="pt-24 font-cursive text-[48px] antialiased">Entrepreneur <span className="font-extrabold text-punk-pink">developer</span> designer</div>
              <div className="pt-2 font-cursive text-[16px] text-zinc-500 antialiased">Based in <span className="text-atari-blue">Kyoto, Japan</span></div>

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
            <div className="col-span-1 h-[300px] md:h-[500px]">
              <Canvas linear camera={{ fov: 33 }}>
                <pointLight position={[10, 10, 10]} />
                <ambientLight intensity={2} />
                <directionalLight position={[10, 10, 30]} intensity={10} color={0xCD0BC1} />
                <directionalLight position={[10, 10, 0]} intensity={5} color={0x0EEBE2} />
                <Suspense fallback={null}>
                  <Scene />
                </Suspense>
                <OrbitControls autoRotate={true} target={[0, 4, 0]} />
              </Canvas>
            </div>
          </div>

          <div className="my-24 border-spacing-x-3 border-2 border-atari-blue h-[500px]">
            <div className="flex-auto h-96">
              <div className="flex flex-col items-center pt-12 font-cursive text-[40px]">
                // Social Proof
                <div className="flex flex-col text-left max-w-3xl flex-wrap pt-12 font-mono text-xl">
                  <ul className="list-none">
                    <li className="pb-4"> <span className="text-punk-red">Sold 2 Silicon Valley startups</span>(Gamify, Binded).</li>
                    <li className="pb-4"> <span className="text-punk-blue">Raised money from top investors</span> including Taizo Son, Asahi Shimbun, and Scott & Cyan Banister.</li>
                    <li> <span className="text-punk-yellow">Early bitcon investor</span>. Referenced in the first major book on crypto, <span className="italic">The Age of Cryptocurrency</span>.</li>
                  </ul>
                </div>
                <div className="pt-12">
                  <span className="font-cursive text-zinc-500 text-xl">// TODO: Add More Stuff</span>
                </div>

              </div>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-3">
                <div className="col-span-1 pt-36">
                  <img src="/nathan-pixel.png" onMouseOver={e => (e.currentTarget.src = "/nathan.jpg")} onMouseOut={e => (e.currentTarget.src = "/nathan-pixel.png")} width="250" height="250" alt="Nathan Lands" className="rounded-full hover:grayscale-0" />
                </div>
                <div className="col-span-2">
                  <div className="pt-24 font-cursive font-bold text-[48px] antialiased">Hi, I'm Nathan</div>
                  <div className="pt-2 font-mono text-3xl antialiased">I'm passionate about creating simple and fun products that make the world a better place.
                  </div>
                  <div className="pt-6 font-mono text-atari-blue text-xl antialiased"> I’ve survived a tornado in Alabama, acted in Taiwan, started startups in Silicon Valley and even sat on the director’s chair at a major Disney film set in New Zealand.
                  </div>
                  <div className="mt-6">
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

          <div className="py-48">
            <div className="text-xl text-atari-blue">
              I'm currently working on building Lore.com, and taking on occasional contract work. Most recently I partnered with Barrie Osborne(exec producer Lord of the Rings, The Matrix) in an attempt to create a crypto-funded movie studio.
            </div>
          </div>

          <div className="h-96 rounded-3xl absolute -z-10 origin-left before left-0 w-full bg-gradient-to-b from-punk-pink by-atari-red to-punk-red"></div>
          <div className="flex-auto h-96">
            <div className="flex flex-col items-center pt-12 font-cursive text-[40px]">
              ##Contact
              <div className="flex flex-col text-center max-w-5xl flex-wrap pt-12 font-mono text-3xl">
                Want to discuss collaborating on a project? Email me at <span className="font-bold pt-4 tracking-widest text-5xl text-white hover:underline"><a href="mailto:nathan@lore.com">nathan@lore.com</a></span>
              </div>
              <div className="pt-12">
                <a href="https://www.twitter.com/nathanlands"><span className="text-[16px] hover:underline">Twitter</span></a>
              </div>

            </div>
          </div>
        </main>
      </Layout>

    </div >
  )
}

export default Home
