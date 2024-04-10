import React from 'react';
import { ImageProps } from './types/Image';

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className='drop-shadow-sm w-[75vw] h-[75vw] md:w-[50vw] md:h-[50vw] lg:w-[20rem] lg:h-[15rem] lg:aspect-[1/4] xl:w-[25rem] xl:h-[25rem] xl:aspect-[9/3] rounded-full object-cover object-top shadow-lg dark:shadow-dark-900' />
}