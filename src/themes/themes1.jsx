

import { useContext } from 'react';
import { ImLocation } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ResumeContext} from '../context/resumeCreate.jsx';


import { useReactToPrint } from 'react-to-print';

const Theme1 = () => {
  const { componentRef, themeData, educationData = [], projectData = [], workData = [], award = [] } = useContext(ResumeContext);

  console.log("componentRef:", componentRef.current);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  // Destructure personal data properties
  const { name, address, phone, email, profile, skill } = themeData?.personalData || {};

  return (
    <>
      <div id="section-to-print" ref={componentRef}>
        <header id='info' className='text-center mt-4'>
          <h2 className='text-4xl font-bold mb-4'>{name}</h2>
          <p className='text-md text-gray-600 mb-4'>
            <span className='mx-2 flex justify-center items-center'><ImLocation className='mr-1' />{address}</span>|
            <span className='mx-2 flex justify-center items-center'><GrMail className='mr-1' />{email}</span>|
            <span className='mx-2 flex justify-center items-center'><BsFillTelephoneFill className='mr-1' />{phone}</span>
          </p>
          <h3 className='text-xl font-semibold mt-2 mb-4'>{profile}</h3>
        </header>

        {/* Skills Section */}
        <section id="skills" className='my-4'>
          <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">TECHNICAL SKILLS</h3>
          <div id='skills-set' className='flex my-2'>
            <div className='flex flex-wrap gap-2'>
              {skill && skill.split(',').map((item, index) => (
                <span key={index} className="inline-block bg-teal-200 text-teal-800 text-sm px-2 py-1 rounded-full m-1">
                  {item.trim()}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className='my-4'>
          <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">PROJECTS</h3>
          <div id='project-set' className='my-2'>
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
        </section>

        {/* Education Section */}
        <section id="education" className='my-4'>
          <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">EDUCATION</h3>
          <div id='education-set' className='my-2'>
            {educationData.map((element, index) => (
              <div key={index} className="mt-4">
                <h4 className="text-lg font-semibold">{element.title}</h4>
                <p className="text-sm">{element.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className='my-4'>
          <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">WORK EXPERIENCE</h3>
          <div id='experience-set' className='my-2'>
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
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className='my-4'>
          <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 ">AWARDS & ACHIEVEMENTS</h3>
          <div id='award-set' className='flex my-2'>
            <ul className="list-disc ml-6 text-sm">
              {Array.isArray(award) && award.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      
    </>
  );
};

export default Theme1;
