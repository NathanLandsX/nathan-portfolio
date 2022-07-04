import Head from 'next/head'
import { NextPage } from 'next'
import Layout from "../components/Layouts/Content"
import Contact from '../components/Contact'
import Link from 'next/link'

const Works: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nathan Lands' Works</title>
        <meta
          name="description"
          content="Nathan Lands' works."
        />
      </Head>

      <Layout>
        <main>
          <div className="mt-24 mb-8 max-w-4xl text-[48px] antialiased font-cursive">I'm a <span className="text-atari-dark-red">full-stack entrepreneur</span>.</div>
          <div className="pt-2 font-mono max-w-3xl text-2xl antialiased">I can basically do everything needed to come up with a product, raise money, design, code, promote and manage it. </div>
          <div className="antialiased max-w-3xl font-mono pt-6 text-xl text-atari-blue">
            In the past I was the "non-technical founder". Over the years I've developed design and coding skills to be more self-reliant. At first it was out of necessity but now I absolutely love coding.
          </div>
          <div className="flex flex-col items-center pt-24">
            <div className="font-cursive text-[32px] text-antiliased">
              <span className="text-punk-blue">Startups</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3">
            <div className="col-span-1">
              <Link href="/works/binded">
                <div className="pt-24 font-mono font-bold text-2xl antialiased">
                  <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                  <div className="pt-4 font-cursive">Binded</div>
                  <div className="font-mono text-atari-blue pr-4 text-[16px]">Copyright-protection on the blockchain. Helping artists protect their work.</div>
                </div>
              </Link>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">Lore.com</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">A stealth-mode NFT platform. </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">QuickCoin</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">The first social bitcoin wallet.</div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">Gamify</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">The first social bitcoin wallet.</div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">Blockai</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">The first social bitcoin wallet.</div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">GameStreamer</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">The first social bitcoin wallet.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-12">
            <div className="font-cursive text-[32px] text-antiliased">
              <span className="text-punk-blue">Coding projects</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3">
            <div className="col-span-1">
              <Link href="/works/binded">
                <div className="pt-24 font-mono font-bold text-2xl antialiased">
                  <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                  <div className="pt-4 font-cursive">Movie collaboration platform </div>
                  <div className="font-mono text-atari-blue pr-4 text-[16px]">Copyright-protection on the blockchain. Helping artists protect their work.</div>
                </div>
              </Link>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">NFT portfolio</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">Written in Swift UI</div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">SpaceCraft</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">My hobby game project. Currently written in Rust / WASM. If I ever turn it into a real game I'll probably re-write it in C++ or Jonathan Blow's Jai.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-12">
            <div className="font-cursive text-[32px] text-antiliased">
              <span className="text-punk-blue">Companies </span>
            </div>
          </div>
          <div className="grid md:grid-cols-3">
            <div className="col-span-1">
              <Link href="/works/binded">
                <div className="pt-24 font-mono font-bold text-2xl antialiased">
                  <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                  <div className="pt-4 font-cursive">Tour de Home </div>
                  <div className="font-mono text-atari-blue pr-4 text-[16px]">Copyright-protection on the blockchain. Helping artists protect their work.</div>
                </div>
              </Link>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">Ramen Underground</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">Written in Swift UI</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-12">
            <div className="font-cursive text-[32px] text-antiliased">
              <span className="text-punk-blue">Misc.</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3">
            <div className="col-span-1">
              <Link href="/works/binded">
                <div className="pt-24 font-mono font-bold text-2xl antialiased">
                  <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                  <div className="pt-4 font-cursive">Gaikai</div>
                  <div className="font-mono text-atari-blue pr-4 text-[16px]">Copyright-protection on the blockchain. Helping artists protect their work.</div>
                </div>
              </Link>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">OverWolf</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">A stealth-mode NFT platform. </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">20under20</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">The first social bitcoin wallet.</div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="pt-24 font-mono font-bold text-2xl antialiased">
                <img src="/8bit/landing/lore.png" onMouseOver={e => (e.currentTarget.src = "/8bit/landing/lore-normal.png")} onMouseOut={e => (e.currentTarget.src = "/8bit/landing/lore.png")} width="250" height="250" alt="Nathan Lands" />
                <div className="pt-4 font-cursive">Charity</div>
                <div className="font-mono text-atari-blue pr-4 text-[16px]">The first social bitcoin wallet.</div>
              </div>
            </div>

          </div>

          <Contact />
        </main>
      </Layout>

    </div>
  )
}

export default Works
