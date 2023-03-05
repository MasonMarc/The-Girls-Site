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
      <head>
      <script src="https://kit.fontawesome.com/2c55689878.js"></script>
      <title>The Girls</title>
      </head>
      <body>
        <nav className="navbar navbar-expand-lg text-uppercase d-flex justify-content-center">
          <div className="container ">
            <div className="container">
            <Link className="navbar-brand" href="/"><img src="/assets/TheGirlsTransparent1.png" width="180px" height="50px"></img></Link>
            </div>
            <div className="container">
            <Link href="/about" className="p-3">
              About
            </Link>
            <Link href="/music" className="p-3">
              Music
            </Link>
            <Link href="/media" className="p-3">
              Media
            </Link>
            </div>
              <div className="container">
                <a href="https://www.instagram.com/the__girls77/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://open.spotify.com/artist/4O5HTw3xKD1c8iSrjplBGU?si=gWQIts7dQxW4mAg7PD8N0A" target="_blank"><i className="fa-brands fa-spotify"></i></a>
                <a href="https://www.youtube.com/@thegirls7723" target="_blank"><i className="fa-brands fa-youtube"></i></a>
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
