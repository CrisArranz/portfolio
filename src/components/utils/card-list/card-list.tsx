import React from 'react';
import { CardListProps } from './types/card-list';
import { Text } from '../text/text';

export const CardList: React.FC<CardListProps> = ({ title, list }) => {
  return (
    <article className='relative rounded-lg p-2 bg-gradient-to-br dark:to-emerald-600 dark:from-emerald-700 to-emerald-600 from-emerald-500 shadow-2xl overflow-hidden'>
      <div className='bg-white dark:bg-black dark:text-white text-black p-4 rounded-lg h-full'>
        <Text type='HEADING_3' message={title} styles={{ className: 'text-center capitalize mb-8 text-3xl font-bold lg:text-4xl lg:break-words bg-gradient-to-t from-emerald-400 to-emerald-600 dark:from-emerald-200 dark:to-emerald-400 bg-clip-text text-transparent' }}/>
        <section className='grid grid-cols-3 grid-rows-3 gap-4'>
          {list.map(({ item, name }) => 
            <div className=' rounded-2xl group flex flex-col justify-center items-center'>
              {item}
              <Text type='PARAGRAPH' message={name} />
            </div>
          )}
        </section>
      </div>
    </article>
  );
}