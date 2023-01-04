import Image from "next/image";

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
          description: "Desarrollado con CANVAS, Javascript (ES6). Desplegado a través de GitHub."
        }} />
        <ImageCard values={{
          url: {
            image: "https://res.cloudinary.com/dp520ozjl/image/upload/v1672414845/personal/Glovo_cc187z.png",
            project: "https://proyect-glovo.herokuapp.com/"
          },
          title: "Glovo App",
          description: "Desarrollado con la libreria Express de Nodejs, Javascript (ES6), usando la libreria de Bootstrap. Desplegado en Heroku."
        }} />
      </div>
    </div>
  )
}