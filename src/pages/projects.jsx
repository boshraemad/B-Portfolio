import { FaRegSquarePlus } from "react-icons/fa6";
import { useState , useEffect } from "react";
import { getProjects , deleteProject } from "../supabase/projects-services";
import Dialog from "../components/dialog";
import Loading from "../components/loading";
import { initFlowbite } from "flowbite";
import {
    useQuery,
    useMutation,
    useQueryClient} from '@tanstack/react-query'
function Projects(){
    const [ projects , setProjects ] = useState([]);

    useEffect(()=>{
        initFlowbite();
     })

    //use reactQuery Client
    const queryClient = useQueryClient();
    const {isLoading}=useQuery({
        queryKey: ['projects'],
        queryFn: getProjects(setProjects),

    })

    const mutation = useMutation({
        mutationFn: deleteProject,
        onSuccess: () => {
          // refetch
          queryClient.refetchQueries({ queryKey: ['projects'] })
        },
      })

   const projectsList = projects.map((project)=>{
        return(
            <tr key={project.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {project.name}
            </th>
            <td className="px-6 py-4">
                <a href={project.demo} target="_blank" className="hover:text-blue-600 text-[12px]">{project.demo}</a>
            </td>
            <td className="px-6 py-4">
               <a href= {project.repo} target="_blank" className="hover:text-blue-600 text-[12px]">{project.repo}</a>
            </td>
            <td className={`px-6 py-4 font-bold ${project.status === "completed" ? "text-green-600" : project.status === "in progress" ? "text-blue-500" : "text-gray-500"}`}>
                {project.status}
            </td>
            <td className="px-6 py-4 flex items-center gap-1">
                <Dialog  header="Edit Project" id={`crud-modal-${project.id}`} projectId={project.id} edit={true}>Edit</Dialog>
                <button  onClick={() => { mutation.mutate(project.id) }} className=" cursor-pointer font-medium text-white dark:text-pink-500 py-1 px-3 rounded-sm bg-black hover:text-gray-300">Delete</button>
            </td>
        </tr>
        )
    })
    return(
        <div className="p-4">
        <div className="flex items-center justify-between"><h1 className="mb-6 text-xl font-bold">My projects</h1><Dialog header="Add Product" id="crud-modal-one" edit={false}>add project</Dialog></div>
        <div className="relative overflow-x-auto">
            {isLoading ? <div className="w-full flex items-center justify-center"><Loading/> </div>: 
                        <table className=" shadow-md w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Project name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Demo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Repo Link
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    state
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Controllers
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {projectsList}
                        </tbody>
                    </table>}
        </div>
            </div>

    )
}

export default Projects