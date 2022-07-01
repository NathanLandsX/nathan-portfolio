import Head from 'next/head'
import { NextPage } from 'next'
import Layout from "../components/Layouts/Content"
import Contact from '../components/Contact'

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
          <div className="text-9xl font-cursive"> Works</div>
          <Contact />
        </main>
      </Layout>

    </div>
  )
}

export default Works
