import React from 'react';
import { CardProps } from './types/card';

export const Card: React.FC<CardProps> = ({message}) => {
  return (
    <article className='relative rounded-lg p-2 min-w-48 min-h-48 max-w-96 bg-gradient-to-br to-lime-400 from-teal-300'>
      <div className='bg-white dark:bg-black dark:text-white text-dark p-4 rounded-lg'>{message}</div>
    </article>
  );
}