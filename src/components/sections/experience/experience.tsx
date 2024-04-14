import { Text } from "../../utils/text/text";
import { ExperienceProps } from "./types/experience";

export const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <section id={id} className="relative mx-auto container px-6 pt-24 lg:h-screen overflow-hidden lg:pt-0 lg:w-[750px] lg:flex lg:flex-col lg:justify-center">
      <Text type="HEADING_2" message="Experiencia" styles={{ className: "text-3xl font-bold text-black dark:text-white" }} />
      <article className="container px-2 mt-10">
        <ul className="relative border-l border-emerald-400 dark:border-emerald-700">
          <li className="mb-8 md:mb-6 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-600 rounded-full -left-3 dark:bg-emerald-600">
              <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <Text message="Software Engineer" type="HEADING_3" styles={{ className: "flex items-center gap-2 mb-1 text-lg font-semibold text-black dark:text-white" }}> 
              <Text type="SPAN" message=" - " styles={{ className: "dark:text-white text-black font-normal" }} />
              <Text type="SPAN" message="Openbank" styles={{ className: "text-sm text-fuchsia-800 dark:text-fuchsia-300/90" }} />
            </Text>
            <time className="block mb-2 text-sm font-normal leading-none text-black dark:text-white">Septiembre 2023 - Presente</time>
            <p className="mb-4 font-normal text-dark-700 dark:text-white text-base text-pretty">Ayudando al equipo de desarrollo a encontrar soluciones tecnológicas para proyectos del Grupo Santander. Desarrollando el producto, siguiendo con buenas prácticas de programación.</p>
          </li>
          <li className="mb-8 md:mb-6 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-600 rounded-full -left-3 dark:bg-emerald-600">
              <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <Text message="Teach Assistant" type="HEADING_3" styles={{ className: "flex items-center gap-2 mb-1 text-lg font-semibold text-black dark:text-white" }}> 
              <Text type="SPAN" message=" - " styles={{ className: "dark:text-white text-black font-normal" }} />
              <Text type="SPAN" message="Ironhack" styles={{ className: "text-sm text-fuchsia-800 dark:text-fuchsia-300/90" }} />
            </Text>
            <time className="block mb-2 text-sm font-normal leading-none text-black dark:text-white">Noviembre 2022 - Presente</time>
            <p className="mb-4 font-normal text-dark-700 dark:text-white text-base text-pretty">Ayudando al staff para los cursos en Remoto que se imparten en español. Explicación de teoria, resolución de problemas y ayuda emocional 😉</p>
          </li>
          <li className="mb-8 md:mb-6 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-600 rounded-full -left-3 dark:bg-emerald-600">
              <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <Text message="Fullstack Developer" type="HEADING_3" styles={{ className: "flex items-center gap-2 mb-1 text-lg font-semibold text-black dark:text-white" }}> 
              <Text type="SPAN" message=" - " styles={{ className: "dark:text-white text-black font-normal" }} />
              <Text type="SPAN" message="Alvea" styles={{ className: "text-sm text-fuchsia-800 dark:text-fuchsia-300/90" }} />
            </Text>
            <time className="block mb-2 text-sm font-normal leading-none text-black dark:text-white">Septiembre 2021 - Septiembre 2023</time>
            <p className="mb-4 font-normal text-dark-700 dark:text-white text-base text-pretty">Mantenimiento y desarrollo de la página del Banco SingularBank (SelfBank), ofreciendo soluciones agiles y a medida</p>
          </li>
          <li className="mb-8 md:mb-6 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-600 rounded-full -left-3 dark:bg-emerald-600">
              <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <Text message="Fullstack Developer" type="HEADING_3" styles={{ className: "flex items-center gap-2 mb-1 text-lg font-semibold text-black dark:text-white" }}> 
              <Text type="SPAN" message=" - " styles={{ className: "dark:text-white text-black font-normal" }} />
              <Text type="SPAN" message="Antartyca" styles={{ className: "text-sm text-fuchsia-800 dark:text-fuchsia-300/90" }} />
            </Text>
            <time className="block mb-2 text-sm font-normal leading-none text-black dark:text-white">Abril 2019 - Septiembre 2021</time>
            <p className="mb-4 font-normal text-dark-700 dark:text-white text-base text-pretty">Desarrollo de eCommerce de venta de Libros para el grupo SM, adaptando las propuestas al cliente dando un servicio ágil y de calidad</p>
          </li>
          <li className="mb-8 md:mb-6 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-600 rounded-full -left-3 dark:bg-emerald-600">
              <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <Text message="Fullstack Developer" type="HEADING_3" styles={{ className: "flex items-center gap-2 mb-1 text-lg font-semibold text-black dark:text-white" }}> 
              <Text type="SPAN" message=" - " styles={{ className: "dark:text-white text-black font-normal" }} />
              <Text type="SPAN" message="Steelmood" styles={{ className: "text-sm text-fuchsia-800 dark:text-fuchsia-300/90" }} />
            </Text>
            <time className="block mb-2 text-sm font-normal leading-none text-black dark:text-white">Abril 2015 - Diciembre 2018</time>
            <p className="mb-4 font-normal text-dark-700 dark:text-white text-base text-pretty">Desarrollo de página de uso interno para el cliente Repsol, ofreciendo la solución cumpliendo con las buenas prácticas establecidas</p>
          </li>
        </ul>
      </article>
    </section>
  );
}