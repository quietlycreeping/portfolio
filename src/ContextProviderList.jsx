/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Component that holds all the context providers
==========================================================*/
//======Contexts===========================
import ViewportContextProvider from "./contexts/screenSizeContext";

function ContextProviderList({ children }) {
  return (
    <>
        <ViewportContextProvider>
            {children}
        </ViewportContextProvider>
    </>
  );
}
export default ContextProviderList;