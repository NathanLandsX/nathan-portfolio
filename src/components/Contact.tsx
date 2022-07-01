import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="h-96 rounded-3xl absolute -z-10 origin-left before left-0 w-full bg-gradient-to-b from-punk-pink by-atari-red to-punk-red"></div>
      <div className="flex-auto h-96">
        <div className="flex flex-col items-center pt-12 font-cursive text-[40px]">
          ##Contact
          <div className="flex flex-col text-center max-w-5xl flex-wrap pt-12 font-mono text-2xl">
            Want to discuss collaborating on a project? Email me at <span className="font-bold pt-4 tracking-widest text-5xl text-white hover:underline"><a href="mailto:nathan@lore.com">nathan@lore.com</a></span>
          </div>
          <div className="pt-12">
            <a href="https://www.twitter.com/nathanlands"><span className="text-[16px] hover:underline">Twitter</span></a>
          </div>
        </div>
      </div>
    </>
  )
}
