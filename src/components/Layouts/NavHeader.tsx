import React, { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

const NavHeader = ({ children }: Props) => (
  <div className="sticky top-0 z-50 bg-[#0C0F1E] bg-opacity-95">
    <header>
      <nav>
        <div className="flex jstify-center bg-atari-dark-red">
          WARNING: Under Construction!
        </div>

        <div className="flex pt-14 pb-14">
          <div className="flex-1 hover:brightness-125">
            <Link href="/">
              <div className="font-cursive text-[16px] antialiased">
                NATHAN_LANDS
              </div>
            </Link>
          </div>

          <div className="block md:hidden">Hamburger</div>

          <div className="hidden md:block font-cursive">
            <ul className="flex mr-4">
              <li className="mr-8 text-zinc-400 hover:text-zinc-100">
                <Link href="about">about()</Link>
              </li>
              <li className="mr-8 text-zinc-400 hover:text-zinc-100">
                <Link href="works">works()</Link>
              </li>
              <li className="text-zinc-400 hover:text-zinc-100">
                <a href="mailto:nathan@lore.com">contact()</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    {children}
  </div>
)

export default NavHeader
