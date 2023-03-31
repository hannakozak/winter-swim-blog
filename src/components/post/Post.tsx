import { IBlogPostFields } from 'src/@types/contentful';
import { ContentfulImage } from '../ContentfulImage';

export const Post = (data: IBlogPostFields) => {
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.publishDate}</p>
      <p>{data.author?.fields.name}</p>
      <ContentfulImage
        width={200}
        height={200}
        alt={`Plog Image for ${data.title}`}
        src={data.featureImage?.fields.file.url}
      />
      <p>{data.excerpt}</p>
    </>
  );
};
