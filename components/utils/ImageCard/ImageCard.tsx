import Image from "next/image";

interface Props {
  values: {
    url: {
      image: string,
      project: string
    }
    title: string,
    description: string
  }
}

export default function ImageCard({ values }: Props) {
  return (
    <a className="basis-1/3 flex-1" href={values.url.project}>
      <div>
        <Image className="rounded-lg object-cover" src={values.url.image} layout="responsive" width={1000} height={1000} alt={values.title} />
        <h4 className="text-xl py-2 text-teal-600 font-medium">{values.title}</h4>
        <p>{values.description}</p>
      </div>
    </a>
  )
}