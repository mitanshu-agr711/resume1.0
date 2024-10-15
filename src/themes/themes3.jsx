import React, { useContext } from "react";
import ResumeContext from '../context/resumeCreate.jsx';
// import "./theme3.css";

const Theme3 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, summary, skill } =
    themeData.personalData;

  const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;

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

            {!checkWork && (
              <>
                <div className="border w-full my-2"></div>
                <div className="flex w-full my-4">
                  <h3 className="text-md font-serif min-w-[175px]">Experience</h3>
                  <div className="ml-6 w-full">
                    <p className="text-sm summary-text">
                      {Object.entries(workTitles).map((element, index) => {
                        return (
                          <div key={index} className="mt-1">
                            <h4 className="text-md font-serif my-2">{element[1]}</h4>
                            {Object.entries(workDesc)[index] === undefined
                              ? null
                              : Object.entries(workDesc)[index][1].split(",").map((descItem, index) => {
                                  return <p key={index}>{descItem}</p>;
                                })}
                          </div>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </>
            )}

            <div className="border w-full my-2"></div>

            <div className="flex w-full my-4">
              <h3 className="text-md font-serif min-w-[175px]">Education</h3>
              <div className="ml-6 w-full">
                <p className="text-sm">
                  {Object.entries(educationTitles).map((element, index) => {
                    return (
                      <div key={index} className="mb-4">
                        <h4 className="text-md font-serif mb-2">{element[1]}</h4>
                        {Object.entries(educationDesc)[index] === undefined
                          ? null
                          : Object.entries(educationDesc)[index][1].split(",").map((descItem, index) => {
                              return <p key={index}>{descItem}</p>;
                            })}
                      </div>
                    );
                  })}
                </p>
              </div>
            </div>

            {!checkProj && (
              <>
                <div className="border w-full my-2"></div>
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
                </div>
              </>
            )}

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

            {!checkAward && (
              <>
                <div className="border w-full my-2"></div>
                <div className="flex w-full my-4">
                  <h3 className="text-md font-serif min-w-[175px]">Achievements</h3>
                  <div className="ml-6 w-full">
                    <div className="grid grid-cols-2 gap-5">
                      {awards.split(",").map((item, index) => {
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
              </>
            )}
          </section>
        </section>
      </div>
    </div>
  );
};

export default Theme3;
