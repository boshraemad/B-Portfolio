import ProjectCard from "./ProjectCard";
import useGetProjects from "./useGetProjects"
import Loading from "../../components/loading";
import ProjectSkeleton from "./ProjectSkeleton";
export default function ProjectsList() {
    const {isLoading , projects} = useGetProjects();
    // if (isLoading) return <div className="w-full h-full flex items-center justify-center"><Loading /></div>
  return (
    <div className="w-full mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2 mt-8 z-10">
        {
           isLoading ? <ProjectSkeleton/> : projects?.map(project=> <ProjectCard project={project} key={project.id}/>)
        }
    </div>
  )
}
