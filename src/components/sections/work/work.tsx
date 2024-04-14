import { Card } from "../../utils/card-component/card-component";
import { Text } from "../../utils/text-component/text-component";
import { WorkProps } from "./types/work"

export const Work: React.FC<WorkProps> = ({ id }) => {

  const cards = [
    { title: "Street Fighter Vol. Ironhack", image: { src: "https://res.cloudinary.com/dp520ozjl/image/upload/v1713026618/personal/StreetFigther_eo9hxw.png", alt: "Street Fighter Vol. Ironhack"}, description: "Aplicacion en Javascript nativo, usando Canvas para toda la parte de interaccion visual.", type: ["Frontend"], tags: ["Javascript", "CSS", "Git", "HTML", "Canvas"], urls: [{ title: "GitHub", url: "https://github.com/CrisArranz/proyect-street-ironter" }, { title: "App", url: "https://crisarranz.github.io/proyect-street-ironter/index.html" }]},
    { title: "Geometric", image: { src: "https://res.cloudinary.com/dp520ozjl/image/upload/v1713026407/personal/geometric_raousd.png", alt: "Geometric dash Vol. Ironhack"}, description: "Aplicacion en Javascript nativo, usando Canvas para toda la parte de interaccion visual.", type: ["Frontend"], tags: ["Javascript", "CSS", "Git", "HTML", "Canvas"], urls: [{ title: "GitHub", url: "https://github.com/CrisArranz/geometric" }, { title: "App", url: "https://crisarranz.github.io/geometric/index.html" }]},
    { title: "Binding of Isaac", image: { src: "https://res.cloudinary.com/dp520ozjl/image/upload/v1713026530/personal/binding-isaac_dqtw3f.png", alt: "Binding of Isaac Vol. Ironhack"}, description: "Aplicacion en Javascript nativo, usando Canvas para toda la parte de interaccion visual.", type: ["Frontend"], tags: ["Javascript", "CSS", "Git", "HTML", "Canvas"], urls: [{ title: "GitHub", url: "https://github.com/CrisArranz/binding-for-isaac" }, { title: "App", url: "https://crisarranz.github.io/binding-for-isaac/index.html" }]},
    { title: "Glovo Vol.Ironhack", image: { src: "https://res.cloudinary.com/dp520ozjl/image/upload/v1672414845/personal/Glovo_cc187z.png", alt: "Glovo Vol. Ironhack"}, description: "Aplicación réplica de la página de Glovo, para fines educativos, desarrollo de toda la parte Back usando ExpressJS", type: ["Backend","Frontend"], tags: ["Javascript", "CSS", "Git", "Handlebars", "ExpressJS", "NodeJS", "MongoDB"], urls: [{ title: "GitHub", url: "https://github.com/CrisArranz/proyect-glovo" }, { title: "App", url: "https://proyect-glovo.herokuapp.com" }]},
    { title: "Work On It", image: { src: "https://res.cloudinary.com/dp520ozjl/image/upload/v1673371368/personal/WorkOnIt_boigza.png", alt: "Work on it"}, description: "Aplicación React con parte Back desarrollada con ExpressJS. Página de gestion de contratos entre clientes y sus diferentes habilidades", type: ["Backend", "Frontend"], tags: ["Javascript", "React", "CSS", "Git", "ExpressJS", "NodeJS", "MongoDB"], urls: [{ title: "GitHub", url: "https://github.com/andrealgz/work-on-it" }]}
  ];

  return (
    <section id={id} className="py-24 container mx-auto px-2 lg:w-[900px]">
      <Text message='Proyectos' type='HEADING_2' styles={{ className: 'text-3xl font-bold text-black dark:text-white mb-12' }} />
      <section className='grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 md:gap-6'>
        {cards.map(card => <Card {...card}/>)}
      </section>
    </section>
  );
}