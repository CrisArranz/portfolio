import React from 'react';
import { ImageProps } from './types/Image';

export const Image: React.FC<ImageProps> = ({ src, styles, alt }) => {
  return <img src={src} alt={alt} className={styles?.className}/>
}