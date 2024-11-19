
// import  { createContext } from 'react';

// const ResumeContext = createContext();


// export default ResumeContext;
import { createContext, useRef } from 'react';

const ResumeContext = createContext();

const ResumeProvider = ({ children }) => {
  const componentRef = useRef(null);

  return (
    <ResumeContext.Provider value={{ componentRef }}>
      {children}
    </ResumeContext.Provider>
  );
};

export { ResumeContext, ResumeProvider };
