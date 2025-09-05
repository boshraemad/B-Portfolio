import { FaRegHeart , FaHeart } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import useUpdateLikes from "./useUpdateLikes";

export default function ProjectCard({project}) {
    const {id , name , image , repo , demo , likes , tags} = project;
    const updateLikes = useUpdateLikes(id);
    const likedProjects = JSON.parse(localStorage.getItem("likedProjects"));
    const isLiked = likedProjects?.includes(id);

  return (
    <div className="w-full rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg p-3 text-white/80">
        <img src={image} className="object-cover rounded-sm"/>
        <div className="flex justify-between items-center"><p className="font-semibold mt-2">{name}</p><div className="flex items-center gap-2"><span>{likes}</span>{!isLiked ? <FaRegHeart onClick={()=>updateLikes({id:id , likes:likes+1})} className={`cursor-pointer`}/> :<FaHeart onClick={()=>updateLikes({id:id , likes:likes-1})} className={`cursor-pointer text-red-600`}/>} </div></div>
        <div className="flex items-center gap-1 mt-3">
          {tags.map(tag=><div className="text-black bg-white/40 text-sm p-1 rounded-sm">{tag}</div>)}
        </div>
        <div className="mt-3 flex items-center gap-1">
            <a className="text-xl text-white" href={repo}><FaGithub/></a>
            <a className="text-xl text-blue-600" href={demo}><TbWorld/></a>
        </div>
    </div>
  )
}
