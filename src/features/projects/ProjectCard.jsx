import { FaRegHeart } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
export default function ProjectCard({project}) {
    const {name , image , repo , demo , likes , tags} = project;
    console.log(tags)
  return (
    <div className="w-full h-full relative bg-white">
        <img src={image} className="object-cover"/>
        <div className="flex justify-between items-center px-3"><p className="font-semibold mt-2">{name}</p><div className="flex items-center gap-2"><span>{likes}</span><FaRegHeart className="cursor-pointer"/></div></div>
        <div className="mt-6 flex items-center gap-3 px-3 mb-2">
            <a className="text-xl" href={repo}><FaGithub/></a>
            <a className="text-xl text-blue-600" href={demo}><TbWorld/></a>
        </div>
    </div>
  )
}
