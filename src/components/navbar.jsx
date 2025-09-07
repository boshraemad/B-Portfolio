import { FaDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from "./theme-provider";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "../components/ui/breadcrumb"
import TopLight from "./LightRays";
import { ModeToggle } from "./mode-toggle";

function NavBar(){
  const {theme} = useTheme();
    return(
       <div className="relative h-[100px]">
        {theme === "light" ? null :  <TopLight/>}
        <Breadcrumb className="flex items-center justify-center absolute top-[20px] lg:w-[350px] md:w-[300px] sm:w-[250px] w-[220px] left-[50%] translate-x-[-50%] p-2 rounded-lg bg-foreground">
        <BreadcrumbList className="text-white">
        <BreadcrumbItem>
           <ModeToggle/>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><NavLink to="/">Home</NavLink></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild><NavLink to="/projects">Projects</NavLink></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="cursor-pointer" href="/Boshra-Emad-Awad.pdf" download="Boshra-Emad-Awad.pdf" title="download-resume" ><FaDownload/></BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
       </div>
    )
}

export default NavBar;
