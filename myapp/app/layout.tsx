import Link from "next/link"
import './globals.css';
import 'bootswatch/dist/flatly/bootstrap.css';

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
            <Link className="navbar-brand" href="/">The Girls</Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/music">
              Music
            </Link>
            <Link href="/media">
              Media
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html >
  )
}
