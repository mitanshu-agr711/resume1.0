import { useContext } from 'react';
import PropTypes from 'prop-types'; 
import ResumeContext from '../context/resumeCreate.jsx';

const Theme2 = (props) => {
  const { componentRef, themeData = {} } = props; // Provide a default empty object for themeData
  const { personalData = {}, projectData = {}, workData = {}, awardData = {} } = themeData;

  // Destructure personalData with default values to avoid errors if any of the fields are missing
  const { name = '', address = '', phone = '', email = '', profile = '', profileImage = '', summary = '', skill = '' } = personalData;

  const { checkProj, checkWork, checkAward,...data } = useContext(ResumeContext);

  console.log(data);

  const { educationData = [] } = data;

  // Destructure projectData, educationData, workData, and awardData with default values
  const { projectTitles = {}, projectDesc = {} } = projectData;
  const { workTitles = {}, workDesc = {} } = workData;
  const { awards = '' } = awardData;

  return (
    <div ref={componentRef} id="section-to-print">
      <div id="theme2" className="p-12">
        <header className="flex justify-between items-center text-center my-4">
          <div className="info-text text-left">
            <h2 className="text-4xl font-bold mb-4">{name}</h2>
            <p className="text-xl font-medium mb-2">{profile}</p>
            <p className="text-sm w-full md:w-96 mb-2">{summary}</p>
          </div>
          <div className="mx-2 mb-4">
            <img id="resume-avatar" className="w-36 h-36 object-cover rounded-full" src={profileImage} alt="Profile" />
          </div>
        </header>
        <div className="border-t border-black w-full"></div>
        <div className="flex flex-col md:flex-row justify-between mt-6">
          <div className="w-full md:w-2/5">
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

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Skills</h3>
              <div className="flex flex-wrap">
                {skill.split(',').map((item, index) => (
                  <span key={index} className="inline-block bg-teal-200 text-teal-800 text-sm px-2 py-1 rounded-full m-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block border-l border-black mx-4"></div>

          <div className="w-full md:w-3/5">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Education</h3>
              {educationData.map((element, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-lg font-semibold">{element.title}</h4>
                  <p className="text-sm">{element.description}</p>
                </div>
              ))}
            </div>

            {!checkProj && (
              <div className="mb-6">
                <h3 className="text-2xl font-bold mt-6">Projects</h3>
                {Object.entries(projectTitles).map((element, index) => (
                  <div key={index} className="mt-4">
                    <h4 className="text-lg font-semibold">{element[1]}</h4>
                    <ul className="list-disc ml-6 text-sm">
                      {Object.entries(projectDesc)[index]?.[1]?.split(',').map((descItem, descIndex) => (
                        <li key={descIndex}>{descItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {!checkWork && (
              <div className="mb-6">
                <h3 className="text-2xl font-bold mt-6">Work Experience</h3>
                {Object.entries(workTitles).map((element, index) => (
                  <div key={index} className="mt-4">
                    <h4 className="text-lg font-semibold">{element[1]}</h4>
                    <ul className="list-disc ml-6 text-sm">
                      {Object.entries(workDesc)[index]?.[1]?.split(',').map((descItem, descIndex) => (
                        <li key={descIndex}>{descItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {!checkAward && (
              <div className="mb-6">
                <h3 className="text-2xl font-bold mt-6">Awards & Achievements</h3>
                <ul className="list-disc ml-6 text-sm">
                  {awards.split(',').map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme2;
