import { Card } from "../../";

export default function ServiceOffer() {
  return (
    <div className="dark:text-white">
      <div>
        <h3 className="text-3xl py-1">Servicios que proporciono</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Desde el comienzo de mi viaje en este sector he trabajado de manera presencial y remota para toda clase de <strong className="text-teal-500">empresas</strong> y <strong className="text-teal-500">consultoras</strong>, colaborando con gente top en el sector para crear productos digitales para el consumo del usuario y del empleado
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Ofrezco experiencia desde todos los puntos, como programador, diseñador y también ayudando al aprendizaje colectivo.
        </p>
      </div>
      <div className="lg:flex gap-10 justify-center">
        <Card values={{
          image: "https://res.cloudinary.com/dp520ozjl/image/upload/v1672410673/personal/code_x8fcb6.png",
          title: "Programación y Bases de Datos",
          description: "Desarrollando proyectos en diferentes lenguajes",
          titleTools: "Herramientas de programación usadas",
          tools: ["React", "Angular", "Nodejs", "Express", "MongoDB"]
        }} />
        <Card values={{
          image: "https://res.cloudinary.com/dp520ozjl/image/upload/v1672410673/personal/design_ch6usq.png",
          title: "Diseños a medida",
          description: "Creación de diseños a medida y réplicas de páginas",
          titleTools: "Herramientas de maquetación usadas",
          tools: ["Bootstrap", "Tailwind"]
        }} />
        <Card values={{
          image: "https://res.cloudinary.com/dp520ozjl/image/upload/v1672410673/personal/consulting_z2ghve.png",
          title: "Trabajo en equipo",
          description: "Trabajar en equipo y ordenado como pilar fundamental",
          titleTools: "Herramientas más usadas",
          tools: ["SCRUM", "Agile"]
        }} />
      </div>
    </div>
  );  
}