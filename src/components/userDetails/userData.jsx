import { useContext, useEffect, useState } from 'react';
import ResumeContext from '../../context/resumeCreate.jsx';

const UserDataCollect = ({ colorMode }) => {
    const {
        themeData,
        checkAward,
        setCheckAward,
        setThemeData,
        educationData,
        setEducationData,
    } = useContext(ResumeContext);


    console.log('Theme Data---:', useContext(ResumeContext));

    const [projectCount, setProjectCount] = useState(0);
    const [projArrTemplate, setProjArrTemplate] = useState([]);

    const [projectData, setProjectData] = useState({});
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
    const [awardData, setAwardData] = useState({ awards: '' });

    // Update themeData whenever substate changes
    useEffect(() => {
        setThemeData((prev) => ({
            ...prev,
            personalData,
            projectData,
            educationData,
            awardData,
        }));
    }, [personalData, projectData, educationData, awardData]);

    useEffect(() => {
        console.log('education Data:', educationData);
    }, [educationData]);

    useEffect(() => {
        console.log('project Data:', projectData);
    }, [projectData]);

    useEffect(() => {
        console.log("Personal Data:", personalData);
    }, [personalData]);

    useEffect(() => {
        console.log("Award Data:", awardData);
    }, [awardData]);
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

    // Project data handler
    const handleChangeProject = (e) => {
        const { name, value } = e.target;
        const id = e.target.id; 

        setProjectData((prev) => ({
            // ...prev,
            [id]: {
                ...prev[id], 
                [name]: value,
            },
        }));
    };

    // Education data handler
    const handleChangeEducation = (e) => {
        const { name, value } = e.target;
        const id = e.target.id; 

        setEducationData((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            prev[index][name] = value;
            return [...prev];
        });

    };

    // Add new project template
    const handleProjectClick = (e) => {
        e.preventDefault();
        const i = projectCount + 1;

        // Update project data state
        setProjectData((prev) => ({
            ...prev,
            [`project${i}`]: { title: '', description: '' }
        }));

        // Create a new input template
        const template = (
            <div key={`project-${i}`} className="my-2">
                <input
                    id={`project${i}`}
                    name="title"
                    onChange={handleChangeProject}
                    value={projectData[`project${i}`]?.title || ''}
                    type="text"
                    placeholder="Enter Project Title"
                    className="border rounded-md p-2 w-full text-black"
                />
                <textarea
                    id={`project${i}`}
                    name="description"
                    onChange={handleChangeProject}
                    value={projectData[`project${i}`]?.description || ''}
                    placeholder="Enter Project Description"
                    className="border rounded-md p-2 w-full text-black"
                />
            </div>
        );

        setProjArrTemplate((prev) => [...prev, template]);
        setProjectCount(i);
    };

    // Add new education template
    const handleEducationClick = (e) => {
        e.preventDefault();

        const id = `education${educationData.length}`;


        // Update education data state
        setEducationData((prev) => [
            ...prev,
            { title: '', description: '' , id},
        ]);

    };

    // Add award section
    const handleAwardClick = (e) => {
        e.preventDefault();
        if (!checkAward) {
            setCheckAward(true);
        }
    };

    // Award data handler
    const handleChangeAwards = (e) => {
        const { name, value } = e.target;
        setAwardData((prev) => ({ ...prev, [name]: value }));
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
                    placeholder="Your Skills (comma-separated)"
                    className="border rounded-md p-2 w-full text-black"
                />
            </div>

            {/* Projects */}
            <div className="mb-2">
                <h2 className="text-lg font-semibold">Projects</h2>
                {projArrTemplate}
                <button
                    onClick={handleProjectClick}
                    className="bg-blue-500 text-white p-2 rounded">
                    Add Project
                </button>
            </div>

            {/* Education */}
            <div className="mb-2">
                <h2 className="text-lg font-semibold">Education</h2>
                {
                    educationData.map((education, index) => {
                        return (
                            <div key={index} className="my-2">
                                <input
                                    id={`education${index}`}
                                    name="title"
                                    onChange={(e) => handleChangeEducation(e,education.id)}
                                    value={education.title || ''}
                                    type="text"
                                    placeholder="Enter Education Title"
                                    className="border rounded-md p-2 w-full text-black"
                                />
                                <textarea
                                    id={`education${index}`}
                                    name="description"
                                    onChange={handleChangeEducation}
                                    value={education.description || ''}
                                    placeholder="Enter Education Description"
                                    className="border rounded-md p-2 w-full text-black"
                                />
                            </div>
                        );
                    })
                }
                <button
                    onClick={handleEducationClick}
                    className="bg-blue-500 text-white p-2 rounded">
                    Add Education
                </button>
            </div>

            {/* Awards */}
            <div className="mb-2">
                <h2 className="text-lg font-semibold">Awards</h2>
                {checkAward ? (
                    <textarea
                        name="awards"
                        onChange={handleChangeAwards}
                        placeholder="Your Awards"
                        className="border rounded-md p-2 w-full text-black"
                    />
                ) : (
                    <button
                        onClick={handleAwardClick}
                        className="bg-blue-500 text-white p-2 rounded">
                        Add Award
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserDataCollect;