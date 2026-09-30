/*=========================================================
 Author:     J. Orlando
 Date:       September 2026
 Description: My Portfolio project page
==========================================================*/
import { Link } from "react-router-dom";
//======Components===========================
import Header from "../header-footer/Header.jsx"
import Footer from "../header-footer/Footer.jsx";
import "./projectPageStyle.css"
//======Images/Files===========================
import placeholderLandscape from "../../assets/placeholderLandscape.png"


const P_MyPortfolio = () => {

  return (
    <>
      <Header/>
      <div className="main-content">
        <h2 className="page-title">My Portfolio/This Site</h2>
        <div className="project_columns">
          <p className="projectDescriptor">
            This site where I have displayed and linked all the projects I have coded. 
          </p>

          <div className="projectTags">
            <span className="structureTag">ReactJS</span>
            <span className="structureTag">Vite</span>

            <br/><br/>

            <a target="_blank" rel="noopener external" href="https://github.com/quietlycreeping/portfolio">Repository</a>
          </div>
        </div>
      </div>	
      <Footer/>         
    </>
  )
}
export default P_MyPortfolio