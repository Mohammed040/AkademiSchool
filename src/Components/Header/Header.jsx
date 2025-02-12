import { createContext, useState, useContext ,  useEffect } from "react";
import {useLocation} from "react-router-dom"


const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const  location = useLocation();
  const [pageTitle, setPageTitle] = useState("Dashboard");

  const getPageNameFromUrl = (path) => {
    const formattedName = path.replace("/","").replace("-"," ");
    return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
  }

  useEffect(()=>{
    if(location.pathname !== "/"){
      setPageTitle(getPageNameFromUrl(location.pathname))
    }
  },[location.pathname])

  return (
    <PageContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
