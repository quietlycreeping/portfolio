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

    const screenWidth = document.querySelector("#width");

    const handleScreenResize = () => {
        if (screenWidth <= 480)
            setScreenSize("small");
        else
            setScreenSize("large");}

    useEffect(() => {
        handleScreenResize;
    }, []);

    window.onresize = handleScreenResize;


    return (
    <ViewportContext.Provider value={screenSize}>
        {children}
    </ViewportContext.Provider>
    );
}
export default ViewportContextProvider;