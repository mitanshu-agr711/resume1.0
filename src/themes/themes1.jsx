import  { useContext } from 'react'
import { ImLocation } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import ResumeContext from '../context/resumeCreate.jsx'
// import './themes2.jsx'
const Theme1 = (props) => {
    const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
    const { themeData, componentRef } = props;
    const { name, profile, address, phone, email, skill } = themeData.personalData;
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;

    return (
        <>
            <div id="section-to-print" ref={componentRef}>
                <div className="border border-gray-300 dark:border-white p-5" id="theme1">
                    <header id='info' className='text-center mt-4'>
                        <h2 className='text-4xl font-bold mb-4'>
                            {name}
                        </h2>
                        <p className='text-md text-gray-600 mb-4'>
                            <span className='mx-2 flex justify-center items-center'><ImLocation className='mr-1' />{address}</span>|
                            <span className='mx-2 flex justify-center items-center'><GrMail className='mr-1' />{email}</span>|
                            <span className='mx-2 flex justify-center items-center'><BsFillTelephoneFill className='mr-1' />{phone}</span>
                        </p>
                        <h3 className='text-xl font-semibold mt-2 mb-4'>
                            {profile}
                        </h3>
                    </header>
                    <section id="skills" className='my-4'>
                        <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 text-center">
                            TECHNICAL SKILLS
                        </h3>
                        <div id='skills-set' className='flex justify-center items-center my-2'>
                            <div className='flex flex-wrap gap-2'>
                                {
                                    skill.split(',').map((element, index) => (
                                        <span key={index} className="bg-teal-500 text-white px-3 py-1 rounded">
                                            {element}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </section>

     
                    {
                        !checkProj && (
                            <section id="projects" className='my-4'>
                                <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 text-center">
                                    PROJECTS
                                </h3>
                                <div id='project-set' className='my-2'>
                                    {
                                        Object.entries(projectTitles).map((element, index) => (
                                            <div key={index} className="mb-4">
                                                <h4 className="text-lg font-semibold">{element[1]}</h4>
                                                <ul className="list-disc list-inside text-gray-700">
                                                    {
                                                        projectDesc && projectDesc[index] && 
                                                        projectDesc[index].split(',').map((desc, i) => <li key={i}>{desc}</li>)
                                                    }
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>
                            </section>
                        )
                    }

                    <section id="education" className='my-4'>
                        <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 text-center">
                            EDUCATION
                        </h3>
                        <div id='education-set' className='my-2'>
                            {
                                Object.entries(educationTitles).map((element, index) => (
                                    <div key={index} className="mb-4">
                                        <h4 className="text-lg font-semibold">{element[1]}</h4>
                                        <ul className="list-disc list-inside text-gray-700">
                                            {
                                                educationDesc && educationDesc[index] &&
                                                educationDesc[index].split(',').map((desc, i) => <li key={i}>{desc}</li>)
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </section>

             
                    {
                        !checkWork && (
                            <section id="experience" className='my-4'>
                                <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 text-center">
                                    WORK EXPERIENCE
                                </h3>
                                <div id='experience-set' className='my-2'>
                                    {
                                        Object.entries(workTitles).map((element, index) => (
                                            <div key={index} className="mb-4">
                                                <h4 className="text-lg font-semibold">{element[1]}</h4>
                                                <ul className="list-disc list-inside text-gray-700">
                                                    {
                                                        workDesc && workDesc[index] &&
                                                        workDesc[index].split(',').map((desc, i) => <li key={i}>{desc}</li>)
                                                    }
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>
                            </section>
                        )
                    }

          
                    {
                        !checkAward && (
                            <section id="awards" className='my-4'>
                                <h3 className="text-xl font-bold bg-teal-200 py-2 px-4 text-center">
                                    AWARDS & ACHIEVEMENTS
                                </h3>
                                <div id='award-set' className='flex justify-center items-center my-2'>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {
                                            awards.split(',').map((element, index) => (
                                                <li key={index}>{element}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </section>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Theme1
