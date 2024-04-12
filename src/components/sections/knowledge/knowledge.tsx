import React from 'react';
import { Card } from "../../utils";
import { knowledgeProps } from './types/knowledge';

export const Knowledge: React.FC<knowledgeProps> = ({ id }) => {

  const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <section id={id} className='flex flex-wrap gap-8 justify-center px-6 pt-24'>
      <Card message={message} list={[]}/>
      <Card message={message} list={[]}/>
      <Card message={message} list={[]}/>
    </section>
  );
}