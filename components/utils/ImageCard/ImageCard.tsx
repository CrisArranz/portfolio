import Image from "next/image";
import { Icons } from "../../"

interface Props {
  values: {
    url: {
      image: string,
      project: string
    }
    title: string,
    description: string,
    technologies: Array<string>
  }
}

export default function ImageCard({ values }: Props) {
  return (
    <div className="basis-1/3 flex-1 ">
      <a className="relative text-black md:hover:text-teal-600" href={values.url.project}>
          <Image className="rounded-lg object-cover" src={values.url.image} layout="responsive" width={1000} height={1000} alt={values.title} />
          <div className="absolute flex bottom-1 right-1">
            <Icons technologies={ values.technologies } />
          </div>
      </a>
      <h4 className="text-xl py-2 text-teal-600 font-medium">{values.title}</h4>
      <p>{values.description}</p>
    </div>
  )
}