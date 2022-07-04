import Head from 'next/head'
import { NextPage } from 'next'
import Layout from "../../components/Layouts/Content"
import Contact from '../../components/Contact'

const Quickcoin: NextPage = () => {
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
          <div className="antialiased font-mono"> <a href="/works"><span className="hover:underline">Works</span></a> > <span className="font-bold">Quickcoin</span></div>
          <div className="flex flex-col pt-12">
            <div className="text-antiliased">
              <span className="font-cursive text-[32px] text-punk-blue">Quickcoin</span>
              <ul className="pt-8">
                <li className="mt-2">Website: https://Quickcoin.com</li>
                <li className="mt-2">Stack: Node.js React </li>
                <li className="mt-2">Years: 2013</li>
              </ul>
            </div>
          </div>
          <div className="py-12 max-w-3xl text-antiliased">
            <span className="font-cursive text-[32px]">Summary</span>
            <div className="">
              kills the browser and the server. It's a way to make a website that doesn't require a server.
              Displays the content of the page in the browser.
              You can use it to make a website that doesn't require a server.
              displays the content of the page in the browser.
            </div>
          </div>

          <img src="/nathan.jpg" alt="Nathan Lands" className="md:w-1/2 grayscale hover:grayscale-0" />
          <img src="/nathan.jpg" alt="Nathan Lands" className="md:w-1/2 grayscale hover:grayscale-0" />
          <img src="/nathan.jpg" alt="Nathan Lands" className="md:w-1/2 grayscale hover:grayscale-0" />

          <Contact />
        </main>
      </Layout>

    </div>
  )
}

export default Quickcoin
