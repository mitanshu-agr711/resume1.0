import  { useState, useEffect,useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import ResumeState from './context/resume.state.jsx';
import Navbar from './components/NavaBar/navbar.jsx';
import About from './pages/about.jsx';
// import Home from './pages/home/home.jsx'
import Intro from './components/section/intro.jsx'
import './index.css';
import Template from './themes/templates.jsx';
import Themes1 from "./themes/themes1.jsx"; 
import Build from "./pages/buildarea.jsx"

import  ResumeContext  from './context/resumeCreate.jsx';
// import Theme2 from "./themes/Theme2.jsx"; 
// import Theme3 from "./themes/Theme3.jsx"; 
// import Theme4 from "./themes/Theme4.jsx";
// const Theme1Wrapper = () => {
//   const { themeData } = useContext(ResumeContext); 
// // 
//   return <Themes1 themeData={themeData} />; 
// };

  
  function App() {
    const [colorMode, setColorMode] = useState('light');
  
    useEffect(() => {
     
      document.body.classList.toggle('dark-mode', colorMode === 'dark');
    }, [colorMode]);
  
    const toggleColorMode = () => {
      setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };
  
    // const { themeData } = useContext(ResumeContext); 

  return (
    <ResumeState>
      <div className={`App ${colorMode === 'light' ? 'bg-white' : 'bg-gray-800'} min-h-screen`}>
        <Helmet>
          <title>Resume Builder - Create Professional Resumes Online</title>
          <meta name="description" content="Build and customize professional resumes online with Resume Builder." />
          <meta name="keywords" content="resume builder, professional resumes, online resumes" />
          <meta name="author" content="Mitanshu Agrawal" />
        </Helmet>
        <Navbar toggleColorMode={toggleColorMode} colorMode={colorMode} />
        <Routes>
          <Route exact path="/" element={<Intro colorMode={colorMode} />} />
          <Route exact path="/about" element={<About colorMode={colorMode} />} />
          
          {/* <Route exact path="/home" element={<Home colorMode={colorMode} />} /> */}
          {/* <Route
                        path="/theme1"
                        element={<Theme1Wrapper />}
                    /> */}
        {/* <Route path="/Theme2" element={<Theme2 />} />
        <Route path="/Theme3" element={<Theme3 />} />
        <Route path="/Theme4" element={<Theme4 />} /> */}
          <Route path="/templates" element={<Template/>} />
      
          <Route path="/build" element={<Build/>} />
      

        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;


