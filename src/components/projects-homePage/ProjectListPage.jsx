/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Homepage with various components
==========================================================*/
import { useContext } from "react";
//======Contexts===========================
import {ViewportContext} from "../../contexts/ViewportContext.jsx"
//======Components===========================
import Header from "../header-footer/Header.jsx"

const ProjectListPage = () => {
  const {screenSize} = useContext(ViewportContext);

  return (
    <>
      <Header/>
      <div className="main-content">
        <h1>heading</h1>
        <h2>subheading</h2>
        <p>body</p>
        <p>
          Projects/Home Page here
          Screen Size: {screenSize}
        </p>
      </div>         
    </>
  )
}

export default ProjectListPage