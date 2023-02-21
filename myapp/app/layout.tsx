import Link from "next/link"
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
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
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
