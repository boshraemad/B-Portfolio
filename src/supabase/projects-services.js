import { supabase } from "./supabase-client"


export const getProjects = async (setProjects)=>{
    const { error , data } = await supabase.from("projects").select("*").order("created_at" ,{ascending:false});
    if(error){
        console.log(error)
    }
    setProjects(data);

}

export const addProject = async (project)=>{
    const { error , data } = await supabase.from("projects").insert(project).single();
    if(error){
        console.log(error)
    }
}

export const editProject = async (id , newProject)=>{
    const { error , data } = await supabase.from("projects").update({newProject}).eq("id" , id);
    if(error){
        console.log(error)
    }
}

export const deleteProject = async (id)=>{
    const { error , data } = await supabase.from("projects").delete().eq("id" , id);
}
