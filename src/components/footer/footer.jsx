import LinkedIn from '../../../public/assets/linkedin.png';
import GitHub from '../../../public/assets/github.png';
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp.jsx";

const Footer = ({ colorMode }) => {
    return (
        <footer className="
            fixed bottom-0 left-0 w-full z-50
            bg-gradient-to-r from-slate-700/90 via-slate-800/90 to-slate-700/90
            backdrop-blur-md
            flex 
            px-8 py-4
            shadow-2xl
            text-white
            flex-col md:flex-row md:justify-between items-center
        ">
             <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Build <p className='font-bold text-5xl' >RESUME</p> <br /> the right way
                </motion.h1>
            </LampContainer>

            <div className="font-extrabold text-lg md:text-xl tracking-wide drop-shadow-lg m-4 flex justify-center items-center md:flex-row">
                Made By <span className="text-sky-400 space-x-1">Mitanshu❤️</span>
            </div>
            <div className=" space-x-8 w-2/6 flex flex-row m-3 ">
                <a
                    href="https://www.linkedin.com/in/mitanshu-agrawal-b18129251/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 hover:scale-110 "
                    title="LinkedIn"
                >
                    <img
                        className="h-9 w-9 rounded-full shadow-lg border-2 border-gray-400 "
                        src={LinkedIn}
                        alt="LinkedIn logo"
                    />
                </a>
                <div className="w-2/6 hover:text-blue-500">
                    LinkedIn
                </div>
            </div>
            <div className=" space-x-8 w-2/6 flex flex-row m-3 ">
                <a
                    href="https://github.com/mitanshu-agr711"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 hover:scale-110"
                    title="GitHub"
                >
                    <img
                        className="h-9 w-9 rounded-full shadow-lg border-2 border-gray-400"
                        src={GitHub}
                        alt="GitHub logo"
                    />
                </a>
                <div className="w-2/6 hover:text-blue-500">
                    GitHub
                </div>
            </div>
            <p>@2025 Copy Right</p>
           
        </footer>
    );
};

export default Footer;
