import image from "../assets/avatar.jpg";
import { motion } from "motion/react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
function Landing(){
    return(
        <div className="landing w-full h-[calc(100vh-87px)] flex flex-col-reverse lg:flex-row items-center justify-between gap-6 p-12 cursor-pointer bg-pink-50">
            <div className="info lg:flex-1/2 flex-1 text-center lg:text-start">
                <p className="mb-1">Hey, I'm Boshra</p>
                <h1 className="lg:text-8xl text-5xl font-bold mb-6"><span className="text-pink-300">Front</span>end<br/>Developer</h1>
                <p className="text-gray-400 mb-6">I'm a passionate frontend developer based in Egypt</p>
                <motion.ul className="flex gap-3 " 
                initial={{ '--rotate': '0deg' }}
                animate={{ '--rotate': '360deg' }}
                transition={{ duration: 2, repeat: Infinity }}>
                <li style={{ transform: 'rotate(var(--rotate))' }} className="text-4xl text-[#e34f26]"><FaHtml5/></li>
                <li style={{ transform: 'rotate(var(--rotate))' }} className="text-4xl text-[#2965f1]"><IoLogoCss3/></li>
                <li style={{ transform: 'rotate(var(--rotate))' }} className="text-4xl text-[#f7df1e]"><FaJs/></li>
                <li style={{ transform: 'rotate(var(--rotate))' }} className="text-4xl text-indigo-600"><FaBootstrap/></li>
                <li style={{ transform: 'rotate(var(--rotate))' }} className="text-4xl text-[#00d8ff]"><RiTailwindCssFill/></li>
                <li style={{ transform: 'rotate(var(--rotate))' }} className="text-4xl text-[#00d8ff]"><FaReact/></li>
                <li style={{ transform: 'rotate(var(--rotate))' }} className="text-4xl text-purple-800"><SiRedux/></li>
                </motion.ul>
            </div>
            <div className="relative">
            <div className="avatar w-full h-full rounded-full">
                    <img className="lg:w-100 lg:h-100 w-70 h-70 rounded-full object-cover border-pink-200 border-10" src={image}/>
            </div>
            </div>
        </div>
    )
}


export default Landing;