import { useMutation } from "@tanstack/react-query"
import { updateLikes as update } from "../../api/projects-services"
export default function useUpdateLikes() {
  const {mutate:updateLikes} = useMutation({
    mutationFn:(data)=>update(data)
  })

  return updateLikes
}
