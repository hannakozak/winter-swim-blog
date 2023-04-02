import { IBlogPostFields } from 'src/@types/contentful';
import { ContentfulImage } from '../ContentfulImage';

export const Post = (data: IBlogPostFields) => {
  return (
    <article className='flex flex-col content-start bg-gray-50 shadow-md h-xl hover:scale-105 hover:transition-all  duration-500'>
      <div className='flex flex-row justify-between text-xs text-gray-600 p-6'>
        <p>{data.author?.fields.name}</p>
        <p>{data.publishDate}</p>
      </div>
      <ContentfulImage
        width={400}
        height={200}
        alt={`Plog Image for ${data.title}`}
        src={data.featureImage?.fields.file.url}
        className='w-full h-60 object-cover  px-6 md:p-0'
      />
      <div className='flex flex-col content-start flex-1'>
        <h3 className='text-xs uppercase p-6'>
          {data.category?.fields.categoryName}
        </h3>
        <h1 className='flex-1  text-lg font-semibold leading-snug  text-indigo-600 px-6'>
          {data.title}
        </h1>
        <p className='px-6 pb-12'>{data.excerpt}</p>
      </div>
    </article>
  );
};
