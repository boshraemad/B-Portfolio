import { FaDownload } from "react-icons/fa";
import { RiFlowerFill } from "react-icons/ri";


function NavBar(){
    return(

        <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="w-full flex flex-wrap items-center justify-between py-3">
        <a href="#" className="flex items-center gap-1 space-x-3 rtl:space-x-reverse text-xl font-bold">
               <RiFlowerFill className="text-pink-300"/> BoshraEmad
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="flex items-center gap-2  cursor-pointer text-white bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-300 dark:focus:ring-pink-800"><FaDownload/></button>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-300 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-300">
        <li>
            <a href="#" className="block py-2 px-3 text-white bg-pink-300 rounded-sm md:bg-transparent md:text-pink-400 md:p-0 md:dark:text-pink-500" aria-current="page">Home</a>
        </li>
        <li>
            <a href="#about-me" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-400 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-300">About</a>
        </li>
        <li>
            <a href="#stats" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-400 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-300">Stats</a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-400 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-300">Projects</a>
        </li>
        </ul>
        </div>
        </div>
        </nav>

    )
}

export default NavBar;