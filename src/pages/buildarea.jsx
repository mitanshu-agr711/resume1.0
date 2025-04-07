

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
      <div className="flex flex-col md:flex-row justify-between mt-4 mx-2 space-y-4 md:space-y-0 pb-24">
        <div className="w-full md:w-1/2 p-2 shadow-md">
          <ErrorBoundary>
            <UserDataCollect />
          </ErrorBoundary>
        </div>

        {/* Wrapper div for the content to print */}
        <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-md" ref={componentRef}>
          <ErrorBoundary>
            {selectedTemplate
              ? React.cloneElement(selectedTemplate.themeComponent, { themeData })
              : "No template selected"}
          </ErrorBoundary>
        </div>
      </div>

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
