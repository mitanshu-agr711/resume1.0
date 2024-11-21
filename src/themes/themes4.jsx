import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from "react-icons/fa";

import { useContext } from 'react';
import {ResumeContext} from '../context/resumeCreate.jsx';

const Theme4 = ({ componentRef}) => {
  // Check if themeData is defined
  const { themeData, educationData = [], projectData = [], workData = [] } = useContext(ResumeContext);

  // Destructure personal data properties
  const { name, address, phone, email, profile, summary, skill } = themeData.personalData;

  return (
    <div ref={componentRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 font-sans text-gray-800">
      <div className="bg-sky-400 p-5 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p className="flex items-center mb-2 max-w-xs">
          <FaEnvelope className="mr-2" />
          {email}
        </p>
        <p className="flex items-center mb-2 max-w-xs">
          <FaPhone className="mr-2" />
          {phone}
        </p>
        <p className="flex items-center mb-2 max-w-xs">
          <FaMapMarkerAlt className="mr-2" />
          {address}
        </p>
        <p className="flex items-center mb-2 max-w-xs">
          <FaBriefcase className="mr-2" />
          {profile}
        </p>
      </div>

      <div className="bg-blue-200 p-5 rounded-lg">
        <h2 className="text-xl mb-2">Professional Summary</h2>
        <p className="text-lg mb-2">{summary}</p>
      </div>
{/* =========================================================================================================== */}
      {/* Skills Section */}
      <div className="bg-blue-200 p-5 rounded-lg">
        <h2 className="text-xl mb-2">Skills</h2>
        <ul className="list-disc pl-5 mb-4 max-w-xs">
        {skill.split(',').map((item, index) => (
                  <span key={index} className="inline-block text-sm px-2 py-1 rounded-full m-1">
                    {item.trim()}
                  </span>
                ))}
        </ul>
{/* =============================================================================================================================================== */}
        {/* Education Section */}
        <h2 className="text-xl mb-2">Education</h2>
        <h3 className="text-2xl font-bold mb-2">Education</h3>
              {educationData.map((element, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-lg font-semibold">{element.title}</h4>
                  <p className="text-sm">{element.description}</p>
                </div>
              ))}
      </div>
{/* =============================================================================================================================================== */}
      {/* Professional Experience and Projects Section */}
      <div className="bg-white p-5 rounded-lg col-span-1 md:col-span-2">
      <h3 className="text-2xl font-bold mt-6">Work Experience</h3>
              {workData.map((work, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-lg font-semibold">{work.title}</h4>
                  <ul className="list-disc ml-6 text-sm">
                    {(Array.isArray(work.description) ? work.description : work.description.split(',')).map((descItem, descIndex) => (
                      <li key={descIndex}>{descItem.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}

{/* ================================================================================================================================================================= */}

        {/* Projects Section */}
        <h3 className="text-2xl font-bold mt-6">Projects</h3>
              {projectData.map((project, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <ul className="list-disc ml-6 text-sm">
                    {(Array.isArray(project.description) ? project.description : project.description.split(',')).map((descItem, descIndex) => (
                      <li key={descIndex}>{descItem.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
      </div>
    </div>
  );
};
// ====================================================================================================================================================


export default Theme4;