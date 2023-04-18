import { IAuthor } from 'src/@types/contentful';
import { ContentfulImage } from '../ContentfulImage';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { Asset } from 'contentful';

interface PostBodyProps {
  title?: string;
  featureImage?: Asset;
  content?: Document;
}

export const PostBody = (data: PostBodyProps) => {
  return (
    <>
      <ContentfulImage
        width={400}
        height={200}
        alt={`Plug Image for ${data.title}`}
        src={data.featureImage?.fields.file.url}
        className='w-full h-60 object-cover'
      />

      <div className='md:w-50'>
        {documentToReactComponents(data.content as Document)}
      </div>
    </>
  );
};
