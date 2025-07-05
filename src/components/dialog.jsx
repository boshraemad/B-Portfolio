import { useState , useEffect } from "react";
import { addProject } from "../supabase/projects-services";
import { editProject , getProjectById } from "../supabase/projects-services";
import {

    useMutation,
    useQueryClient} from '@tanstack/react-query'

function Dialog({ children , header , id , edit , projectId }){
    const [projectName , setProjectName]=useState("");
    const [projectDemo , setProjectDemo]=useState("");
    const [projectRepo , setProjectRepo]=useState("");
    const [projectStatus , setProjectStatus]=useState("completed");

    useEffect(()=>{

        if(edit){

            const fetchData=async()=>{
                getProjectById( setProjectName , setProjectDemo , setProjectRepo , setProjectStatus , projectId );
            }

            fetchData();
        }

    },[])

    const onSubmit = (e)=>{
        e.preventDefault();
        const data = {
            name:projectName,
            demo:projectDemo,
            repo:projectRepo,
            status:projectStatus
        }

        if(edit){
            editProject(projectId , data);
        }else{
            addProject(data);
        }
    }

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: onSubmit,
        onSuccess: () => {
          // refetch
          queryClient.refetchQueries({ queryKey: ['projects'] })
        },
      })
    return(
       <>
       <button data-modal-target={id} data-modal-toggle={id} className="block text-white cursor-pointer bg-pink-300 hover:bg-pink-400 focus:ring-2 focus:outline-none focus:ring-pink-300 font-medium rounded-sm text-sm py-1 px-3 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800" type="button">
        {children}
       </button>

<div id={id} tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {header}
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle={id}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <form className="p-4 md:p-5" onSubmit={onSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" value={projectName} onChange={(e)=>{setProjectName(e.target.value); console.log(projectName)}}/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="demo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Demo</label>
                        <input type="text" name="demo" id="demo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={projectDemo} onChange={(e)=>{setProjectDemo(e.target.value)}}/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="repo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repo</label>
                        <input type="text" name="repo" id="repo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" value={projectRepo} onChange={(e)=>{setProjectRepo(e.target.value)}}/>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                        <select id="status" value={projectStatus} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={(e)=>{setProjectStatus(e.target.value)}}>
                            <option value="completed">completed</option>
                            <option value="in progress">in progress</option>
                            <option value="not started">not started</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="text-white inline-flex items-center bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800" onClick={()=>{mutation.mutate()}}>       
                    submit
                </button>
            </form>
        </div>
    </div>
</div> 

        </>
    )
}

export default Dialog;