import { useContext, useEffect, useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import ResumeContext from '../../context/resumeCreate.jsx';

const UserDataCollect = ({colorMode}) => {
    const {
        themeData,
        checkAward,
        setCheckAward,
        checkProj,
        setCheckProj,
        setThemeData,
    } = useContext(ResumeContext);

    const [projectCount, setProjectCount] = useState(0);
    const [educationCount, setEducationCount] = useState(0);
    const [workCount, setWorkCount] = useState(0);
    const [projArrTemplate, setProjArrTemplate] = useState([]);
    const [educationArrTemplate, setEducationArrTemplate] = useState([]);
    const [workArrTemplate, setWorkArrTemplate] = useState([]);
    const [projectData, setProjectData] = useState({
        projectTitles: { pTitle1: 'Project Title ' },
        projectDesc: { pDescription1: 'Project Description are Shown here, with Bullet Points' },
    });
    const [educationData, setEducationData] = useState({
        educationTitles: { eTitle1: 'Education Title' },
        educationDesc: { eDescription1: 'Education Description are Shown here, with Bullet Points' },
    });
    const [workData, setWorkData] = useState({
        workTitles: { wTitle1: 'Work Title' },
        workDesc: { wDescription1: 'Work Description are Shown here, with Bullet Points' },
    });
    const [personalData, setPersonalData] = useState({
        profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Your Name',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        profile: 'Work Profile',
        address: 'Address Line',
        phone: 'Phone Number',
        email: 'Email Address',
        skill: 'Your, Skills, are, shown, here',
    });
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' });

    useEffect(() => {
        const updatedThemeData = {
            ...themeData,
            personalData,
            projectData,
            educationData,
            workData,
            awardData,
        };
        
        // Only update if the themeData has changed
        if (JSON.stringify(themeData) !== JSON.stringify(updatedThemeData)) {
            setThemeData(updatedThemeData);
        }
    }, [personalData, projectData, educationData, workData, awardData, setThemeData, themeData]);
    

    // Handler Functions
    const handleChangePersonal = (e) => {
        const { name, value } = e.target;
        setPersonalData((prev) => ({ ...prev, [name]: value }));

        if (name === 'profileImage') {
            const file = e.target.files[0];
            if (file) {
                setPersonalData((prev) => ({
                    ...prev,
                    profileImage: URL.createObjectURL(file),
                }));
                return () => URL.revokeObjectURL(profileImage); // Clean up the object URL
            }
        }
    };

    const handleChangeProject = (e) => {
        const { name, value, id } = e.target;
        setProjectData((prev) => {
            const updatedData = { ...prev };
            if (name.includes('pName')) {
                updatedData.projectTitles[id] = value;
            } else {
                updatedData.projectDesc[id] = value;
            }
            return updatedData;
        });
    };

    const handleProjectClick = (e) => {
        e.preventDefault();
        if (!checkProj) {
            const i = projectCount + 1;
            const template = (
                <div key={`project-${i}`} className="my-2">
                    <input
                        id={`pTitle${i}`}
                        name="pName"
                        onChange={handleChangeProject}
                        type="text"
                        placeholder="Enter Project Title"
                         className="border rounded-md p-2 w-full text-black"
                    />
                    <textarea
                        id={`pDescription${i}`}
                        name="pDescription"
                        onChange={handleChangeProject}
                        placeholder="Use comma to separate Description"
                         className="border rounded-md p-2 w-full text-black"
                    />
                </div>
            );

            setProjArrTemplate((prev) => [...prev, template]);
            setProjectCount(i);
        }
    };

    // Education Handlers
    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target;
        setEducationData((prev) => {
            const updatedData = { ...prev };
            if (name.includes('eName')) {
                updatedData.educationTitles[id] = value;
            } else {
                updatedData.educationDesc[id] = value;
            }
            return updatedData;
        });
    };

    const handleEducationClick = (e) => {
        e.preventDefault();
        const i = educationCount + 1;
        const template = (
            <div key={`education-${i}`} className="my-2">
                <input
                    id={`eTitle${i}`}
                    name="eName"
                    onChange={handleChangeEducation}
                    type="text"
                    placeholder="Enter Title"
                     className="border rounded-md p-2 w-full text-black"
                />
                <textarea
                    id={`eDescription${i}`}
                    name="eDescription"
                    onChange={handleChangeEducation}
                    placeholder="Use comma to separate Description"
                     className="border rounded-md p-2 w-full text-black"
                />
            </div>
        );

        setEducationArrTemplate((prev) => [...prev, template]);
        setEducationCount(i);
    };

    // Work Handlers
    const handleChangeWork = (e) => {
        const { name, value, id } = e.target;
        setWorkData((prev) => {
            const updatedData = { ...prev };
            if (name.includes('wName')) {
                updatedData.workTitles[id] = value;
            } else {
                updatedData.workDesc[id] = value;
            }
            return updatedData;
        });
    };

    const handleWorkClick = (e) => {
        e.preventDefault();
        const i = workCount + 1;
        const template = (
            <div key={`work-${i}`} className="my-2">
                <input
                    id={`wTitle${i}`}
                    name="wName"
                    onChange={handleChangeWork}
                    type="text"
                    placeholder="Enter Job Title"
                     className="border rounded-md p-2 w-full text-black"
                />
                <textarea
                    id={`wDescription${i}`}
                    name="wDescription"
                    onChange={handleChangeWork}
                    placeholder="Use comma to separate Description"
                     className="border rounded-md p-2 w-full text-black"
                />
            </div>
        );

        setWorkArrTemplate((prev) => [...prev, template]);
        setWorkCount(i);
    };

    // Awards Handler
    const handleChangeAwards = (e) => {
        const { name, value } = e.target;
        setAwardData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAwardClick = (e) => {
        e.preventDefault();
        if (!checkAward) {
            const awardInput = (
                <textarea
                    name="awards"
                    onChange={handleChangeAwards}
                    placeholder="Your Awards are shown here"
                     className="border rounded-md p-2 w-full text-black"
                />
            );
            setAwardData((prev) => ({ ...prev, awards: awardInput }));
            setCheckAward(true);
        }
    };

    return (
        <div className="min-w-1/3 mx-2 my-2">
        {/* Personal Details */}
        <div className="mb-2">
          <h2 className="text-lg font-semibold">Personal Data</h2>
          <input
            type="text"
            name="name"
            onChange={handleChangePersonal}
            placeholder="Your Name"
             className="border rounded-md p-2 w-full text-black"
          />
          <textarea
            name="summary"
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
            onChange={handleChangePersonal}
            placeholder="Address"
              className="border rounded-md p-2 w-full text-black"
          />
          <input
            type="text"
            name="phone"
            onChange={handleChangePersonal}
            placeholder="Phone"
              className="border rounded-md p-2 w-full text-black" 
          />
          <input
            type="email"
            name="email"
            onChange={handleChangePersonal}
            placeholder="Email"
              className="border rounded-md p-2 w-full text-black" 
          />
          <input
            type="text"
            name="skill"
            onChange={handleChangePersonal}
            placeholder="Your Skills"
             className="border rounded-md p-2 w-full text-black"
          />
        </div>
      
        {/* Projects */}
        <div className="mb-2">
          <h2 className="text-lg font-semibold">Projects</h2>
          {projArrTemplate}
          <button
            onClick={handleProjectClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Project
          </button>
        </div>
      
        {/* Education */}
        <div className="mb-2">
          <h2 className="text-lg font-semibold">Education</h2>
          {educationArrTemplate}
          <button
            onClick={handleEducationClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Education
          </button>
        </div>
      
        {/* Work Experience */}
        <div className="mb-2">
          <h2 className="text-lg font-semibold">Work Experience</h2>
          {workArrTemplate}
          <button
            onClick={handleWorkClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Work Experience
          </button>
        </div>
      
        {/* Awards */}
        <div className="mb-2">
          <h2 className="text-lg font-semibold">Awards</h2>
          <button
            onClick={handleAwardClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Award
          </button>
          {awardData.awards}
        </div>
      </div>
      
    );
};

export default UserDataCollect;
