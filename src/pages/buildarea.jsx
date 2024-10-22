import { useContext } from 'react';
import UserDataCollect from '../components/userDetails/userData.jsx';
import ResumeContext from '../context/resumeCreate.jsx';
// import PropagateLoader from "react-spinners/PropagateLoader";
import ErrorBoundary from './error.jsx';
import { useNavigate } from 'react-router-dom';
import ThemeTemplateData from '../collection/themes.jsx';
import React from 'react';
import Footer from '../components/footer/footer.jsx';

const BuilderArea = (props) => {
    const { loading, selectedTemplateId, handlePrint, themeData } = useContext(ResumeContext);
    const navigate = useNavigate();

    const selectedTemplate = ThemeTemplateData.find((item) => item.id === selectedTemplateId);

    const handleSelectNewTemplate = () => {
        navigate('/templates');
    };

    return (
        <>
            {/* {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <PropagateLoader color="#319795" size={30} />
                </div>
            )} */}

            {/* Main Flex Container */}
            <div className="flex flex-col md:flex-row justify-between mt-4 mx-2 space-y-4 md:space-y-0">

                {/* UserDataCollect takes half the width */}
                <div className="w-full md:w-1/2 p-2">
                    <UserDataCollect />
                </div>

                {/* Template preview takes the other half */}
                <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-md">
                <ErrorBoundary>
                    {selectedTemplate
                        ? React.cloneElement(selectedTemplate.themeComponent, { themeData })
                        : "No template selected"}
                        </ErrorBoundary>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-wrap justify-center mt-5">
                <button 
                    className="mx-2 px-4 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white" 
                    onClick={handlePrint}
                >
                    Print
                </button>
                <button 
                    className="mx-2 px-4 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white" 
                    onClick={handleSelectNewTemplate}
                >
                    Select Another Template
                </button>
            </div>
            <Footer/>
        </>
    );
}

export default BuilderArea;
