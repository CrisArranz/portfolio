import { BsFillMoonStarsFill } from "react-icons/bs";
import { Button } from "../../";

interface Props {
  title: string,
  url: string,
  handleClick: Function
}

export default function Navbar({ title, url, handleClick }: Props) {
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="text-2xl uppercase font-burtons">developed by <a href={`${url}/${title}`}>{title}</a></h1>
      <ul className="flex items-center">
        <li><BsFillMoonStarsFill className="cursor-pointer text-2xl" onClick={() => handleClick()}/></li>
        <li><Button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer" url="CV - Cristian Arranz Arévalo.pdf" message="Resume" /></li>
      </ul>
    </nav>
  )
}