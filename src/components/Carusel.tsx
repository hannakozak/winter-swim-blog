import { RefObject, createRef, useState } from 'react';
import ContentfulImage from './ContentfulImage';
import { StaticImageData } from 'next/image';
import { ArrowLeft, ArrowRight } from 'src/assets/icons';
import { sliderPhotos } from 'src/assets/images/sliderPhotos';

interface ImageRef {
  [key: number]: RefObject<HTMLImageElement>;
}

export const Carusel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const refs = sliderPhotos.reduce(
    (acc: ImageRef, val: StaticImageData, i: number) => {
      acc[i] = createRef<HTMLImageElement>();
      return acc;
    },
    {} as ImageRef
  );
  const scrollToImage = (i: number) => {
    setCurrentImage(i);

    refs[i].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const totalImages = sliderPhotos.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  return (
    <div className='flex lg:max-w-7xl p-6 sm:p-0 md:my-5'>
      <div className=' w-full'>
        <div className='drop-shadow-md  flex overflow-x-hidden snap-mandatory snap-x max-h-96 md:max-h-[25rem]  md:overflow-y-hidden'>
          {sliderPhotos.map((image, index: number) => (
            <div
              className='w-full items-center flex-shrink-0'
              key={index}
              ref={refs[index]}
            >
              <ContentfulImage
                src={image}
                className='md:-mt-40'
                alt='slider-photo'
              />
            </div>
          ))}
        </div>
        <div className='flex gap-3 justify-center my-5'>
          <ArrowLeft
            onClick={previousImage}
            className='text-2xl text-blue-900 cursor-pointer'
          />
          <ArrowRight
            onClick={nextImage}
            className='text-2xl text-blue-900 cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};
