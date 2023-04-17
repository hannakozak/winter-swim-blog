import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { IBlogPostFields } from '../../@types/contentful';
import ContentService from '../../utils/content-service';

interface BlogPostProps {
  blogPost: IBlogPostFields;
}

const BlogPost: NextPage<BlogPostProps> = ({
  blogPost: {
    title,
    publishDate,
    featureImage,
    author,
    category,
    excerpt,
    content,
  },
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name='description' content={excerpt} />
    </Head>

    <main>
      <h1>{title}</h1>
      <p></p>
      <time dateTime={publishDate}>Published on {publishDate}</time>

      <div>{documentToReactComponents(content!)}</div>
    </main>
  </div>
);

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
