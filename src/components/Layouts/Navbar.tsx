import React, { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

const NavBar = ({ children }: Props) => (
  <div>
    <header>
      <nav>
        <div className="flex pt-14 pb-14">
          <div className="flex-1 hover:brightness-125">
            <Link href="/">
              <a>
                <img
                  src="/nathanlands.svg"
                  width={160}
                  height={20}
                  alt="Nathan Lands"
                />
              </a>
            </Link>
          </div>

          <div className="block md:hidden">Hamburger</div>

          <div className="hidden md:block">
            <ul className="flex mr-4">
              <li className="mr-8 text-zinc-400 hover:text-zinc-100">
                <Link href="about">about</Link>
              </li>
              <li className="mr-8 text-zinc-400 hover:text-zinc-100">
                <Link href="works">works</Link>
              </li>
              <li className="mr-8 text-zinc-400 hover:text-zinc-100">
                <a href="mailto:nathan@lore.com">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    {children}
  </div>
)

export default NavBar
