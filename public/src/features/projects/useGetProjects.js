import { getProjects } from "../../api/projects-services"
import { useQuery } from "@tanstack/react-query"

export default function useGetProjects() {
    const {data:projects , isLoading} = useQuery({
        queryKey:["projects"],
        queryFn:()=>getProjects()
    })

    return {projects , isLoading};
}
