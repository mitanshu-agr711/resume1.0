import { useContext, useEffect, useState } from 'react';
import {ResumeContext} from '../../context/resumeCreate.jsx';

const UserDataCollect = ({ colorMode }) => {
    const {
        checkAward,
        setCheckAward,
        setThemeData,
        educationData,
        setEducationData,
        projectData,
        setProjectData,
        workData,
        setWorkData,
        award,
        setAwardData,
    } = useContext(ResumeContext);

    // console.log('Theme Data---:', useContext(ResumeContext));

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

    // Update themeData whenever substate changes
    useEffect(() => {
        setThemeData((prev) => ({
            ...prev,
            personalData,
            projectData,
            educationData,
            workData,
            award,
        }));
    }, [personalData, projectData, educationData, award, workData]);

    // useEffect(() => {
    //     console.log('education Data:', educationData);
    // }, [educationData]);

    // useEffect(() => {
    //     console.log('project Data:', projectData);
    // }, [projectData]);

    // useEffect(() => {
    //     console.log("Personal Data:", personalData);
    // }, [personalData]);

    // useEffect(() => {
    //     console.log("Award Data:", award);
    // }, [award]);

    // Personal data handler
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
                return () => URL.revokeObjectURL(prev.profileImage); // Clean up object URL
            }
        }
    };
    // ===============================================================================================================================================
    // Work data handler
    const handleChangeWork = (e) => {
        const { name, value } = e.target;
        const id = e.target.id;

        setWorkData((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            if (name === 'description') {
                prev[index][name] = value.split('\n'); // Split description into lines
            } else {
                prev[index][name] = value;
            }
            return [...prev];
        });
    };

    const handleWorkClick = (e) => {
        e.preventDefault();
        const id = `work${workData.length}`;
        setWorkData((prev) => [
            ...prev,
            { title: '', description: '', id },
        ]);
    };
    // ==================================================================================================================================================
    // Project data handler
    const handleChangeProject = (e) => {
        const { name, value } = e.target;
        const id = e.target.id;

        setProjectData((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            if (name === 'description') {
                prev[index][name] = value.split('\n'); // Split description into lines
            } else {
                prev[index][name] = value;
            }
            return [...prev];
        });
    };

    const handleProjectClick = (e) => {
        e.preventDefault();
        const id = `project${projectData.length}`;
        setProjectData((prev) => [
            ...prev,
            { title: '', description: '', id },
        ]);
    };

    // ====================================================================================================================================
    // Education data handler
    const handleChangeEducation = (e) => {
        const { name, value } = e.target;
        const id = e.target.id;

        setEducationData((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            if (name === 'description') {
                prev[index][name] = value.split('\n'); // Split description into lines
            } else {
                prev[index][name] = value;
            }
            return [...prev];
        });
    };

    const handleEducationClick = (e) => {
        e.preventDefault();
        const id = `education${educationData.length}`;
        setEducationData((prev) => [
            ...prev,
            { title: '', description: '', id },
        ]);
    };
    // ===================================================================================================================================================
    // Add award section
    const handleChangeAwards = (e) => {
        const { value } = e.target;
        setAwardData(value.split('\n')); // Split lines into bullet points
    };

    const handleAwardClick = (e) => {
        e.preventDefault();
        if (!checkAward) {
            setCheckAward(true);
        }
    };
    // ==============================================================================================================================================
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
                    placeholder="Your Skills (comma-separated)"
                    className="border rounded-md p-2 w-full text-black"
                />
            </div>

            {/* =============================================================================================================================== */}
            {/* Projects */}
            <div className="mb-2">
                <h2 className="text-lg font-semibold">Projects</h2>
                {projectData.map((project, index) => (
                    <div key={index} className="my-2">
                        <input
                            id={`project${index}`}
                            name="title"
                            onChange={(e) => handleChangeProject(e, project.id)}
                            value={project.title || ''}
                            type="text"
                            placeholder="Enter Project Title"
                            className="border rounded-md p-2 w-full text-black"
                        />
                        <textarea
                            id={`project${index}`}
                            name="description"
                            onChange={(e) => handleChangeProject(e, project.id)}
                            value={project.description ? project.description.join('\n') : ''}
                            placeholder="Enter Project Description"
                            className="border rounded-md p-2 w-full text-black"
                        />
        
                    </div>
                ))}
                <button
                    onClick={handleProjectClick}
                    className="bg-blue-500 text-white p-2 rounded">
                    Add Project
                </button>
            </div>
            {/* =============================================================================================================================================            */}
            {/* Education */}
            <div className="mb-2">
                <h2 className="text-lg font-semibold">Education</h2>
                {educationData.map((education, index) => (
                    <div key={index} className="my-2">
                        <input
                            id={`education${index}`}
                            name="title"
                            onChange={(e) => handleChangeEducation(e, education.id)}
                            value={education.title || ''}
                            type="text"
                            placeholder="Enter Education Title"
                            className="border rounded-md p-2 w-full text-black"
                        />
                        <textarea
                            id={`education${index}`}
                            name="description"
                            onChange={handleChangeEducation}
                            value={education.description ? education.description.join('\n') : ''}
                            placeholder="Enter Education Description"
                            className="border rounded-md p-2 w-full text-black"
                        />
                    </div>
                ))}
                <button
                    onClick={handleEducationClick}
                    className="bg-blue-500 text-white p-2 rounded">
                    Add Education
                </button>
            </div>
            {/* ====================================================================================================================================================            */}
            {/* Work Experience */}
            <div className="mb-2">
                <h2 className="text-lg font-semibold">Work Experience</h2>
                {workData.map((work, index) => (
                    <div key={index} className="my-2">
                        <input
                            id={`work${index}`}
                            name="title"
                            onChange={(e) => handleChangeWork(e, work.id)}
                            value={work.title || ''}
                            type="text"
                            placeholder="Enter Work Title"
                            className="border rounded-md p-2 w-full text-black"
                        />
                        <textarea
                            id={`work${index}`}
                            name="description"
                            onChange={(e) => handleChangeWork(e, work.id)}
                            value={work.description ? work.description.join('\n') : ''}
                            placeholder="Enter Work Description"
                            className="border rounded-md p-2 w-full text-black"
                        />
                    </div>
                ))}
                <button
                    onClick={handleWorkClick}
                    className="bg-blue-500 text-white p-2 rounded">
                    Add Work
                </button>
            </div>
            {/* ================================================================================================================================================= */}

            {/* Awards */}
            <div className="mb-2">
                <h2 className="text-lg font-semibold">Award</h2>
                <textarea
                    onChange={handleChangeAwards}
                    value={Array.isArray(award) ? award.join('\n') : ''} 
                    placeholder="Enter award points, each on a new line"
                    className="border rounded-md p-2 w-full text-black"
                />
                <button
                    onClick={handleAwardClick}
                    className="bg-blue-500 text-white p-2 rounded">
                    Add Award Section
                </button>
            </div>
        </div>
    );
};
// ===================================================================================================================================================

export default UserDataCollect;
