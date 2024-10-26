import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import ResumeState from './context/resume.state.jsx';
import Navbar from './components/NavaBar/navbar.jsx';
import About from './pages/about.jsx';
import Intro from './components/section/intro.jsx';
import './index.css';
import Template from './themes/templates.jsx';
import Build from './pages/buildarea.jsx';

function App() {
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
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
          <Route exact path="/" element={<Intro colorMode={colorMode} />} />
          <Route exact path="/about" element={<About colorMode={colorMode} />} />
          <Route path="/templates" element={<Template />} />
          <Route path="/build" element={<Build />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
