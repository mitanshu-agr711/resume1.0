
import  { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import ResumeState from './context/resume.state.jsx';
import Navbar from './components/NavaBar/navbar.jsx';
import About from './pages/about.jsx';
import Home from './pages/Home/home.jsx';
import './index.css';
import Template from './themes/templates.jsx';
import Theme1 from "./themes/themes1.jsx"; 
import ThemeTemplateData from './collection/themes.jsx';
// import Theme2 from "./themes/Theme2.jsx"; 
// import Theme3 from "./themes/Theme3.jsx"; 
// import Theme4 from "./themes/Theme4.jsx";


  
  function App() {
    const [colorMode, setColorMode] = useState('light');
  
    useEffect(() => {
      // Apply/remove dark mode classes on the body
      document.body.classList.toggle('dark-mode', colorMode === 'dark');
    }, [colorMode]);
  
    const toggleColorMode = () => {
      setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };
  

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
          <Route exact path="/" element={<Home colorMode={colorMode} />} />
          <Route exact path="/about" element={<About colorMode={colorMode} />} />
          <Route exact path="/home" element={<Home colorMode={colorMode} />} />
          <Route
                    path="/Theme1"
                    element={<Theme1 themeData={ThemeTemplateData[0]} />} // Pass the appropriate data
                />
        {/* <Route path="/Theme2" element={<Theme2 />} />
        <Route path="/Theme3" element={<Theme3 />} />
        <Route path="/Theme4" element={<Theme4 />} /> */}
          <Route path="/templates" element={<Template/>} />

        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;


