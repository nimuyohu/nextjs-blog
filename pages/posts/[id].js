import Layout from '../../components/layout'
import { getAllPostIds, getPostData  } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet"></link>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@nimuyohu" />
                <meta property="og:url" content={`https://nextjs-blog-nu-liard.vercel.app/posts/${postData.id}`} />
                <meta property="og:title" content={postData.title} />
                <meta property="og:image" content={`https://og-image-ongn02eli-nimuyohu.vercel.app/${postData.title}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1344214879335399424%2F_UAhhAHx_400x400.jpg`} />
            </Head>
            <Link href='/'>{'<<Top'}</Link>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
        )
}

export async function getStaticPaths() {
const paths = getAllPostIds()
return {
    paths,
    fallback: false
}
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
    props: {
        postData
    }
    }
}