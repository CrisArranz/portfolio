import { Card, Text } from "../../utils";
import { WorkProps } from "./types/work"

export const Work: React.FC<WorkProps> = ({ id }) => {

  const Card1 = { title: "Proyecto 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", type: "Frontend", tags: ["Javascript", "CSS", "Git", "HTML"]}

  return (
    <section id={id} className="pt-24 container mx-auto px-2 lg:w-[900px]">
      <Text message='Proyectos' type='HEADING_2' styles={{ className: 'text-3xl font-bold text-black dark:text-white mb-12' }} />
      <section className='grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 md:gap-6'>
        <Card {...Card1}/>
        <Card {...Card1}/>
        <Card {...Card1}/>
        <Card {...Card1}/>
      </section>
    </section>
  );
}