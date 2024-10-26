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
    const { selectedTemplateId, handlePrint, themeData } = useContext(ResumeContext);
    const navigate = useNavigate();

    const selectedTemplate = ThemeTemplateData.find((item) => item.id === selectedTemplateId);
    // console.log(useContext(ResumeContext)); // Add this in BuilderArea and UserDataCollect

    const handleSelectNewTemplate = () => {
        navigate('/templates');
    };
    // console.log("ye lo dekho ",UserDataCollect);
    return (
        <>
            
            <div className="flex flex-col md:flex-row justify-between mt-4 mx-2 space-y-4 md:space-y-0">
            

                
                <div className="w-full md:w-1/2 p-2 shadow-md">
                    <ErrorBoundary>
                        <UserDataCollect/>
                    </ErrorBoundary>

                </div>

              
                <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-md">
                    <ErrorBoundary>
                        {selectedTemplate
                            ? React.cloneElement(selectedTemplate.themeComponent, { themeData })
                            : "No template selected"}
                    </ErrorBoundary>
                </div>
            </div>

        
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
            <Footer />
        </>
    );
}

export default BuilderArea;
