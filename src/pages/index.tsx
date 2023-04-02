import ContentService from '@lib/content-service';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { IBlogPostFields } from 'src/@types/contentful';
import { Post } from 'src/components/post/Post';

interface Props {
  blogPosts: IBlogPostFields[];
}

const Home: NextPage<Props> = ({ blogPosts }) => {
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

      <main className='container mx-auto sm:p-12'>
        <h1 className='text-emerald-400'>Winter Swimming Blog</h1>
        <section className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {blogPosts.map((blog) => (
            <a key={blog.slug} href={`/${blog.slug}`}>
              <Post
                title={blog.title}
                publishDate={blog.publishDate}
                featureImage={blog.featureImage}
                author={blog.author}
                category={blog.category}
                excerpt={blog.excerpt}
                content={blog.content}
              />
            </a>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogPosts = (
    await ContentService.instance.getEntriesByType<IBlogPostFields>('blogPost')
  ).map((entry) => entry.fields);

  return {
    props: {
      blogPosts,
    },
  };
};
