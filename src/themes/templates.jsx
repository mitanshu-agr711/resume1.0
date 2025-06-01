import { useContext } from 'react';
import { ResumeContext } from '../context/resumeCreate.jsx';
import ThemeTemplateData from '../collection/themes.jsx';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer/footer.jsx';

const Template = () => {
  const { setSelectedTemplateId } = useContext(ResumeContext);
  const navigate = useNavigate();

  const handleSelectTemplate = (id) => {
    setSelectedTemplateId(id);
    console.log('Selected Template ID:', id);
    navigate('/autofill');
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4 min-h-screen pt-28 md:pt-32 pb-40 md:pb-28  ">
        <h1 className="font-bold text-3xl md:text-6xl leading-tight my-4">
          Select a <span className="text-teal-500">Template</span> from the list
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:w-9/12 ">
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
                className="w-full h-80 md:h-96 rounded-2xl shadow-2xl "
              />
            </div>
          ))}
        </div>


      </div>
      <Footer />
    </>
  );
};

export default Template;
