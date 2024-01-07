import Head from 'next/head';
import { getAllPosts } from '../lib/notionAPI';

export default function Home(props) {
  console.log(props.allPosts);
  return (
    <>
      <Head>
        <title>個人開発エンジニアのためのブログ</title>
        <meta name='description' content='個人開発で収益を生み出すまでの必要な技術を身につけるためのブログです。' />
      </Head>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts: allPosts,
    },
    revalidate: 60,
  };
};