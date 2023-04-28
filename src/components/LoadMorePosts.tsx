import { useState, useEffect } from 'react';
import { PostPreview } from './postPreview/PostPreview';
import { IBlogPostFields } from 'src/@types/contentful';

interface LoadMorePostsProps {
  blogPosts: IBlogPostFields[];
}

export const LoadMorePosts = ({ blogPosts }: LoadMorePostsProps) => {
  const [displayedPostsNumber, setDisplayedPostsNumber] = useState(6);
  const [showMore, setShowMore] = useState<null | Boolean>(null);

  function handleClick() {
    setDisplayedPostsNumber(
      (prevDisplayedPostsNumer) => prevDisplayedPostsNumer + 3
    );
    if (blogPosts.length <= displayedPostsNumber + 1) {
      setShowMore(false);
    }
  }

  useEffect(() => {
    if (blogPosts.length > displayedPostsNumber) {
      setShowMore(true);
    }
  }, []);

  return (
    <>
      <section className='justify-center grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {blogPosts.slice(0, displayedPostsNumber).map((blog) => (
          <a key={blog.slug} href={`/blog/${blog.slug}`}>
            <PostPreview
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
      <div className='text-center my-5'>
        {showMore && (
          <button
            className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150'
            onClick={handleClick}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};
