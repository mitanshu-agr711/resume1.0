import { useContext } from 'react';
import UserDataCollect from '../components/userDetails/userData.jsx';
import ResumeContext from '../context/resumeCreate.jsx';
import PropagateLoader from "react-spinners/PropagateLoader";
import { useNavigate } from 'react-router-dom'; 

const BuilderArea = (props) => {
    const { loading, handlePrint } = useContext(ResumeContext);
    const navigate = useNavigate(); 

    const handleSelectNewTemplate = () => {
        navigate('/templates'); // Navigate back to template selection
    };

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />} {/* Loader for loading state */}

            <div className="flex justify-between flex-wrap mt-4 mx-2">
                <UserDataCollect /> {/* Renders form for user data collection */}
                <div id='theme-box-border' className="border p-4 rounded-lg shadow-md">
                    {props.theme} {/* The selected theme is passed and rendered here */}
                </div>
            </div>
            
            <div className="flex flex-wrap justify-center mt-5">
                <button className='mx-2 px-4 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white' onClick={handlePrint}>Print</button>
                <button className='mx-2 px-4 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white' onClick={handleSelectNewTemplate}>Select Another Template</button>
            </div>
        </>
    );
}

export default BuilderArea;
