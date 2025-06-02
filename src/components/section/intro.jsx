
import homeLogo from '/assets/resume_imag.webp';
import { useContext, useEffect, useRef } from 'react';
import Footer from '../footer/footer.jsx';
import { ResumeContext } from '../../context/resumeCreate.jsx';

import { Link } from 'react-router-dom';
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { Button } from '../ui/moving-border.jsx';



gsap.registerPlugin(TextPlugin);

export default function Introduction({ colorMode }) {
    const textRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;
        const text = "Your resume in three easy steps";
        gsap.fromTo(
            el,
            { text: "" },
            {
                duration: 3,
                text: text,
                ease: "none",
                delay: 0.5,
            }
        );
    }, []);

    const { selectBtn, setSelectBtn } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn);
    };

    return (
        <>
            <div className=" mx-auto my-6 flex flex-col md:flex-row items-center justify-between max-w-7xl pt-28 md:pt-32 pb-40 md:pb-28 ">
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                    <h1
                        ref={textRef}
                        className={`font-bold text-3xl md:text-6xl leading-tight flex m-5 items-center ${colorMode === 'light' ? 'text-black' : 'text-white'}`}
                    >
                        <span className="animate-pulse ml-1" aria-hidden="true">|</span>
                    </h1>
                   <p className={` max-w-lg mx-auto md:mx-0 my-[6rem] ${colorMode === 'light' ? 'text-black' : 'text-slate-200'}`}>
                        Create a professional resume in minutes with our easy-to-use resume builder. Choose from a variety of templates, customize your content, and download your resume in multiple formats.
                    </p>
                    <div className="flex flex-col space-y-4 text-start my-[4rem">
                        <div className="flex items-center space-x-3">
                            <button className="rounded-full w-12 h-12 flex items-center justify-center p-5 text-xl text-white font-bold  bg-sky-400 hover:bg-blue-400 " aria-label="Step 1">1</button>
                            <p className="text-xl">Select a template from our collection.</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="rounded-full w-12 h-12 flex items-center justify-center p-5 text-xl text-white font-bold  bg-sky-400 hover:bg-blue-400" aria-label="Step 2">2</button>
                            <p className="text-xl">Build your resume using our easy-to-use resume builder.</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="rounded-full w-12 h-12 flex items-center justify-center p-5 text-xl text-white font-bold  bg-sky-400 hover:bg-blue-400" aria-label="Step 3">3</button>
                            <p className="text-xl">Download your resume.</p>
                        </div>

                    </div>
                    <Link to="/templates">
                    <div className="m-10 pt-28 md:pt-32">
                        <Button
                            onClick={handleSelectTemplate}
                            className=" py-2 px-6 rounded-full bg-white text-black  font-bold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            aria-label="Select Template"
                        >
                            Select Template
                        </Button>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col w-full items-center space-y-4 my-10 md:w-[58%]" >
                    <img
                        src={homeLogo}
                        alt="Illustration representing resume creation"
                        className="my-4 w-full md:w-[60%] h-auto  "
                    />
                </div>
            </div>

            <Footer />
        </>
    );
}
