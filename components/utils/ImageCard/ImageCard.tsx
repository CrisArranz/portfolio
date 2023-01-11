import Image from "next/image";
import * as SiIcon from "react-icons/si";
import * as IoIcon from "react-icons/io";

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
            {values.technologies.map(tech => {
              switch(tech) {
                case "javascript":
                  return <IoIcon.IoLogoJavascript className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
                  break;
                case "html5":
                  return <IoIcon.IoLogoHtml5 className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
                  break;
                case "css3":
                  return <IoIcon.IoLogoCss3 className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
                  break;
                case "bootstrap":
                  return <SiIcon.SiBootstrap className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
                  break;
                case "react":
                  return <SiIcon.SiReact className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
                  break;
                case "mongodb":
                  return <SiIcon.SiMongodb className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
                  break;
                case "nodejs":
                  return <IoIcon.IoLogoNodejs className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
                  break;
                case "docker":
                  return <SiIcon.SiDocker className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
                  break;
              }
            })}
          </div>
      </a>
      <h4 className="text-xl py-2 text-teal-600 font-medium">{values.title}</h4>
      <p>{values.description}</p>
    </div>
  )
}