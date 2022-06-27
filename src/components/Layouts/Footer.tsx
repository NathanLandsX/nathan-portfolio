import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="grid md:grid-cols-3 pt-14">
        <div className="col-span-1">
          Test
        </div>
        <div className="col-span-1">
          <Link href="/reboot">
            <a>
              <button className="btn bg-red-900 !border-red-900 font-cursive">Danger</button>
            </a>
          </Link>
        </div>
        <div className="col-span-1">
          Test
        </div>
      </div>
    </footer>
  )
}

export default Footer
