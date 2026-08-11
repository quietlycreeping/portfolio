/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Screen size context to manage and determine if
            user screen size is mobile or tablet/desktop
            screenSize = "small" or "large"
==========================================================*/
import { useState, useContext, createContext, useEffect, Children } from 'react';

//====== Screen Size Context ===========================
export const ViewportContext = createContext();

const ViewportContextProvider = ({children}) => { 
    const [screenSize, setScreenSize] = useState();

    const handleResize = () => {
        if (window.innerWidth <= 702)
            setScreenSize("small"); 
        else
            setScreenSize("large");
        };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

  //----- EXPORTED VALUES ---------------------------------
    const value = {
        screenSize
    };

    return (
    <ViewportContext.Provider value={value}>
        {children}
    </ViewportContext.Provider>
    );
}
export default ViewportContextProvider;