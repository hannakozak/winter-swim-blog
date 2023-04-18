import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { IBlogPostFields } from '../../@types/contentful';
import ContentService from '../../utils/content-service';
import ContentfulImage from 'src/components/ContentfulImage';
import { PostHeader } from 'src/components/post/PostHeader';
import { PostBody } from 'src/components/post/PostBody';

interface BlogPostProps {
  blogPost: IBlogPostFields;
}

const BlogPost: NextPage<BlogPostProps> = ({
  blogPost: { title, publishDate, featureImage, author, excerpt, content },
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={excerpt} />
      </Head>

      <article className='prose flex flex-col content-center mx-auto md:max-w-3xl p-5'>
        <PostHeader title={title} author={author} publishDate={publishDate} />
        <PostBody title={title} featureImage={featureImage} content={content} />
      </article>
    </div>
  );
};

export default BlogPost;

export const getStaticProps: GetStaticProps<
  BlogPostProps,
  { slug: string }
> = async (ctx) => {
  const { slug } = ctx.params!;
  const blogPost = await ContentService.instance.getBlogPostBySlug(slug);

  if (!blogPost) {
    return { notFound: true };
  }

  return {
    props: {
      blogPost: blogPost.fields,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts =
    await ContentService.instance.getEntriesByType<IBlogPostFields>('blogPost');

  return {
    paths: blogPosts.map((blog) => ({
      params: {
        slug: blog.fields.slug,
      },
    })),
    fallback: false,
  };
};
