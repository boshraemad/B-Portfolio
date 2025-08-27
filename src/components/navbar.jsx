import { FaDownload } from "react-icons/fa";
import { RiFlowerFill } from "react-icons/ri";
import { NavLink , Link } from "react-router-dom";
import scrollToElement from "../utils/scrollToElement";
import { useLocation } from "react-router-dom";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

function NavBar(){
    const location=useLocation();
    useEffect(()=>{
        initFlowbite()
    },[])
    return(

        <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 p-4">
        <div className=" relative w-full flex flex-wrap items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-1 space-x-3 rtl:space-x-reverse text-xl font-bold">
               <RiFlowerFill className="text-pink-300"/> BoshraEmad
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className="flex items-center gap-2">
            <a title="download resume"  href="/Boshra-Emad-Awad-CV.pdf" download="Boshra-Emad-Awad-CV.pdf" className="flex items-center gap-2  cursor-pointer text-white bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-300 dark:focus:ring-pink-800"><FaDownload/></a>
        </div>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-300 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        </div>
        <div className="absolute md:relative md:top-0 md:left-0 top-[65px] left-0 z-50 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-300">
        <li>
            <NavLink to="/" className={()=>`block py-2 px-3 rounded-sm md:bg-transparent  md:p-0 md:dark:text-pink-500 ${location.pathname === "/" ? "text-pink-400" : ""}`} aria-current="page">Home</NavLink>
        </li>
        <li>
            <NavLink to="/projects" end className={({isActive})=>`block py-2 px-3 rounded-sm md:bg-transparent  md:p-0 md:dark:text-pink-500 ${isActive ? "text-pink-400" : ""}`}>Projects</NavLink>
        </li>
        </ul>
        </div>
        </div>
        </nav>

    )
}

export default NavBar;