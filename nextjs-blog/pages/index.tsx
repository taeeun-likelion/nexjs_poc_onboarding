import {GetStaticProps} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
export const getStaticProps:GetStaticProps=async()=>{
  const allPostsData=getSortedPostsData()
  return{
    props:{
      allPostsData
    }
  }
}

interface IAllPostsData {
  id: string
  date: string
  title: string
}

interface IHome {
  allPostsData : IAllPostsData[]
}

export default function Home({ allPostsData }: IHome) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Taeeun Kim, and I am a junior web frontend developer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              <a>{title}</a>
              </Link>
              <div className={utilStyles.lightText}>
                {date}
              </div>
            </li>
          ))
          }
        </ul>
      </section>
    </Layout>
  )
}