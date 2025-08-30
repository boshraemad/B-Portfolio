import Separator from "../components/separator";
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

function AboutMe(){
    return(
        <div id="about-me" className="about-me-section bg-black p-4 text-white">
            <Separator>About Me</Separator>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-3 ">
                <div className="card cursor-pointer p-6 rounded-xl border-1 border-gray-200 shadow-sm ">
                    <h3 className="font-[600] text-2xl mt-3">Web Developement</h3>
                    <p className="mt-3 leading-8 ">i use my knowledge of various programming langauges such as HTML5,CSS3,JAVASCRIPT,TAILWIND to bulid digital solutions for users.</p>
                </div>
                <div className="card cursor-pointer p-6 rounded-xl border-1 border-gray-200 shadow-sm ">
                  
                    <h3 className="font-[600] text-2xl mt-3">Technical Skills</h3>
                    <ul className="mt-3 space-y-2">
                    <li  className="flex gap-1 items-center"><FaHtml5 className="text-[#e34f26]  text-2xl"/><span>HTML5</span></li>
                    <li  className="flex gap-1 items-center "><IoLogoCss3 className="text-2xl text-[#2965f1]"/><span>CSS3</span></li>
                    <li  className="flex gap-1 items-center"><FaJs className="text-2xl text-[#f7df1e]"/><span>JS</span></li>
                    <li  className="flex gap-1 items-center"><FaBootstrap className="text-2xl text-indigo-600"/><span>Bootstrap</span></li>
                    <li  className="flex gap-1 items-center"><RiTailwindCssFill className="text-2xl text-[#00d8ff]"/><span>Tailwind</span></li>
                    <li  className="flex gap-1 items-center"><FaReact className="text-2xl text-[#00d8ff]"/><span>React</span></li>
                    <li  className="flex gap-1 items-center"><SiRedux className=" text-2xl text-purple-800"/><span>Redux & Redux Toolkit</span></li>
                    <li className="flex gap-1 items-center"><FaGithubSquare className="text-2xl"/><span>Version Control using git & github</span></li>
                    </ul>
                </div>
                <div className="card cursor-pointer p-6 rounded-xl border-1 border-gray-200">
                    <h3 className="font-[600] text-2xl mt-3">Soft Skills</h3>
                    <ul className="mt-3 space-y-2 list-disc">
                        <li>Time Management</li>
                        <li>Team Work</li>
                        <li>Communication Skills</li>
                        <li>Writing Reports</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;