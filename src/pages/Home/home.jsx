import { useContext } from "react";
import Introduction from "../../components/section/intro.jsx";
import ResumeContext from "../../context/resumeCreate.jsx";
import BuilderArea from "../buildarea.jsx";
import Theme1 from "../../themes/themes1.jsx";
// import Theme2 from "../../themes/themes2.jsx";
// import Theme3 from "../../themes/themes3.jsx";
// import Theme4 from "../../themes/themes4.jsx";

// import ErrorPage from "../Error/ErrorPage";

const Home = () => {
  const { currentTheme, themeData, componentRef } = useContext(ResumeContext);

  const renderTheme = () => {
    switch (currentTheme) {
      case "Theme1":
        return <Theme1 componentRef={componentRef} themeData={themeData} />;
      // case "Theme2":
      //   return <Theme2 componentRef={componentRef} themeData={themeData} />;
      // case "Theme3":
      //   return <Theme3 componentRef={componentRef} themeData={themeData} />;
      // case "Theme4":
      //   return <Theme4 componentRef={componentRef} themeData={themeData} />;
      
      default:
        return <Introduction />;
    }
  };

  return (
    <>
      <BuilderArea theme={renderTheme()} />
    </>
  );
};

export default Home;
