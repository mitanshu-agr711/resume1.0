import React, { useContext, useEffect, useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import ResumeContext from '../../context/resumeCreate.jsx';

const UserDataCollect = () => {
    const { themeData, checkAward, setCheckAward, checkProj, setCheckProj, setThemeData } = useContext(ResumeContext);

    const [projectCount, setProjectCount] = useState(0);
    const [educationCount, setEducationCount] = useState(0);
    const [workCount, setWorkCount] = useState(0);
    const [projArrTemplate, setProjArrTemplate] = useState([]);
    const [educationArrTemplate, setEducationArrTemplate] = useState([]);
    const [workArrTemplate, setWorkArrTemplate] = useState([]);
    const [projectData, setProjectData] = useState({
        'projectTitles': { pTitle1: "Project Title " },
        'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" }
    });
    const [educationData, setEducationData] = useState({
        'educationTitles': { eTitle1: "Education Title" },
        'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" }
    });
    const [workData, setWorkData] = useState({
        'workTitles': { wTitle1: "Work Title" },
        'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" }
    });
    const [personalData, setPersonalData] = useState({
        profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
        name: "Your Name",
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        profile: "Work Profile",
        address: "Address Line",
        phone: "Phone Number",
        email: "Email Address",
        skill: 'Your, Skills, are, shown, here',
    });
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' });

    // Handler Functions
    const handleChangePersonal = (e) => {
        const { name, value } = e.target;
        setPersonalData((prev) => ({ ...prev, [name]: value }));

        if (e.target.name === 'profileImage') {
            setPersonalData((prev) => ({ ...prev, profileImage: URL.createObjectURL(e.target.files[0]) }));
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
        setThemeData((prev) => ({ ...prev, projectData }));
    };

    const handleProjectClick = (e) => {
        e.preventDefault();
        if (!checkProj) {
            const i = projectCount + 1;
            const template = (
                <div key={`project-${i}`} className="my-2">
                    <input
                        id={`pTitle${i}`}
                        name='pName'
                        onChange={handleChangeProject}
                        type='text'
                        placeholder='Enter Project Title'
                        className="border rounded-md p-2 w-full"
                    />
                    <textarea
                        id={`pDescription${i}`}
                        name='pDescription'
                        onChange={handleChangeProject}
                        placeholder='Use comma to separate Description'
                        className="border rounded-md p-2 w-full my-2"
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
                    name='eName'
                    onChange={handleChangeEducation}
                    type='text'
                    placeholder='Enter Title'
                    className="border rounded-md p-2 w-full"
                />
                <textarea
                    id={`eDescription${i}`}
                    name='eDescription'
                    onChange={handleChangeEducation}
                    placeholder='Use comma to separate Description'
                    className="border rounded-md p-2 w-full my-2"
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
                    name='wName'
                    onChange={handleChangeWork}
                    type='text'
                    placeholder='Enter Job Title'
                    className="border rounded-md p-2 w-full"
                />
                <textarea
                    id={`wDescription${i}`}
                    name='wDescription'
                    onChange={handleChangeWork}
                    placeholder='Use comma to separate Description'
                    className="border rounded-md p-2 w-full my-2"
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
                    name='awards'
                    onChange={handleChangeAwards}
                    placeholder='Your Awards are shown here'
                    className="border rounded-md p-2 w-full my-2"
                />
            );
            setAwardData((prev) => ({ ...prev, awards: awardInput }));
            setCheckAward(true);
        };

        useEffect(() => {
            setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData });
        }, [themeData, personalData, setThemeData, projectData, educationData, workData, awardData]);

        return (
            <div className="min-w-1/3 mx-2 my-2">
                {/* Personal Details Area */}
                <div className='mb-2'>
                    <h4 className='text-lg font-semibold mb-2'>Personal Details</h4>
                    <hr />
                    <div className='my-2'>
                        <div className='relative flex justify-center items-center'>
                            <label htmlFor='input-file' className='cursor-pointer border rounded-md border-gray-300 bg-white text-gray-800 p-4 flex justify-center items-center w-full'>
                                <IoMdCloudUpload size={30} />
                                Select a file
                            </label>
                            <input accept="image/*" name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' className='hidden' />
                            <img className="h-14 rounded-md mx-2" src={personalData.profileImage} alt="your profile preview" />
                        </div>
                    </div>
                    <input
                        name='name'
                        onChange={handleChangePersonal}
                        type='text'
                        placeholder='Your Name'
                        className="border rounded-md p-2 w-full my-2"
                    />
                    <input
                        name='summary'
                        onChange={handleChangePersonal}
                        type='text'
                        placeholder='Your Summary'
                        className="border rounded-md p-2 w-full my-2"
                    />
                    <input
                        name='profile'
                        onChange={handleChangePersonal}
                        type='text'
                        placeholder='Work Profile'
                        className="border rounded-md p-2 w-full my-2"
                    />
                    <input
                        name='address'
                        onChange={handleChangePersonal}
                        type='text'
                        placeholder='Address'
                        className="border rounded-md p-2 w-full my-2"
                    />
                    <input
                        name='phone'
                        onChange={handleChangePersonal}
                        type='text'
                        placeholder='Phone Number'
                        className="border rounded-md p-2 w-full my-2"
                    />
                    <input
                        name='email'
                        onChange={handleChangePersonal}
                        type='text'
                        placeholder='Email Address'
                        className="border rounded-md p-2 w-full my-2"
                    />
                    <input
                        name='skill'
                        onChange={handleChangePersonal}
                        type='text'
                        placeholder='Skills'
                        className="border rounded-md p-2 w-full my-2"
                    />
                </div>

                {/* Projects Area */}
                <div className='mb-2'>
                    <h4 className='text-lg font-semibold mb-2'>Projects</h4>
                    <hr />
                    <button onClick={handleProjectClick} className='bg-blue-500 text-white p-2 rounded-md'>
                        Add Project
                    </button>
                    {projArrTemplate.map((item) => item)}
                </div>

                {/* Education Area */}
                <div className='mb-2'>
                    <h4 className='text-lg font-semibold mb-2'>Education</h4>
                    <hr />
                    <button onClick={handleEducationClick} className='bg-blue-500 text-white p-2 rounded-md'>
                        Add Education
                    </button>
                    {educationArrTemplate.map((item) => item)}
                </div>

                {/* Work Area */}
                <div className='mb-2'>
                    <h4 className='text-lg font-semibold mb-2'>Work</h4>
                    <hr />
                    <button onClick={handleWorkClick} className='bg-blue-500 text-white p-2 rounded-md'>
                        Add Work
                    </button>
                    {workArrTemplate.map((item) => item)}
                </div>

                {/* Awards Area */}
                <div className='mb-2'>
                    <h4 className='text-lg font-semibold mb-2'>Awards</h4>
                    <hr />
                    <button onClick={handleAwardClick} className='bg-blue-500 text-white p-2 rounded-md'>
                        Add Awards
                    </button>
                    <div className="mt-2">
                        {awardData.awards}
                    </div>
                </div>
            </div>
        );
    };
}
    export default UserDataCollect;
