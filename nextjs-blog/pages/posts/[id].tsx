import {GetStaticPaths, GetStaticProps} from 'next'
import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'
interface IPostData{
  postData:{
    title:string
    date:string
    contentHtml:string
  }

}
export const getStaticProps: GetStaticProps=async({ params })=> {

  const postData = await getPostData(params.id as string)  
  console.log(postData)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths: GetStaticPaths=async()=> {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export default function Post({ postData }:IPostData) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
        </article>
        {/* innerHtml */}
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </Layout>
    )
  }