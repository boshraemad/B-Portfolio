import { supabase } from "./supabase-client"


export const getProjects = async ()=>{
    const { error , data } = await supabase.from("projects").select("*").order("created_at" ,{ascending:true});
    if(error){
        throw new Error(error);
    }
    return data
}

export const getProjectById = async ( id )=>{
    const { error , data } = await supabase.from("projects").select("*").eq("id" , id);
    if(error){
        throw new Error(error);
    }
    return data
}
