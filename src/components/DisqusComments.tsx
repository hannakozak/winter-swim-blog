import { DiscussionEmbed } from 'disqus-react';
import { IBlogPostFields } from 'src/@types/contentful';

interface DisqusCommentsProps {
  blogPost: IBlogPostFields;
}

const DisqusComments = ({ blogPost }: DisqusCommentsProps) => {
  const disqusShortname = 'stahlwalkercookbook';
  const disqusConfig = {
    url: `https://winter-swimming-blog.vercel.app/blog/${blogPost.slug}`,
    identifier: blogPost.slug, // Single post slug
    title: blogPost.title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
