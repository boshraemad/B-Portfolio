import { FaRegHeart } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import useUpdateLikes from "./useUpdateLikes";
import { useState } from "react";
export default function ProjectCard({project}) {
    const {id , name , image , repo , demo , likes , tags} = project;
    const [liked , setLiked] = useState();
    const updateLikes = useUpdateLikes();
  return (
    <div className="max-w-sm w-full rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg p-3 text-white/80">
        <img src={image} className="object-cover rounded-sm"/>
        <div className="flex justify-between items-center px-3"><p className="font-semibold mt-2">{name}</p><div className="flex items-center gap-2"><span>{likes}</span><FaRegHeart onClick={()=>updateLikes({id:id , likes:liked ? likes-1 : likes+1})} className="cursor-pointer"/></div></div>
        <div className="mt-6 flex items-center gap-3 px-3 mb-2">
            <a className="text-xl text-white" href={repo}><FaGithub/></a>
            <a className="text-xl text-blue-600" href={demo}><TbWorld/></a>
        </div>
    </div>
  )
}
