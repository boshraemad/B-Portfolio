import { RiFlowerFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="footer bg-black">
                <div className="w-full mx-auto grid lg:grid-cols-3 grid-cols-2">
                    <div className="border-e-2 border-white p-4 text-white">
                        <p className="hover:text-pink-300 font-[600] flex items-center gap-1"><RiFlowerFill className="text-pink-300"/>Frontend Developer</p>
                    </div>
                    <div className="lg:border-e-2 border-white p-4">
                        <ul className="text-sm text-white space-y-4">
                            <li className="hover:text-pink-300"><Link to="/projects">Projects</Link></li>
                        </ul>
                    </div>
                    <div className="text-white p-4">
                        <p className="text-sm text-gray-400">socials media handles</p>
                        <ul className="flex items-center gap-3 mt-3 text-xl">
                            <li className="hover:text-pink-300 cursor-pointer"><a href="https://github.com/boshraemad" target="_blank"><FaGithub/></a></li>
                            <li className="hover:text-pink-300 cursor-pointer"><a><FaSquareXTwitter/></a></li>
                            <li className="hover:text-pink-300 cursor-pointer"><a><FaInstagram/></a></li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Footer;