import { useContext } from 'react';
import UserDataCollect from '../components/userDetails/userData.jsx';
import ResumeContext from '../context/resumeCreate.jsx';
import PropagateLoader from "react-spinners/PropagateLoader";
import { useNavigate } from 'react-router-dom';
import ThemeTemplateData from '../collection/themes.jsx';


const BuilderArea = (props) => {
    const { loading, selectedTemplateId, handlePrint ,themeData } = useContext(ResumeContext);
    // console.log("Current selectedTemplateId:", selectedTemplateId);
    const navigate = useNavigate();

    // Find the selected template
    const selectedTemplate = ThemeTemplateData.find((item) => item.id === selectedTemplateId);
    console.log("Selected template object:", selectedTemplate);
    const handleSelectNewTemplate = () => {
        navigate('/templates'); // Navigate back to the templates page
    };

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />} 

            <div className="flex justify-between flex-wrap mt-4 mx-2">
                <UserDataCollect /> 
                <div id='theme-box-border' className="border p-4 rounded-lg shadow-md">
                    {selectedTemplate ? selectedTemplate.themeComponent : "No template selected"} 
                </div>
            </div>
            
            <div className="flex flex-wrap justify-center mt-5">
                <button 
                    className='mx-2 px-4 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white' 
                    onClick={handlePrint}
                >
                    Print
                </button>
                <button 
                    className='mx-2 px-4 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white' 
                    onClick={handleSelectNewTemplate}
                >
                    Select Another Template
                </button>
            </div>
        </>
    );
}

export default BuilderArea;
