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
import AutoFill from './themes/AutoFill.jsx';
import { AuroraBackground } from "./components/ui/background.jsx";
import { motion } from "framer-motion";

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
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <Navbar toggleColorMode={toggleColorMode} colorMode={colorMode} />
            <Routes>
              <Route exact path="/" element={<Intro colorMode={colorMode} />} />
              <Route exact path="/about" element={<About colorMode={colorMode} />} />
              <Route path="/templates" element={<Template colorMode={colorMode} />} />
              <Route path="/build" element={<Build colorMode={colorMode} />} />
              <Route path="/autofill" element={<AutoFill colorMode={colorMode} />} />
            </Routes>

          </motion.div>
        </AuroraBackground>
      </div>
    </ResumeState>
  );
}

export default App;
