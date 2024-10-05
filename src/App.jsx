
import  { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import ResumeState from './context/resume.context.jsx';
import Navbar from './components/NavaBar/navbar.jsx';
import About from './pages/about.jsx';

function App() {
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
    if (colorMode === 'dark') {
      document.body.classList.add('bg-gray-800');
    } else {
      document.body.classList.remove('bg-gray-800');
    }
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
          <Route exact path="/about" element={<About colorMode={colorMode} />} /> {/* Pass colorMode here */}
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
