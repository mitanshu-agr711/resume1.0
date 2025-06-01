import { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/footer/footer.jsx';

import { ResumeContext } from '../context/resumeCreate.jsx';
import { useNavigate } from 'react-router-dom';

const ResumeUpload = ({ colorMode }) => {
  const navigate = useNavigate();


  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dropActive, setDropActive] = useState(false);
  const fileInputRef = useRef(null);
  const { setThemeData } = useContext(ResumeContext);

  const handleFileDrop = (e) => {
    e.preventDefault();
    setDropActive(false);

    if (e.dataTransfer.files.length > 0) {
      const selectedFiles = Array.from(e.dataTransfer.files);
      setFiles(selectedFiles);
      startUpload(selectedFiles);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      startUpload(selectedFiles);
    }
  };


  const clearFiles = () => {
    setFiles([]);
    setUploading(false);
    setProgress(0);
  };


  const startUpload = (fileList) => {
    if (!fileList || fileList.length === 0) return;

    setUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;

        if (newProgress >= 100) {
          clearInterval(interval);
          setUploading(false);
          setProcessing(true);

          const formData = new FormData();
          formData.append('file', fileList[0]);

          fetch('https://resume-parser-c3t2.onrender.com/parse-resume/', {
            method: 'POST',
            body: formData,
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
              }
              return res.json();
            })
            .then((data) => {
              setProcessing(false);
              setThemeData(data);
              navigate('/build');
            })
            .catch((err) => {
              console.error('Error parsing resume:', err);
              setProcessing(false);

              if (err.message.includes('422')) {
                alert("The resume couldn't be processed. Please check that it's a valid PDF file and try again.");
              } else {
                alert("Failed to parse the resume. Try again.");
              }
            });
        }

        return newProgress;
      });
    }, 300);
  };





  return (
    <section id="file-upload" className={`page-section min-h-screen py-10 px-4 ${colorMode === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upload Your Resume</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Drag and drop your resume file or click to browse. We support PDF, DOCX, JPG, and PNG formats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center justify-center">
          <div className="order-2 md:order-1">
            <div
              className={`border-2 border-dashed rounded-lg p-8 h-80 flex flex-col items-center justify-center text-center ${dropActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDropActive(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                setDropActive(false);
              }}
              onDrop={handleFileDrop}
            >
              {!uploading && !processing && files.length === 0 && (
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-lg font-medium text-gray-700 mb-2">Drag & Drop your resume here</p>
                  <p className="text-sm text-gray-500 mb-4">Or click to browse files</p>
                  <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
                    Browse Files
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileSelect}
                      ref={fileInputRef}
                    />
                  </label>
                  <button
                      onClick={() => navigate('/build')}
                      className="mt-2 w-full text-center px-3 py-1 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700"
                    >
                      Build Without Resume
                    </button>
                  <p className="mt-2 text-xs text-gray-500">Supported formats: PDF, DOCX, JPG, PNG</p>
                </div>
              )}

              {!uploading && !processing && files.length > 0 && (
                <div className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    {files.length} file{files.length > 1 ? 's' : ''} ready
                  </p>
                  <div className="flex justify-center gap-3 mt-4">
                    <button
                      onClick={clearFiles}
                      className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                      Clear
                    </button>
                    <button
                      onClick={startUpload}
                      className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Upload
                    </button>
                   
                  </div>
                </div>
              )}

              {uploading && (
                <div className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mx-auto mb-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-lg font-medium text-gray-700 mb-2">Uploading...</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">{progress}% Complete</p>
                </div>
              )}

              {processing && (
                <div className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mx-auto mb-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <p className="text-lg font-medium text-gray-700 mb-2">Processing your resume...</p>
                  <p className="text-sm text-gray-500">We're extracting all the important information</p>
                </div>
              )}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold text-blue-800">Tips for Best Results</h3>
              </div>
              <ul className="text-sm text-blue-700 space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Ensure your resume is clearly formatted with section headings
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  PDF format typically yields the most accurate results
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  File size should be under 5MB for optimal processing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
ResumeUpload.propTypes = {
  colorMode: PropTypes.string.isRequired
};

export default ResumeUpload;

