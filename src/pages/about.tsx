import Head from 'next/head';
import React from 'react';
import { NextPage } from 'next';
import Layout from "../components/Layouts/Content"
import { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";
import Link from 'next/link';
import Contact from '../components/Contact';

const About: NextPage = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

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
          <div className="mt-24 mb-8 grid md:grid-cols-3">
            <div className="col-span-2 mr-8">
              <div className="max-w-4xl text-[32px] antialiased font-cursive">My mission is to create a <span className="text-punk-blue">better future</span> for humanity.</div>
              <div className="pt-4 antialiased max-w-3xl font-mono text-xl text-atari-blue">
                I'm an entrepreneur with a passion for creating beautiful products that are simple and fun to use. Out of necessity I've learned to design and code to bring my ideas to life.
              </div>
            </div>
            <div className="col-span-1">
              <Link href="/about">
                <img src="/nathan-pixel.png" onMouseOver={e => (e.currentTarget.src = "/nathan.jpg")} onMouseOut={e => (e.currentTarget.src = "/nathan-pixel.png")} width="250" height="250" alt="Nathan Lands" className="rounded-full hover:grayscale-0" />
              </Link>
            </div>
          </div>

          <div className="my-32 border-spacing-x-3 border-2 border-atari-blue h-[500px]">
            <div className="flex-auto h-96">
              <div className="flex flex-col items-center pt-12 font-cursive text-[40px]">
                // Skills
                <div className="flex flex-col text-left max-w-3xl flex-wrap pt-12 font-mono text-xl">
                  <ul className="list-none">
                    <li className="pb-4"> <span className="text-punk-yellow">Coding:</span> TypeScript, Swift, Go, Rust(basic)</li>
                    <li className="pb-4"> <span className="text-punk-pink"> Frameworks:</span> React, Next.js, Astro, SolidJS, SwiftUI.</li>
                    <li className="pb-4"> <span className="text-punk-red">Tools:</span> Neovim, Figma, MagicaVoxel, Photoshop, Illustrator.</li>
                    <li className="pb-4"> <span className="text-punk-blue">Languages:</span> English, Mandarin(conversational) and Japanese(very basic).</li>
                    <li> <span className="text-punk-purple">Startups:</span> Fundraising, Product Management, Contract Negotation, PR  </li>
                  </ul>
                </div>
                <div>
                  <span className="font-cursive text-zinc-500 text-xl">// TODO: Increase quality</span>
                </div>

              </div>
            </div>
          </div>


          <div className="mt-24 text-[48px] antialiased font-cursive"> My life</div>
          <div className="mt-4 mb-12">
            <span className="font-cursive text-zinc-500"> Hopefully the first half...</span>
          </div>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              contentStyle={{ border: '#AC3049', background: '#AC3049' }}
              contentArrowStyle={{ borderRight: '7px solid #AC3049' }}
              date="1984"
              iconStyle={{ background: '#0C0F1E', color: '#fff' }}
              icon={<img src="/8bit/alabama.png" alt="Work" />}
            >
              <div className="text-2xl font-mono">
                Born in Arab, Alabama
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="1989"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/jupiter.png" alt="Work" />}
            >
              <div className="text-2xl font-mono"> Told everyone I was from Jupiter. </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="1994"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/tornado.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl font-mono"> Survived a tornado. Was trapped for hours under rubble.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="1995"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/computer.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl font-mono"> Got my first computer. Created a chat bot in QBasic.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="1999"
              contentStyle={{ background: '#0EEBE2', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/everquest.png" alt="Work" />}
              contentArrowStyle={{ borderRight: '7px solid #0EEBE2' }}
            >
              <div className="text-2xl font-mono"> Co-ran one of the top guilds on EverQuest. Made enough money to travel.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2004"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/taiwan.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl font-mono"> Moved to Taiwan. Studied Mandarin, taught English and acted in TV commercials. </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2007"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/florida.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl font-mono"> Created a real-estate business in Florida. Managed 140 condos + had a kiosk in a mall.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2008"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/gamestreamer.png" className="rounded-full" alt="Work" />}
            >
              <div className="text-2xl font-mono pb-6"> Founded GameStreamer, a "Steam Killer". Raised $10M and had 30+ employees.</div>
              <Link href="https://www.gamestreamer.com">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn">
                  Visit GameStreamer
                </motion.button>
              </Link>
              <Link href="/works">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn ml-2">
                  Learn More
                </motion.button>
              </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2010"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/gaikai.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl font-mono pb-6"> Advised several startups including Gaikai(acq. for $380M) and OverWolf. Mentored for 20under20.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2011"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/gamify.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl pb-6 font-mono"> Founded Gamify. Sold Gamification.org to Badgeville.</div>
              <Link href="https://www.gamify.com">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn">
                  Visit Gamify
                </motion.button>
              </Link>
              <Link href="/works">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn ml-2">
                  Learn More
                </motion.button>
              </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2012"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/ramen.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl font-mono"> Co-owned Ramen Underground. At one time was top 3 ramen in San Francisco.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2012"
              contentStyle={{ background: '#0EEBE2', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/bitcoin.png" alt="Work" />}
            >
              <div className="text-2xl font-mono"> Bought my first bitcoin with the help of Erik Voorhees. </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2013"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/noah.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl font-mono"> My son was born. Best day of my life.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2013"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/quickcoin.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl font-mono"> Co-created QuickCoin the first social bitcoin wallet. </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2014"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/blockai.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl font-mono"> QuickCoin became Blockai. We ran lots of fun experiments with crypto.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2016"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/binded.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl pb-6 font-mono"> Blockai became Binded, a platform to help artists protect their copyright. Sold to Pixsy.</div>
              <Link href="https://www.binded.com">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn">
                  Visit Gamify
                </motion.button>
              </Link>
              <Link href="/works">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn ml-2">
                  Learn More
                </motion.button>
              </Link>

            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2019"
              contentStyle={{ background: '#0EEBE2', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/mulan.png" alt="Work" />}
            >
              <div className="text-2xl font-mono pb-6"> Founded Lore, a "crypto-fueled" movie-studio, with Barrie Osborne(The Matrix, Lord of the Rings). Failed to raise our goal of $100M. </div>
              <Link href="https://web.archive.org/web/20191216040544/https://www.lore.com/">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn border-white">
                  Visit Archived Site
                </motion.button>
              </Link>
              <Link href="/works">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn ml-2">
                  Learn More
                </motion.button>
              </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2020"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/cabin.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl pb-6 font-mono"> Stayed in a cabin for most of the pandemic. Began seriously learning to code. Previously I had partnered with more technical founders.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-24"
              date="2022"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src="/8bit/kyoto.png" className="rounded-xl" alt="Work" />}
            >
              <div className="text-2xl pb-6 font-mono"> Moved to Kyoto, Japan. Currently focused on Lore.com and contracting to improve my coding skills.</div>
            </VerticalTimelineElement>
          </VerticalTimeline>

          <svg className="progress-icon" viewBox="0 0 60 60">
            <motion.path
              fill="none"
              strokeWidth="5"
              stroke="white"
              strokeDasharray="0 1"
              d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
              style={{
                pathLength,
                rotate: 90,
                translateX: 5,
                translateY: 5,
                scaleX: -1 // Reverse direction of line animation
              }}
            />
            <motion.path
              fill="none"
              strokeWidth="5"
              stroke="white"
              d="M14,26 L 22,33 L 35,16"
              initial={false}
              strokeDasharray="0 1"
              animate={{ pathLength: isComplete ? 1 : 0 }}
            />
          </svg>

          < Contact />
        </main>
      </Layout >
    </div >
  );
};

export default About;


