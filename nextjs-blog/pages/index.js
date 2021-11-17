import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <h1 className="title">Read{' '} {/*used to divided text over lines*/}
    <Link href="/posts/first-post">
      <a>this page!</a>
    </Link>
    </h1>
  )
}
