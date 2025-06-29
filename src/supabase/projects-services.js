import { supabase } from "./supabase-client"


export const getProjects = async (setProjects)=>{
    const { error , data } = await supabase.from("projects").select("*").order("created_at" ,{ascending:false});
    if(error){
        console.log(error)
    }
    setProjects(data);

}

export const getProjectById = async ( setProjectName , setProjectDemo , setProjectRepo , setProjectStatus , id )=>{
    const { error , data } = await supabase.from("projects").select("*").eq("id" , id);
    setProjectName(data[0]?.name || "");
    setProjectDemo(data[0]?.demo || "");
    setProjectRepo(data[0]?.repo || "");
    setProjectStatus(data[0]?.status || "");
}
export const addProject = async (project)=>{
    const { error , data } = await supabase.from("projects").insert(project).single();
    if(error){
        console.log(error)
    }
}

export const editProject = async (id , field)=>{
    const { error , data } = await supabase.from("projects").update(field).eq("id" , id);
    if(error){
        console.log(error)
    }
}

export const deleteProject = async (id)=>{
    const { error , data } = await supabase.from("projects").delete().eq("id" , id);
}
