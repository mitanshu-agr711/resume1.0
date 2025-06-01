import { Helmet } from 'react-helmet';

const testimonials = [
    {
        name: 'Mitanshu Agrawal',
        role: 'Web Developer & Problem Solver',
        content:
            'A resume builder website is a web-based tool that allows users to create and customize a professional resume to their desired specifications. These websites typically provide templates for creating a resume.',
        avatar:
            './assets/miths.jpg',
    }
];

function TestimonialCard(props) {
    const { name, role, content, avatar } = props;
    return (
        <div className="flex flex-col md:flex-row max-w-2xl w-full rounded-xl p-10 shadow-lg bg-grey-200  pt-28 md:pt-32 pb-40 md:pb-28">
            <div className="flex flex-col justify-between text-left">
                <p className="text-sm font-medium pb-4">
                    {content}
                </p>
                <p className=" font-bold text-base">
                    {name}
                    <span className=" font-medium"> - {role}</span>
                </p>
            </div>
            <img
                src={avatar}
                alt={name}
                className="h-20 w-1/2 rounded-full self-center md:ml-12"
            />
        </div>
    );
}

export default function About({colorMode}) {
    return (
        <>
            <Helmet>
                <title>About Us - Resume Builder</title>
                <meta
                    name="description"
                    content="Learn more about the Resume Builder website and its mission to provide easy-to-use tools for creating professional resumes."
                />
                <meta
                    name="keywords"
                    content="resume builder, about us, mission, professional resumes, tools"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="About Us - Resume Builder" />
                <meta
                    property="og:description"
                    content="Learn more about the Resume Builder website and its mission to provide easy-to-use tools for creating professional resumes."
                />
            </Helmet>
            <div className={` pt-28 md:pt-32 pb-40 md:pb-28 flex flex-col items-center text-center py-10 w-full ${colorMode === 'light' ? 'text-blue-400' : 'text-white'}`}>
                <div className="w-full sm:max-w-lg lg:max-w-xl mx-auto">
                    <h3 className="font-bold text-teal-400 uppercase text-base">
                        People love us
                    </h3>
                    <h1 className={`py-5 text-4xl font-bold ${colorMode === 'light' ? 'text-black' : 'text-white'}`}>
                        Resume Builder
                    </h1>
                    <h2 className={` w-4/5 mx-auto ${colorMode === 'light' ? 'text-black' : 'text-gray-300'}`}>
                        Build the Resume That Gets You Hired!
                    </h2>
                </div>
                <div className={`grid grid-cols-1 gap-20 mt-16 mx-auto ${colorMode === 'light' ? 'text-black' : 'text-gray-300'}`}>
                    {testimonials.map((cardInfo, index) => (
                        <TestimonialCard {...cardInfo} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}
