
import  { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import ResumeState from './context/resumeCreate.jsx';
import Navbar from './components/NavaBar/navbar.jsx';
import About from './pages/about.jsx';
import Home from './pages/Home/home.jsx';
import './index.css';

function App() {
  const [colorMode, setColorMode] = useState(() => {
   
    return localStorage.getItem('colorMode') || 'light';
  });

  useEffect(() => {
    if (colorMode === 'dark') {
      document.body.classList.add('bg-gray-800');
    } else {
      document.body.classList.remove('bg-gray-800');
    }
   
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
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
          <Route exact path="/theme1" element={<Home colorMode={colorMode} />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;


