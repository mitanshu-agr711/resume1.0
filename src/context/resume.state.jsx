import {ResumeContext} from "./resumeCreate.jsx";
import { useState, useRef,useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import PropTypes from "prop-types";
const ResumeState = (props) => {
  const componentRef = useRef();

  const [loading, setLoading] = useState(false);

  console.log("componentRef", componentRef);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    onBeforePrint: () => {
      setLoading(true);
    },
    onAfterPrint: () => {
      setLoading(false);
    },
  });

  const [colorMode, setColorMode] = useState(() => {
    return localStorage.getItem('colorMode') || 'light'; // Load from localStorage
  });

  useEffect(() => {
    if (colorMode === 'dark') {
      document.body.classList.add('bg-gray-800');
    } else {
      document.body.classList.remove('bg-gray-800');
    }
    localStorage.setItem('colorMode', colorMode); // Save the selected mode
  }, [colorMode]);

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  const initialData = {
    personalData: {
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNI3kQLeYMnpy05PhEiuzS1rtRmNVL7VKvwcE4ACmQSQT1rRmUO5mHLyjH-mGHq0ueUQY&usqp=CAU",
      name: "Your Name",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      profile: "Work Profile",
      address: "Address Line",
      phone: "Phone Number",
      email: "Email Address",
      skill: "Your, Skills, are, shown, here",
    },
    projectData: {
      projectTitles: { pTitle1: "Project Title 1" },
      projectDesc: { pDescription1: "Project Description 1" },
    },
    educationData: {
      educationTitles: { eTitle1: "Education Title 1" },
      educationDesc: { eDescription1: "Education Description 1" },
    },
    workData: {
      workTitles: { wTitle1: "Work Title 1" },
      workDesc: { wDescription1: "Work Description 1" },
    },
    awardData: {
      awards: "Certificate of Appreciation - 2019, Certificate of Appreciation - 2018",
    },
  };


  const [themeData, setThemeData] = useState(initialData);
  const [checkProj, setCheckProj] = useState(false);
  const [checkWork, setCheckWork] = useState(false);
  const [checkAward, setCheckAward] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("Theme1");
  const [selectBtn, setSelectBtn] = useState(true);
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [educationData, setEducationData] = useState([]);
  const [projectData,setProjectData]=useState([]);
  const [workData,setWorkData]=useState([]);
  const [award,setAwardData]=useState([]);


  const contextValue = {
    initialData,
    selectBtn,
    setSelectBtn,
    checkAward,
    setCheckAward,
    componentRef,
    handlePrint,
    currentTheme,
    setCurrentTheme,
    showComponent,
    setShowComponent,
    loading,
    themeData,
    setThemeData,
    checkProj,
    checkWork,
    setCheckProj,
    setCheckWork,
    colorMode, 
    toggleColorMode, 
    selectedTemplateId, 
    setSelectedTemplateId,
    educationData,
    setEducationData,
    projectData,
    setProjectData,
    workData,
    setWorkData,
    award,
    setAwardData
  };
  return (
    <ResumeContext.Provider value={contextValue}>
      {props.children}
      {loading && <div>Loading...</div>} 
    </ResumeContext.Provider>
  );
};
ResumeState.propTypes = {
  children: PropTypes.node.isRequired, 
};
export default ResumeState;