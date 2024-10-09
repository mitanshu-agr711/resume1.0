import { useContext } from "react";
import Introduction from "../../components/section/intro.jsx";
import ResumeContext from "../../context/resumeCreate.jsx";
import BuilderArea from "../buildarea.jsx";
import Theme1 from "../../Theme/Theme1/Theme1";
// import Theme2 from "../../Theme/Theme2/Theme2";
// import Theme3 from "../../Theme/Theme3/Theme3";
// import Theme4 from "../../Theme/Theme4/theme4";
// import ErrorPage from "../Error/ErrorPage";

const Home = () => {
  const { selectedTemplateId } = useContext(ResumeContext); 

  const renderTheme = () => {
    switch (selectedTemplateId) {
      case "Theme1":
        return <BuilderArea theme={<Theme1 />} />;
      // case "Theme2":
      //   return <BuilderArea theme={<Theme2 />} />;
      // case "Theme3":
      //   return <BuilderArea theme={<Theme3 />} />;
      // case "Theme4":
      //   return <BuilderArea theme={<Theme4 />} />;
      // default:
      //   return <ErrorPage />; // Handle error or unknown themes
    }
  };

  return (
    <>
      {selectedTemplateId ? renderTheme() : <Introduction />} {/* Renders Introduction if no template is selected */}
    </>
  );
};

export default Home;
