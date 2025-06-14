import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../context/resumeCreate.jsx";
import PropTypes from "prop-types";

const UserDataCollect = () => {
  const {
    // checkAward,
    // setCheckAward,
    educationData,
    setEducationData,
    projectData,
    setProjectData,
    work_experience,
    setwork_experience,
    award,
    setAwardData,
    themeData,
    setThemeData,
  } = useContext(ResumeContext) || {};

  const [personal_info, setpersonal_info] = useState({
    profileImage: "",
    name: "",
    summary: "",
    profile: "",
    address: "",
    phone: "",
    email: "",
    skill: "",
  });



  useEffect(() => {
    if (themeData) {
      setpersonal_info(themeData.personal_info || {});
      setProjectData(themeData.projectData || []);
      setEducationData(themeData.educationData || []);
      setAwardData(themeData.award || []);
      setwork_experience(Array.isArray(themeData.work_experience) ? themeData.work_experience : []);
    }
  }, [themeData]);


  const handleChangePersonal = (e) => {
    const { name, value, files } = e.target;
    let updatedPersonalInfo;
    if (name === "profileImage" && files && files[0]) {
      updatedPersonalInfo = {
        ...personal_info,
        profileImage: URL.createObjectURL(files[0]),
      };
    } else {
      updatedPersonalInfo = {
        ...personal_info,
        [name]: value,
      };
    }
    setpersonal_info(updatedPersonalInfo);
    setThemeData({
      ...themeData,
      personal_info: updatedPersonalInfo,
    });
  };

  // ===============================================================================================================================================
  // Work data handler
  const handleChangeWork = (e) => {
    const { name, value, id } = e.target;
    setwork_experience((prev) => {
      if (!Array.isArray(prev)) return [];
      const newArr = [...prev];
      const index = newArr.findIndex((item) => item.id === id);
      if (index !== -1) {
        if (name === "responsibilities") {
          newArr[index][name] = value ? value.split("\n") : [];
        } else {
          newArr[index][name] = value || "";
        }
      }
      return newArr;
    });
  };
  const handleWorkClick = (e) => {
    e.preventDefault();
    const id = `work${work_experience.length}`;
    setwork_experience((prev) => [
      ...(Array.isArray(prev) ? prev : []),
      { company: "", responsibilities: [], id }
    ]);
  };

  // ==================================================================================================================================================
  // Project data handler
  const handleChangeProject = (e) => {
    const { name, value, id } = e.target;
    setProjectData((prev) => {
      if (!Array.isArray(prev)) prev = [];
      const index = prev.findIndex((item) => item.id === id);
      if (index !== -1) {
        if (name === "description") {
          // FIX: Add null/undefined check before split
          prev[index].description = value ? value.split("\n") : [];
        } else if (name === "title") {
          prev[index].title = value || "";
        } else {
          prev[index][name] = value || "";
        }
      }
      return [...prev];
    });
  };
  const handleProjectClick = (e) => {
    e.preventDefault();
    const id = `project${projectData.length}`;
    setProjectData((prev) => [
      ...(Array.isArray(prev) ? prev : []),
      { title: "", description: [], id },
    ]);
  };

  // ====================================================================================================================================
  // Education data handler
  const handleChangeEducation = (e) => {
    const { name, value, id } = e.target;
    setEducationData((prev) => {
      if (!Array.isArray(prev)) return [];
      const newArr = [...prev];
      const index = newArr.findIndex((item) => item.id === id);
      if (index !== -1) {
        if (name === "description") {
          // FIX: Add null/undefined check before split
          newArr[index].description = value ? value.split("\n") : [];
        } else if (name === "title") {
          newArr[index].degree = value || "";
        } else {
          newArr[index][name] = value || "";
        }
      }
      return newArr;
    });
  };

  const handleEducationClick = (e) => {
    e.preventDefault();
    const id = `education${educationData.length}`;
    setEducationData((prev) => [
      ...(Array.isArray(prev) ? prev : []),
      { degree: "", description: [], id },
    ]);
  };

  // ===================================================================================================================================================
  // Add award section
  const handleChangeAwards = (e) => {
    const { value } = e.target;
    // FIX: Add null/undefined check before split
    setAwardData(value ? value.split("\n") : []);
  };

  ;
  // ==============================================================================================================================================
  return (
    <div className="min-w-1/3 mx-2 my-2 bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 space-y-5">
      {/* Personal Details */}
      <div className="mb-2 space-y-4">
        <h2 className="text-lg font-semibold">Personal Data</h2>
        <input
          type="text"
          name="name"
          value={personal_info.name || ""}
          onChange={handleChangePersonal}
          placeholder="Your Name"
          className="border rounded-md p-2 w-full text-black"
        />

        <textarea
          name="summary"
          value={personal_info.summary || ""}
          onChange={handleChangePersonal}
          placeholder="Your Summary"
          className="border rounded-md p-2 w-full text-black"
        />
        <input
          type="file"
          name="profileImage"
          onChange={handleChangePersonal}
          className="border rounded-md p-2 w-full text-black"
        />
        <input
          type="text"
          name="address"
          value={personal_info.address || ""}
          onChange={handleChangePersonal}
          placeholder="Address"
          className="border rounded-md p-2 w-full text-black"
        />
        <input
          type="text"
          name="phone"
          value={personal_info.phone || ""}
          onChange={handleChangePersonal}
          placeholder="Phone"
          className="border rounded-md p-2 w-full text-black"
        />
        <input
          type="email"
          name="email"
          value={personal_info.email || ""}
          onChange={handleChangePersonal}
          placeholder="Email"
          className="border rounded-md p-2 w-full text-black"
        />
        <input
          type="text"
          name="skill"
          value={personal_info.skill || ""}
          onChange={handleChangePersonal}
          placeholder="Your Skills (comma-separated)"
          className="border rounded-md p-2 w-full text-black"
        />
      </div>

      {/* =============================================================================================================================== */}
      {/* Projects */}
      <div className="mb-2 space-y-2">
        <h2 className="text-lg font-semibold">Projects</h2>
        {Array.isArray(projectData) && projectData.length > 0 ? (
          projectData.map((project, index) => (
            <div key={project.id} className="my-2">
              <input
                id={project.id}
                name="title"
                onChange={handleChangeProject}
                value={project.title || ""}
                type="text"
                placeholder="Enter Project Title"
                className="border rounded-md p-2 w-full text-black"
              />
              <textarea
                id={project.id}
                name="description"
                onChange={handleChangeProject}
                value={
                  Array.isArray(project.description)
                    ? project.description.join("\n")
                    : project.description || ""
                }
                placeholder="Enter Project Description"
                className="border rounded-md p-2 w-full text-black"
              />
            </div>
          ))
        ) : (
          <p>No projects to display</p>
        )}
        <button
          onClick={handleProjectClick}
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          Add Project
        </button>
      </div>
      {/* ============================================================================================================================================= */}
      {/* Education */}
      <div className="mb-2 space-y-2">
        <h2 className="text-lg font-semibold">Education</h2>
        {Array.isArray(educationData) && educationData.length > 0 ? (
          educationData.map((education, index) => (
            <div key={education.id} className="my-2">
              <input
                id={education.id}
                name="title"
                onChange={handleChangeEducation}
                value={education.degree || ""}
                type="text"
                placeholder="Institute Name"
                className="border rounded-md p-2 w-full text-black"
              />
              <textarea
                id={education.id}
                name="description"
                onChange={handleChangeEducation}
                value={
                  Array.isArray(education.description)
                    ? education.description.join("\n")
                    : education.description || ""
                }
                placeholder="Enter Education Description"
                className="border rounded-md p-2 w-full text-black"
              />
            </div>
          ))
        ) : (
          <p>No education data available</p>
        )}
        <button
          onClick={handleEducationClick}
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          Add Education
        </button>
      </div>
      {/* ==================================================================================================================================================== */}
      {/* Work Experience */}
      <div className="mb-2 space-y-2">
        <h2 className="text-lg font-semibold">Work Experience</h2>
        {Array.isArray(work_experience) && work_experience.length > 0 ? (
          work_experience.map((work, index) => (
            <div key={work.id} className="my-2">
              <input
                id={work.id}
                name="company"
                onChange={handleChangeWork}
                value={work.company || ""}
                type="text"
                placeholder="Enter Work Title"
                className="border rounded-md p-2 w-full text-black"
              />
              <textarea
                id={work.id}
                name="responsibilities"
                onChange={handleChangeWork}
                value={
                  Array.isArray(work.responsibilities)
                    ? work.responsibilities.join("\n")
                    : work.responsibilities || ""
                }
                placeholder="Enter Work Description"
                className="border rounded-md p-2 w-full text-black"
              />

            </div>
          ))
        ) : (
          <p>No work experience data available</p>
        )}
        <button
          onClick={handleWorkClick}
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          Add Work
        </button>
      </div>
      {/* ================================================================================================================================================= */}

      {/* Awards */}
      <div className="mb-2 space-y-2">
        <h2 className="text-lg font-semibold">Award</h2>
        <textarea
          onChange={handleChangeAwards}
          value={Array.isArray(award) ? award.join("\n") : award || ""}
          placeholder="Enter award points, each on a new line"
          className="border rounded-md p-2 w-full text-black"
        />
      </div>
    </div>
  );
};
// ===================================================================================================================================================

UserDataCollect.propTypes = {
  colorMode: PropTypes.string,
};

export default UserDataCollect;                