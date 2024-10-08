import { Link } from 'react-router-dom';
import ThemeTemplateData from '../collection/themes.jsx';
// imoprt Link from 'react-router-dom';

const Template = () => {

    const handleSelectTemplate = (id) => {
        console.log(`/${id}`);
        return <Link to={`/${id}`} />;
    }

    return (
        <>
         <div className="flex flex-col items-center space-y-4">
            <div>
                <h1 className="font-bold text-3xl md:text-6xl leading-tight my-4">
                    Select a
                    <span className="text-teal-500"> Template </span>
                    from the list
                </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-lg md:max-w-2xl">
                {ThemeTemplateData.map((item, index) => (
                    <div
                        key={index}
                        className="template cursor-pointer"
                        onClick={() => handleSelectTemplate(item.id)}
                       
                    >
                        <img
                            id={item.id}
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className="w-full h-auto rounded shadow-md"
                        />
                    </div>
                ))}
           </div> 
         </div>
        </>
    );
};

export default Template;