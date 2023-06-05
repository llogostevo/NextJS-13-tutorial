import './globals.css'
import Link from "next/link" 
import styles from './layout.module.css'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className={styles.menu}>
          <Link href="/">HOME PAGE</Link>
          <Link href="/about">ABOUT</Link>
        </nav>
        {children}
        <footer>
          <h1>My Footer</h1>
        </footer>
      </body>
    </html>

  )
}
