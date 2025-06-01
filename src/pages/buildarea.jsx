

import { useContext, useRef } from 'react';
import UserDataCollect from '../components/userDetails/userData.jsx';
import {ResumeContext} from '../context/resumeCreate.jsx';
import ErrorBoundary from './error.jsx';
import { useNavigate } from 'react-router-dom';
import ThemeTemplateData from '../collection/themes.jsx';
import React from 'react';
import Footer from '../components/footer/footer.jsx';
import { useReactToPrint } from 'react-to-print';

const BuilderArea = () => {
  const { selectedTemplateId, themeData } = useContext(ResumeContext);
  const navigate = useNavigate();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Resume',
  });

  const selectedTemplate = ThemeTemplateData.find((item) => item.id === selectedTemplateId);

  const handleSelectNewTemplate = () => {
    navigate('/templates');
  };

  return (
    <>
  
  <div className={`flex flex-col md:flex-row justify-between mt-4 mx-2 space-y-4 md:space-y-0 pb-24 transition-all duration-200 ${!selectedTemplate ? 'blur-sm pointer-events-none select-none' : ''}`}>
    <div className="w-full md:w-1/2 p-2 shadow-md">
      <ErrorBoundary>
        <UserDataCollect />
      </ErrorBoundary>
    </div>
    <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-md" ref={componentRef}>
      <ErrorBoundary>
        {selectedTemplate
          ? React.cloneElement(selectedTemplate.themeComponent, { themeData })
          : "No template selected"}
      </ErrorBoundary>
    </div>
  </div>

  
  {!selectedTemplate && (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-8 text-center border-2 border-teal-400">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">No template selected</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Please select a template to continue.
          </p>
          <button
            className="px-6 py-2 rounded bg-teal-500 text-white font-semibold hover:bg-teal-600"
            onClick={handleSelectNewTemplate}
          >
            Choose Template
          </button>
        </div>
      </div>
    </>
  )}

  
  <div className="flex flex-wrap justify-center mt-5">
    <button
      className="mx-2 px-4 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white mb-7"
      onClick={()=>handlePrint()}
    >
      Print
    </button>
    <button
      className="mx-2 px-4 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white mb-7"
      onClick={handleSelectNewTemplate}
    >
      Select Another Template
    </button>
  </div>
  <Footer />
</>
  );
};

export default BuilderArea;
