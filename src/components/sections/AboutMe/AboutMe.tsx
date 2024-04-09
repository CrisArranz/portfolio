import { Image, Text } from '../../utils';

export const AboutMe = () => {

  const aboutMe = "[DESCRIPCION]";

  return ( 
    <section className='px-20 py-10 flex flex-col gap-4 items-center text'>
      <Image alt="Foto pérfil Cristian Arranz Arevalo" src="https://res.cloudinary.com/dp520ozjl/image/upload/v1671669667/personal/IMGCV_CristianArranzArevalo_zcgj2u.jpg" styles={{ className: "w-[65vw] h-[65vw] rounded-[50%] object-cover object-top" }}/>
      <Text message="cristian arranz arevalo" styles={{ className: "capitalize text-5xl text-center" }} />
      <Text message="software engineer" styles={{ className: "capitalize text-2xl text-center italic animate-pulse" }} />
      <Text message="" styles={{ className: "capitalize text-2xl text-center italic animate-pulse" }} />
      <Text message={aboutMe} styles={{ className: "text-xl text-pretty" }} />
    </section>
  );
}