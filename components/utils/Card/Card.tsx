import Image from "next/image";

interface Props {
  values: {
    image: string,
    title: string,
    description: string,
    titleTools: string,
    tools: string[]
  }
}

export default function Card({ values }: Props) {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 min-w-[150px] dark:text-white dark:shadow-white">
      <Image className="mx-auto" src={values.image} width={100} height={100} alt={values.title} />
      <h3 className="flex items-center justify-center text-2xl font-medium min-h-[150px]">{values.title}</h3>
      <p className="py-2">
        {values.description}
      </p>
      <h4 className="py-4 text-teal-600 font-semibold">{values.titleTools}</h4>
      {
        values.tools.map(tool => <p key={tool} className="text-gray-800 py-1 font-bold dark:text-white">{tool}</p>)
      }
    </div>
  )
}