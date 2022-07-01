import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, Suspense } from 'react'
import { NextPage } from 'next'
import Layout from "../components/Layouts/Content"
import { Scene } from "../components/Scene"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Contact from '../components/Contact'

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
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn">
                    View Works
                  </motion.button>
                </Link>
                <Link href="mailto:nathan@lore.com">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="ml-2 btn-secondary">
                    Contact
                  </motion.button>
                </Link>
              </div>

            </div>
            <div className="col-span-1 h-[300px] md:h-[500px]">
              <Canvas linear camera={{ fov: 33 }}>
                <pointLight position={[10, 10, 10]} />
                <ambientLight intensity={2} />
                <directionalLight position={[10, 10, 30]} intensity={10} color={0xCD0BC1} />
                <directionalLight position={[0, 0, 15]} intensity={5} color={0x0EEBE2} />
                <Suspense fallback={null}>
                  <Scene />
                </Suspense>
                <OrbitControls autoRotate={true} target={[0, 4, 0]} />
              </Canvas>
            </div>
          </div>

          <div className="my-32 border-spacing-x-3 border-2 border-atari-blue h-[500px]">
            <div className="flex-auto h-96">
              <div className="flex flex-col items-center pt-12 font-cursive text-[40px]">
                // Social Proof
                <div className="flex flex-col text-left max-w-3xl flex-wrap pt-12 font-mono text-xl">
                  <ul className="list-none">
                    <li className="pb-4"> <span className="text-punk-yellow">Early bitcoin investor</span>. Referenced in the first major book on crypto, <span className="italic">The Age of Cryptocurrency</span>.</li>
                    <li className="pb-4"> <span className="text-punk-red">Sold 2 Silicon Valley startups</span>(Gamify, Binded).</li>
                    <li className="pb-4"> <span className="text-punk-blue">Raised money from top investors</span> including Taizo Son, Asahi Shimbun, and Scott & Cyan Banister.</li>
                    <li className="text-punk-purple">Coined the term gamify.</li>
                  </ul>
                </div>
                <div className="pt-12">
                  <span className="font-cursive text-zinc-500 text-xl">// TODO: Add More Stuff</span>
                </div>

              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3">
            <div className="col-span-1 pt-36">
              <img src="/nathan-pixel.png" onMouseOver={e => (e.currentTarget.src = "/nathan.jpg")} onMouseOut={e => (e.currentTarget.src = "/nathan-pixel.png")} width="250" height="250" alt="Nathan Lands" className="rounded-full hover:grayscale-0" />
            </div>
            <div className="col-span-2">
              <div className="pt-24 font-cursive font-bold text-[40px] antialiased">Hi, I'm Nathan</div>
              <div className="pt-2 font-mono text-2xl antialiased">I'm passionate about creating simple and fun products that make the world a better place.
              </div>
              <div className="pt-6 font-mono text-atari-blue text-xl antialiased"> I’ve survived a tornado in Alabama, acted in Taiwan, started startups in Silicon Valley and even sat on the director’s chair at a major Disney film set.
              </div>
              <div className="mt-6">
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn-secondary">
                    Read My Story
                  </motion.button>
                </Link>

              </div>
            </div>
          </div>

          <div className="py-48">

            <div className="flex flex-col items-center pt-12">
              <div className="font-cursive text-[32px] text-antiliased">
                A few of my <span className="text-punk-blue">projects</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3">
              <div className="col-span-1">
                <div className="pt-24 font-mono font-bold text-2xl antialiased">
                  <Image src="/nathan-pixel.png" width="200" height="200" alt="Nathan Lands" className="hover:grayscale-0" />
                  <div className="font-cursive">Binded</div>
                  <div className="font-mono text-atari-blue pr-4 text-[16px]">Copyright-protection on the blockchain. Helping artists protect their work.</div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="pt-24 font-mono font-bold text-2xl antialiased">
                  <Image src="/nathan-pixel.png" width="200" height="200" alt="Nathan Lands" className="hover:grayscale-0" />
                  <div className="font-cursive">Lore.com</div>
                  <div className="font-mono text-atari-blue pr-4 text-[16px]">A stealth-mode NFT platform. </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="pt-24 font-mono font-bold text-2xl antialiased">
                  <Image src="/nathan-pixel.png" width="200" height="200" alt="Nathan Lands" className="hover:grayscale-0" />
                  <div className="font-cursive">QuickCoin</div>
                  <div className="font-mono text-atari-blue pr-4 text-[16px]">The first social bitcoin wallet.</div>
                </div>
              </div>

            </div>

            <div className="flex flex-col items-center pt-4">
              <div className="text-2xl font-mono mt-14 text-antiliased max-w-3xl">
                I'm primarily focused on creating beautiful web apps with <span className="font-semibold text-punk-yellow">React & TypeScript</span>. I have experience in all aspects ranging from inception to successfully launching a startup, getting press and beyond.
              </div>
              <div className="text-xl font-mono mt-4 text-antiliased max-w-3xl text-atari-blue">
                I'm currently working on Lore.com, and taking on occasional contract work for interesting projects.
              </div>
              <div className="pt-12 justify-left mx-auto">
                <Link href="/works">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="ml-2 btn-secondary">
                    View Works
                  </motion.button>
                </Link>
              </div>
            </div>

          </div>
          < Contact />
        </main>
      </Layout>

    </div >
  )
}

export default Home
