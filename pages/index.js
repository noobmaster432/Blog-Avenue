import Head from 'next/head';
import PostCard from '../components/PostCard';
import PostWidget from '../components/PostWidget';
import Categories from '../components/Categories';
import FeaturedPosts from '../sections/FeaturedPosts';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Blog Avenue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => <PostCard post={post.node} key={post.title} /> )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
            <img src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png" alt="side photo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  };
}