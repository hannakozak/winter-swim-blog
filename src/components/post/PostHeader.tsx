import { IAuthor } from 'src/@types/contentful';
import { ContentfulImage } from '../ContentfulImage';

interface PostHeaderProps {
  title?: string;
  author?: IAuthor;
  publishDate?: string;
}

export const PostHeader = (data: PostHeaderProps) => {
  return (
    <>
      <h1 className='mt-10 text-blue-900'>{data.title}</h1>
      <div className='flex gap-3 items-center leading-0'>
        <ContentfulImage
          width={50}
          height={50}
          alt='user-avatar'
          className='h-12 w-12 rounded-full ring-2 ring-white'
          src={data.author?.fields.image?.fields.file.url}
        />
        <div>
          <div>{data.author?.fields.name}</div>
          <time dateTime={data.publishDate}>
            Published on {data.publishDate}
          </time>
        </div>
      </div>
    </>
  );
};
