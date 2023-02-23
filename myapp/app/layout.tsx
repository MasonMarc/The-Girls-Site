import Link from "next/link"
import './globals.css';
import 'bootswatch/dist/lux/bootstrap.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <nav className="navbar navbar-expand-lg bg-danger text-uppercase">
          <div className="container">
            <Link className="navbar-brand" href="/"><img src="/assets/TheGirlsTransparent.png" width="180px" height="50px"></img></Link>
            <div>
            <Link href="/about" className="p-3">
              About
            </Link>
            <Link href="/music" className="p-3">
              Music
            </Link>
            <Link href="/media" className="p-3">
              Media
            </Link>
            <Link href="/contact" className="p-3">
              Contact
            </Link>
            </div>
            <div>
              <div>
                <a href="https://www.instagram.com/the__girls77/" target="_blank">Insta</a>
                <a href="https://open.spotify.com/artist/4O5HTw3xKD1c8iSrjplBGU?si=gWQIts7dQxW4mAg7PD8N0A" target="_blank">Spot</a>
                <a href="https://www.youtube.com/@thegirls7723" target="_blank">YouT</a>
              </div>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html >
  )
}
