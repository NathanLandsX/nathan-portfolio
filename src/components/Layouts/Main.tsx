import React, { ReactNode } from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  // <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Nathan Lands" />
  //       <meta name="author" content="craftzdog" />
  //       <link rel="apple-touch-icon" href="apple-touch-icon.png" />
  //       <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  //       <meta name="twitter:title" content="Takuya Matsuyama" />
  //       <meta name="twitter:card" content="summary_large_image" />
  //       <meta name="twitter:site" content="@craftzdog" />
  //       <meta name="twitter:creator" content="@craftzdog" />
  //       <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
  //       <meta property="og:site_name" content="Takuya Matsuyama" />
  //       <meta name="og:title" content="Takuya Matsuyama" />
  //       <meta property="og:type" content="website" />
  //       <meta property="og:image" content="https://www.craftz.dog/card.png" />
    </Head>

    <NavBar />
    {children}

    <Footer />
  </div>
)

export default Layout
