import { ImageCard } from "../../";

export default function Projects() {
  return (
    <div className="dark:text-white">
      <h3 className="text-3xl py-1">Proyectos</h3>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <ImageCard values={{
          url: {
            image: "https://res.cloudinary.com/dp520ozjl/image/upload/v1672414846/personal/StreetFigther_jwbdpk.png",
            project: "https://crisarranz.github.io/proyect-street-ironter/index.html"
          },
          title: "Street Fighter vol. IronHack",
          description: "Desarrollado con CANVAS, Javascript (ES6). Desplegado a través de GitHub.",
          technologies: ["javascript", "html5", "css3", "bootstrap"]
        }} />
        <ImageCard values={{
          url: {
            image: "https://res.cloudinary.com/dp520ozjl/image/upload/v1672414845/personal/Glovo_cc187z.png",
            project: "https://proyect-glovo.herokuapp.com/"
          },
          title: "Glovo App",
          description: "Desarrollado con la libreria Express de Nodejs, MongoDB, Javascript (ES6), usando la libreria de Bootstrap. Desplegado en Heroku.",
          technologies: ["nodejs", "html5", "css3", "bootstrap"]
        }} />
        <ImageCard values={{
          url: {
            image: "https://res.cloudinary.com/dp520ozjl/image/upload/v1673371368/personal/WorkOnIt_boigza.png",
            project: "https://work-on-it.herokuapp.com/"
          },
          title: "Work On It",
          description: "Desarrollado con REACT el front, con la libreria Express de Nodejs y MongoDB para el backend, Javascript (ES6), usando la libreria de Bootstrap. Desplegado en Heroku usando Docker.",
          technologies: ["react", "nodejs", "docker", "bootstrap", "html5", "css3"]
        }} />
      </div>
    </div>
  )
}