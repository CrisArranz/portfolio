import { useState } from "react";
import { AboutMe } from "../sections/about-me/about-me";
import { Experience } from "../sections/experience/experience";
import { Knowledge } from "../sections/knowledge/knowledge";
import { Work } from "../sections/work/work";
import { Header } from "../utils/header/header";

export const Home = () => {
  const [isDark, setisDark] = useState(false);

  const handleClickDark = () => {
    setisDark(prev => !prev);
  }

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="absolute top-0 z-[-2] w-full dark:bg-black bg-[radial-gradient(ellipse_70%_70%_at_50%-15%,rgb(0,128,128,0.6),rgba(255,255,255,0))]">
        <Header onClickDark={handleClickDark} isDark={isDark}/>
        <AboutMe />
        <Experience id="experience" />
        <Knowledge id="tecnologies" />
        <Work id="projects"/>
      </div>
    </div>
  );
}