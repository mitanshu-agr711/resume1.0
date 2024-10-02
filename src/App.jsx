import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ResumeState from './context/resume.context.jsx';
// import Home from './Pages/Home/Home';
import Navbar from './components/NavaBar/navbar.jsx';
import About from './pages/about.jsx';

function App() {
  return (
    <ResumeState>
      <div className="App">
        <Helmet>
          <title>Resume Builder - Create Professional Resumes Online</title>
          <meta name="description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
          <meta name="keywords" content="resume builder, professional resumes, online resumes, resume templates" />
          <meta name="author" content="Mitanshu Agrawal" />
        </Helmet>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} /> */}
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
