import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLikes as update } from "../../api/projects-services";

export default function useUpdateLikes(id) {
  const queryClient = useQueryClient();

  const { mutate: updateLikes } = useMutation({
    mutationFn: (data) => update(data),
    onMutate: async () => {
      const likedProjects = JSON.parse(localStorage.getItem("likedProjects")) || [];
      let updatedLikedProjects;

      if (!likedProjects.includes(id)) {
        updatedLikedProjects = [...likedProjects, id];
      } else {
        updatedLikedProjects = likedProjects.filter((projectId) => projectId !== id);
      }
      localStorage.setItem("likedProjects", JSON.stringify(updatedLikedProjects));
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return updateLikes;
}
