import  { useContext } from "react";
import {ResumeContext} from '../context/resumeCreate.jsx';
// import "./theme3.css";

const Theme3 = ({ componentRef }) => {
  const { themeData, educationData = [],   work_experience = [], award=[] } = useContext(ResumeContext);

  // Destructure personal data properties
  const { name, address, phone, email, profile,  summary, skill } =  themeData?.personal_info || {};
  // console.log("descr  ",project.description)


  return (
    <div id="section-to-print" ref={componentRef}>
      <div id="theme3" className="p-10 px-20">
        <header
          id="info"
          className="text-center flex justify-between items-center"
        >
          <div className="info-text text-start mb-6">
            <h2 className="text-3xl text-red-800 font-serif mb-2">{name}</h2>
            <p className="font-semibold text-md mt-1 mb-2 font-serif">{profile}</p>
            <div>
              <div className="mt-3">
                <p className="w-48 font-serif text-sm">{address}</p>
                <p className="text-sm font-serif">{phone}</p>
                <p className="text-sm font-serif">{email}</p>
              </div>
            </div>
          </div>
        </header>
        <div className="border w-full my-2"></div>
        <section className="mt-3">
          <section className="sections">
            <div className="flex w-full my-4">
              <h3 className="text-md font-serif min-w-[175px]">Summary</h3>
              <div className="ml-6">
                <p className="text-sm summary-text">{summary}</p>
              </div>
            </div>

   {/* ====================================================================================================================         */}
                <div className="border w-full my-2"></div>
                <div className="flex w-full my-4">
                  <h3 className="text-md font-serif min-w-[175px]">Experience</h3>
                  <div className="ml-6 w-full">
                    {/* <p className="text-sm summary-text"> */}
                    {  work_experience.map((work, index) => (
                <div key={index} >
                  <h4 className="text-lg font-semibold">{work.title}</h4>
                  <ul className="list-disc ml-6 text-sm">
                    {(Array.isArray(work.description) ? work.description : work.description.split(',')).map((descItem, descIndex) => (
                      <li key={descIndex}>{descItem.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
                    {/* </p> */}
                  </div>
                </div>
             
{/* ============================================================================================================================================================= */}
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
{/* ============================================================================================================================== */}
                {/* <div className="border w-full my-2"></div>
                <div className="flex w-full my-4">
                  <h3 className="text-md font-serif min-w-[175px]">Projects</h3>
                  <div className="ml-6 w-full">
                    <p className="text-sm">
                      {Object.entries(projectTitles).map((element, index) => {
                        return (
                          <div key={index} className="mt-1">
                            <h4 className="text-md font-serif my-2">{element[1]}</h4>
                            <div className="sub-details">
                              {Object.entries(projectDesc)[index] === undefined
                                ? null
                                : Object.entries(projectDesc)[index][1].split(",").map((descItem, index) => {
                                    return <li key={index}>{descItem}</li>;
                                  })}
                            </div>
                          </div>
                        );
                      })}
                    </p>
                  </div>
                </div> */}
             
{/* ============================================================================================================================================= */}
            <div className="border w-full my-2"></div>

            <div className="flex w-full my-4">
              <h3 className="text-md font-serif min-w-[175px]">Skills</h3>
              <div className="ml-6 w-full">
                <div className="grid grid-cols-2 gap-5">
                  {skill.split(",").map((item, index) => {
                    return (
                      <div key={index} className="flex items-center">
                        <div className="bg-black w-1.5 h-1.5 rounded-full"></div>
                        <p className="mx-1 text-gray-500 font-serif">{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mt-6">Awards & Achievements</h3>
              <ul className="list-disc ml-6 text-sm">
                {Array.isArray(award) && award.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Theme3;
