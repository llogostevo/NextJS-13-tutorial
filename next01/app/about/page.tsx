import Link from "next/link"

export default function About() {
  // can be used to test the error handling within this page
  // throw new Error ("Not Today!!")
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  )
}
