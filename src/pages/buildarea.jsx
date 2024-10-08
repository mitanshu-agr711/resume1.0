import  { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
// import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const BuilderArea = (props) => {
    const { loading, handlePrint } = useContext(ResumeContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSelectNewTemplate = () => {
        navigate('/templates'); // Navigate to the templates page
    };

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

            <div className="flex justify-between flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border' className="border p-4 rounded-lg shadow-md">
                    {props.theme}
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-5">
                <Button className='mx-2' colorScheme={'teal'} variant={'outline'} onClick={handlePrint}>Print</Button>
                <Button className='mx-2' colorScheme={'teal'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
            </div>
            <Footer />
        </>
    );
}

export default BuilderArea;
