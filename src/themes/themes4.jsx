import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from "react-icons/fa";
import PropTypes from 'prop-types';

const Theme4 = ({ componentRef, themeData }) => {
  // Check if themeData is defined
  if (!themeData) {
      return <div>No data available</div>;
  }

  const { personalData, educationData, workData, projectData } = themeData;
  const { name, email, phone, address, summary = "Summary", skill = "", profile = "Work Profile" } = personalData;

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

      {/* Skills Section */}
      <div className="bg-blue-200 p-5 rounded-lg">
        <h2 className="text-xl mb-2">Skills</h2>
        <ul className="list-disc pl-5 mb-4 max-w-xs">
          {skill.split(",").map((item, index) => (
            <li key={index} className="text-lg mb-2">{item.trim()}</li>
          ))}
        </ul>

        {/* Education Section */}
        <h2 className="text-xl mb-2">Education</h2>
        {educationData?.educationTitles ? (
          Object.entries(educationData.educationTitles).map(([key, title], index) => (
            console.log("educationData", key),
            <div key={index}>
              <p className="font-bold">{title}</p>
              <p>{educationData.educationDesc[`eDescription${index + 1}`] || "No Description"}</p>
            </div>
          ))
        ) : (
          <p>No education data available</p>
        )}
      </div>

      {/* Professional Experience and Projects Section */}
      <div className="bg-white p-5 rounded-lg col-span-1 md:col-span-2">
        <h2 className="text-xl mb-2">Professional Experience</h2>
        {workData?.workTitles ? (
          Object.entries(workData.workTitles).map(([key, value], index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-1">{value}</h3>
              <ul className="list-disc pl-5 mb-4 max-w-xs">
                {workData.workDesc[`wDescription${index + 1}`]?.split(",").map((desc, idx) => (
                  <li key={idx} className="text-lg mb-2">{desc.trim()}</li>
                )) || "No descriptions available."}
              </ul>
            </div>
          ))
        ) : (
          <p>No work experience available</p>
        )}

        {/* Projects Section */}
        <h2 className="text-xl mb-2">Projects</h2>
        {projectData?.projectTitles ? (
          Object.entries(projectData.projectTitles).map(([key, value], index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-1">{value}</h3>
              <ul className="list-disc pl-5 mb-4 max-w-xs">
                {projectData.projectDesc[`pDescription${index + 1}`]?.split(",").map((desc, idx) => (
                  <li key={idx} className="text-lg mb-2">{desc.trim()}</li>
                )) || "No descriptions available."}
              </ul>
            </div>
          ))
        ) : (
          <p>No project data available</p>
        )}
      </div>
    </div>
  );
};

// Define prop types for the component
Theme4.propTypes = {
    componentRef: PropTypes.object,
    themeData: PropTypes.shape({
        personalData: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            summary: PropTypes.string,
            skill: PropTypes.string,
            profile: PropTypes.string
        }).isRequired,
        educationData: PropTypes.object.isRequired,
        workData: PropTypes.object.isRequired,
        projectData: PropTypes.object.isRequired
    }).isRequired
};

export default Theme4;