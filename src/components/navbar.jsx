import { FaDownload } from "react-icons/fa";
import { RiFlowerFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "../components/ui/breadcrumb"
import TopLight from "./LightRays";

function NavBar(){
    return(
       <div className="relative h-[100px] bg-black">
       <TopLight/>
        <Breadcrumb className="flex items-center justify-center absolute top-[20px] max-w-[600px] left-[50%] translate-x-[-50%] px-4 py-4 rounded-lg bg-[#eeeeee82]">
        <BreadcrumbList className="text-black">
          <BreadcrumbItem>
            <BreadcrumbLink><NavLink to="/">Home</NavLink></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink><NavLink to="/projects">Projects</NavLink></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
       </div>
    )
}

export default NavBar;