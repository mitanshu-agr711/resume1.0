import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Introduction from "../../components/section/intro.jsx";
import ResumeContext from "../../context/resume.state.jsx";
import Theme1 from "../../themes/themes1.jsx";

const Home = () => {
  const { currentTheme, showComponent, themeData, componentRef } =
  useContext(ResumeContext);
  const navigate = useNavigate();

  if (showComponent) {
    switch (currentTheme) {
      case "Theme1":
        navigate("/Theme1");
        break;
      case "Theme2":
        navigate("/theme2");
        break;
      case "Theme3":
        navigate("/theme3");
        break;
      case "Theme4":
        navigate("/theme4");
        break;
      default:
        navigate("/error");
        break;
    }
  }

  return (
    <>
     <Introduction />
    </>
  );
};

export default Home;
