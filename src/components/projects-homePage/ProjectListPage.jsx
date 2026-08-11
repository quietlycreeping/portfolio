/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Homepage with various components
==========================================================*/
import { useContext } from "react";
//======Components===========================
import Header from "../header-footer/Header.jsx"
import Footer from "../header-footer/Footer.jsx";
import ProjectCard_Prop from "./ProjectCard_Prop.jsx";
//======Images===========================
import placeholderLandscape from "../../assets/placeholderLandscape.png"

const ProjectListPage = () => {
  return (
    <>
      <Header/>
      <div className="main-content">
        <h1 className="page-title">{'\u2B21'} Projects {'\u25B3'}{'\u25FB'}</h1>
        <div id="projectList">
          <ProjectCard_Prop 
            title="World's Tapestry" 
            image={placeholderLandscape} 
            body="I've sailed the seven seas, and you're the sleekest schooner I've ever sighted. " 
            link="/worlds-tapestry"/>
          <ProjectCard_Prop 
            title="Rx Dash" 
            image={placeholderLandscape} 
            body="The average man will bristle if you say his father was dishonest, but he 
              will brag a little if he discovers that his great- grandfather was a pirate." 
            link="/about"/>
          <ProjectCard_Prop 
            title="Murder Mystery Companion" 
            image={placeholderLandscape} 
            body="Give me freedom or give me the rope. For I shall not take the shackles 
              that subjugate the poor to uphold the rich. " 
            link="/about"/>
          <ProjectCard_Prop id="lastproject"
            title="This Site!" 
            image={placeholderLandscape} 
            body="Land was created to provide a place for boats to visit." 
            link="/"/>
          </div>
      </div>
      <Footer/>         
    </>
  )
}

export default ProjectListPage