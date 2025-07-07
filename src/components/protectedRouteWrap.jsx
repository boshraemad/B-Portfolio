import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase-client";

function ProtectedRoute({children}){
    const navigate=useNavigate();

    useEffect(()=>{
        supabase.auth.getSession().then(({data:{session}})=>{
            if(!session){navigate("/")};
        });


        //listen for logout
        const { data:listener}=supabase.auth.onAuthStateChange((event , session)=>{
            if(!session){navigate("/")}

        });

        //component unmount function
        return ()=>listener.subscription.unsubscribe();
    },[navigate])

    return children;
}


export default ProtectedRoute;