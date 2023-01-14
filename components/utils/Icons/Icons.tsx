import * as SiIcon from "react-icons/si";
import * as IoIcon from "react-icons/io";

interface Props {
  technologies: Array<string>
}

export default function Icons({ technologies }: Props) {
  return <>
    {
      technologies.map(tech => {
        switch(tech) {
          case "javascript":
            return <IoIcon.IoLogoJavascript className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
          case "html5":
            return <IoIcon.IoLogoHtml5 className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
          case "css3":
            return <IoIcon.IoLogoCss3 className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
          case "bootstrap":
            return <SiIcon.SiBootstrap className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
          case "react":
            return <SiIcon.SiReact className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
          case "mongodb":
            return <SiIcon.SiMongodb className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
          case "nodejs":
            return <IoIcon.IoLogoNodejs className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
          case "docker":
            return <SiIcon.SiDocker className="w-3 md:mx-1 md:w-8 md:h-8 sm:w-6 sm:h-6" key={tech}/>
        }
      })
    }
  </>
}