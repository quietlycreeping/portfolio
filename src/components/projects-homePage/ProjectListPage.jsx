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
import Footer from "../header-footer/Footer.jsx";
import ProjectCard_Prop from "./ProjectCard_Prop.jsx";
//======Images===========================
import logo from "../../assets/logo.png"

const ProjectListPage = () => {
  const {screenSize} = useContext(ViewportContext);

  return (
    <>
      <Header/>
      <div className="main-content">
        <h1 className="page-title">△ Projects □ ○</h1>
        <ProjectCard_Prop 
          title="World's Tapestry" 
          image={logo} 
          body="body" 
          link="/about"/>
        <ProjectCard_Prop 
          title="Rx Dash" 
          image={logo} 
          body="body" 
          link="/about"/>
        <ProjectCard_Prop 
          title="Murder Mystery Companion" 
          image={logo} 
          body="body" 
          link="/about"/>
        <ProjectCard_Prop 
          title="This Site" 
          image={logo} 
          body="body" 
          link="/about"/>
      </div>
      <Footer/>         
    </>
  )
}

export default ProjectListPage