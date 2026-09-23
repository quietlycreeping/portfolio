/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Homepage with various components
==========================================================*/
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
            body="A community focused social media, forum website. It was a collaborative school group project with 5 group members." 
            link="/worlds-tapestry"
          />
          <ProjectCard_Prop 
            title="Rx Dash" 
            image={placeholderLandscape} 
            body="The average man will bristle if you say his father was dishonest, but he 
              will brag a little if he discovers that his great- grandfather was a pirate." 
            link="/about"
          />
          <ProjectCard_Prop 
            title="Murder Mystery Companion" 
            image={placeholderLandscape} 
            body="Static websites meant to aid party guests during an in-person murder mystery game. Personal project working personally with an art director."

            link="/about"
          />
          <ProjectCard_Prop id="lastproject"
            title="This Site!" 
            image={placeholderLandscape} 
            body="Land was created to provide a place for boats to visit." 
            link="/"
          />
          </div>
      </div>
      <Footer/>         
    </>
  )
}

export default ProjectListPage