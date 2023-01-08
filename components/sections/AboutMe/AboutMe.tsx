import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center dark:text-white">
      <div className="relative rounded-full w-60 h-60 overflow-hidden md:h-96 md:w-96">
        <Image src="https://res.cloudinary.com/dp520ozjl/image/upload/v1671669667/personal/IMGCV_CristianArranzArevalo_zcgj2u.jpg" objectPosition="top" objectFit="cover" layout="fill" alt="Cristian Arranz Arevalo" />
      </div>
      <div className="text-center px-10 pt-10 pb-5">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Cristian Arranz Arevalo</h2>
        <h3 className="text-2xl py-2 md:text-3xl">Fullstack Developer</h3>
        <p className="text-md py-5 leading-20 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">Desarrollador fullstack ofreciendo servicios y diseños a medida. <br />Únete mas abajo y ¡Que empiece el coding!</p>
      </div>
      <div className="text-5xl flex justify-center gap-10 text-gray-600 pb-16 dark:text-white">
        <a href="https://github.com/CrisArranz"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/cristian-arranz-arevalo/"><AiFillLinkedin /></a>
      </div>
    </div>
  )
}