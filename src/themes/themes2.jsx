import { useContext } from 'react';
import { ResumeContext } from '../context/resumeCreate.jsx';

const Theme2 = ({ componentRef }) => {
  const {
    themeData,
    educationData = [],
    projectData = [],
    work_experience = [],
    award = [],
  } = useContext(ResumeContext);

  if (!themeData || !themeData.personal_info) {
    return <div>Loading...</div>;
  }

  const { name, address, phone, email, profile } = themeData?.personal_info || {};
  // console.log('Theme2 component rendered with themeData:', themeData);
  // console.log('Theme2 component rendered with personal_info:', themeData?.personal_info);
  const { profileImage, skill = '', summary = '' } = themeData || {};
  const profileImageSrc = profileImage?.src || 'https://via.placeholder.com/150';

  return (
    <div ref={componentRef} id="section-to-print" className="pt-28 md:pt-32 pb-40 md:pb-28">
      <div id="theme2" className="p-12">
        <header className="flex justify-between items-center text-center my-4">
          <div className="info-text text-left">
            <h2 className="text-4xl font-bold mb-4">{name}</h2>
            <p className="text-xl font-medium mb-2">{profile}</p>
            <p className="text-sm w-full md:w-96 mb-2">{summary}</p>
          </div>
          <div className="mx-2 mb-4">
            <img
              id="resume-avatar"
              className="w-36 h-36 object-cover rounded-full"
              src={profileImageSrc}
              alt="Profile"
            />
          </div>
        </header>
        <div className="border-t border-black w-full"></div>

        <div className="flex flex-col md:flex-row justify-between mt-6">
          <div className="w-full md:w-2/5">
            {/* Contact */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Contact</h3>
              <div className="mt-3">
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-sm">{phone}</p>
                <h4 className="text-lg font-semibold mt-2">Email</h4>
                <p className="text-sm">{email}</p>
                <h4 className="text-lg font-semibold mt-2">Address</h4>
                <p className="text-sm w-48">{address}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Skills</h3>
              <div className="flex flex-wrap">
                {(skill || '').split(',').map((item, index) => (
                  <span
                    key={index}
                    className="inline-block bg-teal-200 text-teal-800 text-sm px-2 py-1 rounded-full m-1"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>
            
          </div>

          <div className="hidden md:block border-l border-black mx-4"></div>

          <div className="w-full md:w-3/5">
            {/* Education */}
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

            {/* Projects */}
            <section id="projects" className='my-4'>
              <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">PROJECTS</h3>
              <div id='projects-set' className='my-2'>
                {Array.isArray(projectData) && projectData.length > 0 ? (
                  projectData.map((project, index) => (
                    <div key={index} className="mt-4">
                      <h4 className="text-lg font-semibold">{project.title || project.name}</h4>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-600 mt-2 ml-4">No projects available.</p>
                )}
              </div>
            </section>
             

            {/* Work Experience */}
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

            {/* Awards */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mt-6">Awards & Achievements</h3>
              <ul className="list-disc ml-6 text-sm">
                {Array.isArray(award) &&
                  award.map((element, index) => <li key={index}>{element}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme2;
