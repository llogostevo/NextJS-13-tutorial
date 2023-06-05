import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from "next/link" 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
        <h1>Hello World</h1>
        <Link href="/about">Link to About Page</Link>
        <p>This is cool, it auto updates the TSX then also</p>
        <p>quite a large seperation between elements here though?</p>
        <p>styles are being kept divded up equally</p>
        <p>flexbox is being used in the default styling with space between</p>


    </main>
  )
}
