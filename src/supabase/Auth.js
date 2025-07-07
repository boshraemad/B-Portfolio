import { supabase } from "./supabase-client";
import Swal from "sweetalert2";
export const signUp=async( body)=>{
    const {error , data} =  await supabase.auth.signUp(body);

    if(error){
       console.log(error)
    }else{
        Swal.fire("please check your email");
    }

}

export const signIn = async(body)=>{
    const {error} = await supabase.auth.signInWithPassword(body);
    if(error){
        console.log(error);
    }

}

export const logout = async()=>{

    await supabase.auth.signOut();

}