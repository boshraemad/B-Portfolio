import image from "../assets/avatar.jpg";
import { motion } from "motion/react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import TextType from '../../react-bits/TextType/TextType';
function Landing(){
    return(
        <div className="landing w-full h-[calc(100vh-87px)] flex flex-col-reverse lg:flex-row items-center gap-6 p-12 cursor-pointer bg-black">
            <div className="info lg:flex-1/2 flex-1 text-center lg:text-start">
                <p className="mb-1 text-pink-200">Hey, I'm Boshra</p>
                <TextType 
                text={["Front-End" , "Developer" , "From Egypt"]}
                typingSpeed={75}
                pauseDuration={1000}
                showCursor={true}
                cursorCharacter="|"
                />
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