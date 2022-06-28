import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-24">
      <div className="flex justify-center">
        <div className="text-center">
          <div className="flex flex-row">
            <div className="flex-1 pr-4">
              <Link href="/about">
                <a>
                  <span className="font-cursive text-zinc-400 hover:text-zinc-100">.about()</span>
                </a>
              </Link>
            </div>
            <div className="flex-1 px-4">
              <Link href="/works">
                <a>
                  <span className="font-cursive text-zinc-400 hover:text-zinc-100">.works()</span>
                </a>
              </Link>
            </div>
            <div className="flex-1 pl-4">
              <Link href="mailto:nathan@lore.com">
                <a>
                  <span className="font-cursive text-zinc-400 hover:text-zinc-100">.contact()</span>
                </a>
              </Link>
            </div>
          </div>

          <div className="flex-1 pt-12">
            <div className="font-cursive text-zinc-400 hover:text-zinc-100 text-[8px]">
              © Copyright 2022. All Rights Reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
