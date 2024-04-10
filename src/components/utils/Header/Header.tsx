import { HeaderProps } from "./types/Header";

export const Header: React.FC<HeaderProps> = ({ onClickDark }) => {
  return (
    <header className="backdrop-blur-md bg-dark-200/30 fixed w-full z-20 top-0 left-0">
      <nav className="container px-2 lg:max-w-[1114px] flex flex-wrap items-center justify-between mx-auto py-4 ">
        <a className="text-3xl font-black text-black dark:text-white" href="/">Cris<span className="text-emerald-600">Arranz</span></a>
        <div className="md:order-2">
          <ul className="hidden md:flex md:space-x-8 items-center">
            <li>
              <a className="dark:text-white" href="https://www.linkedin.com/in/cristian-arranz-arevalo/" target="_blank"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
            </li>
            <li>
              <a className="dark:text-white" href="https://github.com/CrisArranz" target="_blank"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></li>
            <li>
              <button onClick={onClickDark} className="bg-slate-300 dark:bg-slate-700 p-1 rounded-md">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-black dark:text-white transition-colors duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"></path></svg>
              </button>
            </li>
          </ul>
          <div className="flex items-center">
            <button onClick={onClickDark} className="bg-slate-300 dark:bg-slate-700 p-1 rounded-md md:hidden" title="Switcher button">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-black dark:text-white transition-colors duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"></path></svg>
            </button>
            <button className="p-2 text-sm text-dark-700 dark:text-dark-200 rounded-lg md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
        <div className="items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500 hidden">
          <ul className="flex flex-col gap-6 p-4 md:p-0 mt-4 font-medium  md:flex-row  md:mt-0 md:border-0 ">
            <li className="text-center"><a href="/#projects" className="relative overflow-hidden z-10 p-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-emerald-300 before:backdrop-blur-lg before:rounded-lg rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full transition-all duration-300 dark:text-emerald-400 hover:text-emerald-100 dark:text-dark-200 dark:hover:text-white">Proyectos</a></li>
            <li className="text-center"><a href="/#experience" className="relative overflow-hidden z-10 p-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-emerald-300 before:backdrop-blur-lg before:rounded-lg rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full transition-all duration-300 dark:text-emerald-400 hover:text-emerald-100 dark:text-dark-200 dark:hover:text-white">Experiencia</a></li>
            <li className="text-center"><a href="/#tecnologies" className="relative overflow-hidden z-10 p-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-emerald-300 before:backdrop-blur-lg before:rounded-lg rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full transition-all duration-300 dark:text-emerald-400 hover:text-emerald-100 dark:text-dark-200 dark:hover:text-white">Tecnologías</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}