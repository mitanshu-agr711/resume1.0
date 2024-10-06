import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Introduction from "../../components/section/intro.jsx";
import ResumeContext from "../../context/resumeCreate.jsx";

const Home = () => {
  const { showComponent } = useContext(ResumeContext);
  const navigate = useNavigate();
  const templates = [
    { id: "Theme1", name: "Template 1" },
    { id: "Theme2", name: "Template 2" },
    { id: "Theme3", name: "Template 3" },
    { id: "Theme4", name: "Template 4" },
  ];


  const handleTemplateClick = (templateId) => {
    navigate(`/${templateId}`);
  };

  return (
    <>
      <Introduction />
      <h2>Select a Template</h2>
   
      <div>
        {templates.map((template) => (
          <button key={template.id} onClick={() => handleTemplateClick(template.id)}>
            {template.name}
          </button>
        ))}
      </div>

     
      {showComponent && (
        <div>
       {}
        </div>
      )}
    </>
  );
};

export default Home;