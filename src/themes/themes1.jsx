import { useContext } from 'react';
import { ImLocation } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ResumeContext } from '../context/resumeCreate.jsx';


import { useReactToPrint } from 'react-to-print';

const Theme1 = () => {
  const { componentRef, themeData, educationData = [], projectData = [], work_experience = [], award = [] } = useContext(ResumeContext);


  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  if (!themeData || !themeData.personal_info) {
    return <div>Loading...</div>;
  }

  const { name, address, phone, email, profile, skill } = themeData?.personal_info || {};

  // FIX: Process skills from personal_info.skill
  const skillsArray = skill ? skill.split(',') : [];

  console.log(projectData);




  return (
    <>
      <div id="section-to-print" ref={componentRef} className="pt-28 md:pt-32 pb-40 md:pb-28">
        <header id='info' className='text-center mt-4'>
          <h2 className='text-4xl font-bold mb-4'>{name || 'Your Name'}</h2>
          <p className='text-md text-gray-600 mb-4'>
            <span className='mx-2 flex justify-center items-center'><ImLocation className='mr-1' />{address || 'Address'}</span>|
            <span className='mx-2 flex justify-center items-center'><GrMail className='mr-1' />{email || 'Email'}</span>|
            <span className='mx-2 flex justify-center items-center'><BsFillTelephoneFill className='mr-1' />{phone || 'Phone'}</span>
          </p>
          <h3 className='text-xl font-semibold mt-2 mb-4'>{profile || 'Work Profile'}</h3>
        </header>

        {/* Skills Section - FIX: Use processed skillsArray */}
        {skillsArray.length > 0 && (
          <section id="skills" className='my-4'>
            <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">TECHNICAL SKILLS</h3>
            <div id='skills-set' className='flex my-2'>
              <div className='flex flex-wrap gap-2'>
                {skillsArray.map((item, index) => (
                  <span key={index} className="inline-block bg-teal-200 text-teal-800 text-sm px-2 py-1 rounded-full m-1">
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section - FIX: Add proper null/undefined checks */}
        <section id="projects" className='my-4'>
          <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">PROJECTS</h3>
          <div id='project-set' className='my-2'>
            {Array.isArray(projectData) && projectData.length > 0 ? (
              projectData.map((project, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-lg font-semibold">{project?.title || 'Project Title'}</h4>
                  <ul className="list-disc ml-6 text-sm">
                    {(() => {
                      // FIX: Safely handle project description
                      if (!project?.description) return [<li key="0">No description available</li>];

                      const descriptions = Array.isArray(project.description)
                        ? project.description
                        : (typeof project.description === 'string' ? project.description.split(',') : []);

                      return descriptions.map((descItem, descIndex) => (
                        <li key={descIndex}>{descItem ? descItem.trim() : ''}</li>
                      ));
                    })()}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-600 mt-2 ml-4">No projects available.</p>
            )}
          </div>
        </section>


        {/* Education Section - FIX: Add proper null/undefined checks */}
        <section id="education" className='my-4'>
          <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">EDUCATION</h3>
          <div id='education-set' className='my-2'>
            {Array.isArray(educationData) && educationData.length > 0 ? (
              educationData.map((element, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-lg font-semibold">{element?.degree || 'Degree'}</h4>
                  <div className="text-sm">
                    {(() => {
                      // FIX: Safely handle education description
                      if (!element?.description) return <p>No description available</p>;

                      if (Array.isArray(element.description)) {
                        return (
                          <ul className="list-disc ml-6">
                            {element.description.map((desc, descIndex) => (
                              <li key={descIndex}>{desc || ''}</li>
                            ))}
                          </ul>
                        );
                      } else {
                        return <p>{element.description}</p>;
                      }
                    })()}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-600 mt-2 ml-4">No education details available.</p>
            )}
          </div>
        </section>


        {/* Work Experience Section - FIX: Add proper null/undefined checks */}
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


        {/* Awards Section - FIX: Add proper null/undefined checks */}
        <section id="awards" className='my-4'>
          <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">AWARDS & ACHIEVEMENTS</h3>
          <div id='award-set' className='flex my-2'>
            <ul className="list-disc ml-6 text-sm">
              {Array.isArray(award) && award.length > 0 ? (
                award.map((element, index) => (
                  <li key={index}>{element || ''}</li>
                ))
              ) : (
                <li className="text-gray-600">No awards available</li>
              )}
            </ul>
          </div>
        </section>
      </div>


    </>
  );
};

export default Theme1;