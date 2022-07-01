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
          <div className="text-7xl my-24 font-cursive"> My life</div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              contentStyle={{ border: '#AC3049', background: '#AC3049' }}
              contentArrowStyle={{ borderRight: '7px solid #AC3049' }}
              date="1984"
              iconStyle={{ background: '#0C0F1E', color: '#fff' }}
              icon={<img src="/nathanlands.svg" className="pt-6" alt="Work" />}
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
            >
              <div className="text-2xl font-mono"> Told everyone I was from Jupiter. </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="1994"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <div className="text-2xl font-mono"> Survived a tornado. Was trapped for hours.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="1995"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <div className="text-2xl font-mono"> Got my first computer. Created a chat bot in QBasic.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="1999"
              contentStyle={{ background: '#0EEBE2', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #0EEBE2' }}
            >
              <div className="text-2xl font-mono"> Co-ran one of the top guilds on EverQuest. Made enough money to travel.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2004"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <div className="text-2xl font-mono"> Traveled to Taiwan. Studied Mandarin, taught English and acted in TV commercials. </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2007"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <div className="text-2xl font-mono"> Created a real-estate business in Tampa, FL. Managed 140 condos + had a kiosk in a mall.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2008"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
            >
              <div className="text-2xl font-mono pb-6"> Advised several startups including Gaikai(acq. for $380M). Mentored for 20under20.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2011"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
            >
              <div className="text-2xl font-mono"> Co-owned Ramen Underground. At one time was top 3 ramen in San Francisco.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2012"
              contentStyle={{ background: '#0EEBE2', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <div className="text-2xl font-mono"> Bought my first bitcoin with the help of Erik Voorhees. </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2013"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <div className="text-2xl font-mono"> My son Noah was born. Best day of my life.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2013"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <div className="text-2xl font-mono"> Co-created QuickCoin the first social bitcoin wallet. </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2014"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <div className="text-2xl font-mono"> QuickCoin became Blockai. We ran lots of fun experiments with crypto.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-12"
              date="2016"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
            >
              <div className="text-2xl pb-6 font-mono"> Stayed in a cabin for most of the pandemic. Began seriously learning to code. Previously I had partnered with more technical founders.</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work pb-24"
              date="2022"
              contentStyle={{ background: '#F3F0E1', color: '#0C0F1E' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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


