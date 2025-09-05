import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiFlowerFill } from "react-icons/ri";
import { Link } from "react-router";

function Footer() {
	return (
		<div className="footer bg-black border-t-1 border-white/10 p-2">
			<div className="w-full mx-auto lg:grid items-center justify-center lg:grid-cols-3 flex flex-col gap-2 grid-cols-2">
				<div className="border-e-2 border-white/10 text-white">
					<p className="hover:text-pink-300 transition duration-300 cursor-default font-[600] flex items-center gap-1">
						<RiFlowerFill className="text-pink-300" />
						Frontend Developer
					</p>
				</div>
				<div className="lg:border-e-2 border-white/10">
					<ul className="text-sm text-white space-y-4">
						<li className="hover:text-pink-300 transition duration-300">
							<Link to="/projects">Projects</Link>
						</li>
					</ul>
				</div>
				<div className="text-white ">
					<p className="text-sm text-gray-400 lg:text-center">Social Media</p>
					<ul className="flex items-center justify-center gap-3 mt-3 text-xl">
						<li className="hover:text-pink-300 cursor-pointer transition duration-300">
							<a
								href="https://github.com/boshraemad"
								target="_blank"
								rel="noopener"
							>
								<FaGithub />
							</a>
						</li>
						<li className="hover:text-pink-300 cursor-pointer transition duration-300">
							<a>
								<FaSquareXTwitter />
							</a>
						</li>
						<li className="hover:text-pink-300 cursor-pointer transition duration-300">
							<a>
								<FaInstagram />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
