import NavBar from "../components/navbar";
import HomePageLayout from "./homePageLayout";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

function HomePage(){
   useEffect(()=>{
      initFlowbite();
   })
    return(
       <div>
          <NavBar/>
          <Outlet/>
       </div>
    )
}

export default HomePage;