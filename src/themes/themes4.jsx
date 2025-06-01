import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { useContext } from 'react';
import { ResumeContext } from '../context/resumeCreate.jsx';

const Theme4 = ({ componentRef }) => {
  // Check if themeData is defined
  const { themeData, educationData = [], projectData = [], work_experience = [] } = useContext(ResumeContext);

  // Destructure personal data properties
  const { name, address, phone, email, profile, summary, skill } = themeData?.personal_info || {};

  return (
    <div ref={componentRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 font-sans text-gray-800 pt-28 md:pt-32 pb-40 md:pb-28">
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
      {Array.isArray(themeData.skills) && (
        <section id="skills" className='my-4'>
          <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">TECHNICAL SKILLS</h3>
          <div id='skills-set' className='flex my-2'>
            <div className='flex flex-wrap gap-2'>
              {themeData.skills.map((item, index) => (
                <span key={index} className="inline-block bg-teal-200 text-teal-800 text-sm px-2 py-1 rounded-full m-1">
                  {item.trim()}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* =============================================================================================================================================== */}
      {/* Education Section */}
      <section id="education" className='my-4'>
        <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">EDUCATION</h3>
        <div id='education-set' className='my-2'>
          {Array.isArray(educationData) && educationData.length > 0 ? (
            educationData.map((element, index) => (
              <div key={index} className="mt-4">
                <h4 className="text-lg font-semibold">{element.degree}</h4>
                <p className="text-sm">{element.description}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-600 mt-2 ml-4">No education details available.</p>
          )}
        </div>
      </section>
      {/* =============================================================================================================================================== */}
      {/* Professional Experience and Projects Section */}
      <section id="experience" className='my-4'>
  <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">WORK EXPERIENCE</h3>
  <div id='experience-set' className='my-2'>
    {Array.isArray(work_experience) && work_experience.length > 0 ? (
      work_experience.map((work, index) => (
        <div key={work.id} className="mt-4">
          <h4 className="text-lg font-semibold">{work.company || 'Company Name'}</h4>
          <ul className="list-disc ml-6 text-sm">
            {(Array.isArray(work.responsibilities) ? work.responsibilities : (work.responsibilities || '').split(',')).map((descItem, descIndex) => (
              <li key={descIndex}>{descItem.trim()}</li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <p className="text-sm text-gray-600 mt-2 ml-4">No work experience available.</p>
    )}
  </div>
</section>


      {/* ================================================================================================================================================================= */}
      {/* Projects Section */}
      <section id="projects" className='my-4'>
        <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">PROJECTS</h3>
        <div id='project-set' className='my-2'>
          {Array.isArray(projectData) && projectData.length > 0 ? (
            projectData.map((project, index) => (
              <div key={index} className="mt-4">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <ul className="list-disc ml-6 text-sm">
                  {(Array.isArray(project.description) ? project.description : project.description.split(',')).map((descItem, descIndex) => (
                    <li key={descIndex}>{descItem.trim()}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-600 mt-2 ml-4">No projects available.</p>
          )}
        </div>
      </section>
      {/* ==================================================================================================================================================== */}
    </div>
  );
};

export default Theme4;
