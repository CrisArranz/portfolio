import { Image, Text } from '../../utils';

export const AboutMe = () => {

  const aboutMe = "+5 años de experiencia. Ingeniero de Software y Desarrollador Web. Especializado en dar soluciones a medida. Ayudando a nuevas mentes a aprender programación.";

  return ( 
    <section className='relative mx-auto container px-2 pt-44 lg:h-screen overflow-hidden lg:pt-0 lg:w-[50vw] flex flex-col justify-center gap-4'>
      <div className='flex flex-col gap-8 items-center lg:flex-row-reverse lg:justify-center lg:items-center md:gap-x-4'>
        <Image alt="Foto pérfil Cristian Arranz Arevalo" src="https://res.cloudinary.com/dp520ozjl/image/upload/v1671669667/personal/IMGCV_CristianArranzArevalo_zcgj2u.jpg" />
        <header className='lg:w-4/5 text-center'>
          <Text type="HEADING_1" message="Hola," styles={{ className: "text-3xl font-bold lg:text-5xl lg:leading-[4rem] text-black dark:text-white" }}>
            <Text type="SPAN" message=" soy Cristian!" styles={{ className: "text-emerald-600" }}/>
          </Text>
          <Text type="SPAN" message="desarrollador fullstack" styles={{ className: "capitalize font-semibold inline-flex animate-background-shine bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] dark:bg-[linear-gradient(110deg,#b6eaff,45%,#065074,55%,#b6eaff)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent" }} />
          <Text type="HEADING_2" message={aboutMe} styles={{ className: "text-xl text-pretty dark:text-white" }} />
        </header>
      </div>
      <ul className="mt-10 flex flex-wrap gap-4 justify-center">
        <li>
          <a href="https://www.linkedin.com/in/cristian-arranz-arevalo/" className="rounded-full text-black dark:text-emerald-300 border border-white dark:border-black flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:scale-105 transition-transform" target="_blank" rel="noopener noreferrer">
            <svg width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" className="size-4 md:size-6"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/CrisArranz" className="rounded-full text-black dark:text-emerald-300 border border-white dark:border-black flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:scale-105 transition-transform" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 256 250" width="256" height="250" fill="currentColor" preserveAspectRatio="xMidYMid" className="size-4 md:size-6"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="currentColor"></path></svg> GitHub
          </a>
        </li>
        <li>
          <a href="mailto:c.arranz.arevalo@gmail.com" className="rounded-full text-black dark:text-emerald-300 border border-white dark:border-black flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:scale-105 transition-transform" target="_blank" rel="noopener noreferrer">
            <svg className="size-4 md:size-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6"></path><path d="M3 7l9 6l9 -6"></path><path d="M15 19l2 2l4 -4"></path></svg> Email Me!
          </a>
        </li>
      </ul>
      <div className="absolute hidden lg:flex bottom-4 w-full justify-center">
        <a href="#experience" className="md:flex gap-2 animate-bounce text-emerald-600 dark:text-primary-400 font-bold">
          Experiencia <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"></path></svg>
        </a>
      </div>
    </section>
  );
}