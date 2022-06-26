import Head from 'next/head';
import React from 'react';
import { NextPage } from 'next';
import Layout from "../components/Layouts/Content"

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Nathan Lands</title>
        <meta
          name="description"
          content="All about my life."
        />
      </Head>
      <Layout>
        <main>
          <div className="text-9xl"> about page </div>
        </main>
      </Layout>
    </div>
  );
};

export default About;


