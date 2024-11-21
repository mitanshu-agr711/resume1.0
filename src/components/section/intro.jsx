
import homeLogo from '/assets/homei.avif';
import { useContext } from 'react';
import Footer from '../footer/footer.jsx';
import {ResumeContext }from '../../context/resumeCreate.jsx';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Introduction({ colorMode }) {
    const { selectBtn, setSelectBtn } = useContext(ResumeContext);


    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn);
    };
    return (
        <>

            <Helmet>
                <title>Resume Builder - Create Your Resume in Minutes</title>
                <meta name="description" content="Build your professional resume in minutes using our easy-to-use online resume builder. Choose from a variety of templates and customize your resume to land your dream job. Get started now!" />
                <meta name="keywords" content="resume builder, online resume builder, professional resume, resume templates, resume designs, resume generator, resume creator, resume maker, build resume, create resume, download resume" />
                <meta name="robots" content="index,follow" />
            </Helmet>
            <div className="container mx-auto my-6 flex flex-col md:flex-row items-center justify-between max-w-7xl">
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                    <h1 className="font-bold text-3xl md:text-6xl leading-tight">
                        Your resume in three
                        <span className="text-teal-500"> easy steps</span>
                    </h1>
                    <p className={` max-w-lg mx-auto md:mx-0`}>
                        Our resume builder helps you create a professional-looking resume in just a few simple steps. Choose from different templates to match your style, and get a downloadable resume ready for job applications.
                    </p>
                    <div className="flex flex-col space-y-4 text-start">
                        <div className="flex items-center space-x-3">
                            <button className="text-white bg-teal-500 w-10 h-10 rounded-full">1</button>
                            <p className={`text-xl  `} >Select a template from our collection.</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="text-white bg-teal-500 w-10 h-10 rounded-full">2</button>
                            <p className="text-xl ">Build your resume using our easy-to-use resume builder.</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="text-white bg-teal-500 w-10 h-10 rounded-full">3</button>
                            <p className="text-xl ">Download your resume.</p>
                        </div>
                    </div>
                    <Link to="/templates"> <button
                        onClick={handleSelectTemplate}
                        className="bg-teal-500 text-white py-2 px-6 rounded-full m-2 hover:bg-teal-600 transition mb-7"
                    >
                        Select Template
                    </button></Link>
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <img src={homeLogo} alt="home logo" className="my-4 w-2/4 md:w-full h-2/4" />
                   
                </div>
            </div>
            <Footer/>
        </>
    );
}
