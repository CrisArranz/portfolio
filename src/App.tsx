import { AboutMe, MyKnowledge } from "./components/sections"
import { Header } from "./components/utils/Header";

export const App = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-full bg-dark-50 dark:bg-dark-950 bg-[linear-gradient(rgb(0,128,128,0.6),rgba(255,255,255,0))]">
      <Header />
      <AboutMe />
      <MyKnowledge id="tecnologies" />
    </div>
  );
}