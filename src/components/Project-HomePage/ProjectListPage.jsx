/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Homepage with various components
==========================================================*/
import { useContext } from "react";
//======Contexts===========================
import { ViewportContext } from "../../contexts/screenSizeContext";
//======Components===========================
import Header from "../header-footer/Header"

const ProjectListPage = () => {
  const {screenSize} = useContext(ViewportContext);

  return (
    <>
      <Header/>
      <div className="main-content">
        <p>
          Projects/Home Page here
          Screen Size: {screenSize}
        </p>
      </div>         
    </>
  )
}

export default ProjectListPage