/*=========================================================
 Author:     J. Orlando
 Date:       September 2026
 Description: Murder Mystery projects page
==========================================================*/
import { Link } from "react-router-dom";
//======Components===========================
import Header from "../header-footer/Header.jsx"
import Footer from "../header-footer/Footer.jsx";
import "./projectPageStyle.css"
//======Images/Files===========================
import placeholderLandscape from "../../assets/placeholderLandscape.png"


const P_MysteryApp = () => {

  return (
    <>
      <Header/>
      <div className="main-content">
        <h2 className="page-title">Murder Mystery Companions</h2>
        <div className="project_columns">
          <div className="project_left">

            <div className="projectTags">
                <span className="structureTag">HTML</span>

                <span/>

                <a target="_blank" rel="noopener external" href="https://github.com/quietlycreeping/Murder_Mystery">Repository: Christmas Mystery</a>
                <a target="_blank" rel="noopener external" href="https://quietlycreeping.github.io/Murder_Mystery/pages/characters/Santa/home">Santa's Site</a>
                <span/>
                <a target="_blank" rel="noopener external" href="https://github.com/quietlycreeping/MysteryCompanion_V2">Repository: Halloween Mystery</a>
                <a target="_blank" rel="noopener external" href="https://quietlycreeping.github.io/MysteryCompanion_V2/pages/characters/ursula/home.html">Ursula's Site</a>
            </div>
            <p className="projectDescriptor">
              Collaboration with <a id="textlink" target="_blank" rel="noopener external" href="https://www.emilyorlando.design/">Emily Orlando</a><br/><br/>
              These are two individual sites that followed the same template I created. The sites are currently separated by character
              These projects do have improvements and features that can be added. I am currently working on rewriting the project in React.
            </p>
          </div>

          <div className="photos_right">
              <img src={placeholderLandscape}/>
              <img src={placeholderLandscape}/>
              <img src={placeholderLandscape}/>
              <img src={placeholderLandscape}/>
          </div>
        </div>	
      </div>
      <Footer/>         
    </>
  )
}
export default P_MysteryApp