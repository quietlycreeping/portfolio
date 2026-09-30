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
import worldstapersty_title from "../../assets/WorldsTapestry/worldstapersty_title.png"
import rxdash_title from "../../assets/RxDash/rxdash_title.jpg"
import mystery_title from "../../assets/MurderMystery/mystery_title.jpg"
import portfolio_title from "../../assets/ThisSite/portfolio_title.jpg"



const ProjectListPage = () => {
  return (
    <>
      <Header/>
      <div className="main-content">
        <h1 className="page-title">{'\u2B21'} Projects {'\u25B3'}{'\u25FB'}</h1>
        <div id="projectList">
          <ProjectCard_Prop 
            title="World's Tapestry" 
            image={worldstapersty_title} 
            body="A community focused social media, forum website. It was a collaborative school group project with 5 group members." 
            link="/worlds-tapestry"
          />
          <ProjectCard_Prop 
            title="Rx Dash" 
            image={rxdash_title} 
            body="A time-management stimulation game. 
            The user is a lone pharmacy technician saddled with helping serve the patients of their community." 
            link="/rx-dash"
          />
          <ProjectCard_Prop 
            title="Murder Mystery Companion" 
            image={mystery_title} 
            body="Static websites meant to aid party guests during an in-person murder mystery game."

            link="/mystery-app"
          />
          <ProjectCard_Prop id="lastproject"
            title="This Site!" 
            image={portfolio_title} 
            body="This site where I have displayed all the projects I have coded." 
            link="/portfolio"
          />
          </div>
      </div>
      <Footer/>         
    </>
  )
}

export default ProjectListPage