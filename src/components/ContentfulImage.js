import Image from 'next/image';

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const ContentfulImage = (props) => {
  return <Image alt={props.alt} loader={contentfulLoader} {...props} />;
};

export default ContentfulImage;
