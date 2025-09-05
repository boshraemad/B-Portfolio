import { useMutation , useQueryClient } from "@tanstack/react-query"
import { updateLikes as update } from "../../api/projects-services"
export default function useUpdateLikes(id) {
  const queryClient = useQueryClient();
  const {mutate:updateLikes} = useMutation({
    mutationFn:(data)=>update(data),
    onSuccess:()=>{
      queryClient.invalidateQueries(["projects"])
      const likedProjects=JSON.parse(localStorage.getItem("likedProjects"));
      if(!likedProjects.includes(id)){
        localStorage.setItem("likedProjects" , JSON.stringify([...likedProjects , id]));
      }else{
        const updatedLikedProjects = likedProjects.filter(projectId=>projectId!==id);
        localStorage.setItem("likedProjects" , JSON.stringify(updatedLikedProjects));
      }
      
    }
  })

  return updateLikes
}
