import Head from 'next/head'
import { NextPage } from 'next'
import Layout from "../components/Layouts/Content"
import Link from 'next/link'
import { motion } from 'framer-motion'

const Works: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Super Secret Page</title>
        <meta
          name="description"
          content="Super Secret Page"
        />
      </Head>

      <Layout>
        <main>
          <div className="text-7xl pt-40 pb-12 text-atari-blue">You have found a secret dimension. Whatever you do, don't press the red button.</div>
          <div className="col-span-1 space-x-4">
            <Link href="/reboot">
              <a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn bg-atari-red !border-red-900 font-cursive">Red Pill</motion.button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn bg-atari-blue !border-blue-900 font-cursive">Blue Pill</motion.button>
              </a>
            </Link>

          </div>
        </main>
      </Layout>

    </div>
  )
}

export default Works
