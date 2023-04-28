import ContentService from '@lib/content-service';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { IBlogPostFields } from 'src/@types/contentful';
import { Carusel } from 'src/components/Carusel';
import LoadMorePosts from 'src/components/LoadMorePosts';
import { PostPreview } from 'src/components/postPreview/PostPreview';

interface HomeProps {
  blogPosts: IBlogPostFields[];
}

const Home: NextPage<HomeProps> = ({ blogPosts }) => {
  return (
    <>
      <Head>
        <title>Winter Swimming Blog</title>
        <meta
          name='description'
          content='This is a blog with many intersting articles about winter swimming.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto lg:max-w-7xl sm:p-12'>
        <Carusel />
        {blogPosts.length > 0 && (
          <LoadMorePosts blogPosts={blogPosts} showMore={false} />
        )}
        <script
          id='dsq-count-scr'
          src='//winterswimming.disqus.com/count.js'
          async
        ></script>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const blogPosts = (
    await ContentService.instance.getEntriesByType<IBlogPostFields>('blogPost')
  ).map((entry) => entry.fields);

  return {
    props: {
      blogPosts,
    },
  };
};
