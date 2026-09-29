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
import mystery_1 from "../../assets/MurderMystery/mystery_1.jpg"
import mystery_2 from "../../assets/MurderMystery/mystery_2.jpg"
import mystery_3 from "../../assets/MurderMystery/mystery_3.jpg"
import mystery_4 from "../../assets/MurderMystery/mystery_4.jpg"


const P_MysteryApp = () => {

  return (
    <>
      <Header/>
      <div className="main-content">
        <h2 className="page-title">Murder Mystery Companions</h2>
        <div className="project_columns">
          <p className="projectDescriptor">
            Collaboration with <a id="textlink" target="_blank" rel="noopener external" href="https://www.emilyorlando.design/">Emily Orlando</a><br/><br/>
            These are two individual sites that followed the same template I created. The sites are currently separated by character.
            These projects do have improvements and features that can be added. I am currently working on rewriting the project in React with a database.
          </p>

          <div className="projectTags">
              <span className="structureTag">HTML</span>

              <br/><br/>

              <a target="_blank" rel="noopener external" href="https://github.com/quietlycreeping/Murder_Mystery">Repository: Christmas Mystery</a>
              <a target="_blank" rel="noopener external" href="https://quietlycreeping.github.io/Murder_Mystery/pages/characters/Santa/home">Santa's Site</a>
              <br/><br/>
              <a target="_blank" rel="noopener external" href="https://github.com/quietlycreeping/MysteryCompanion_V2">Repository: Halloween Mystery</a>
              <a target="_blank" rel="noopener external" href="https://quietlycreeping.github.io/MysteryCompanion_V2/pages/characters/ursula/home.html">Ursula's Site</a>
          </div>
        </div>

        <div className="photos_bottom">
          <img src={mystery_1} className="verticalPhoto"/>
          <img src={mystery_2} className="verticalPhoto"/>
          <img src={mystery_3} className="verticalPhoto"/>
          <img src={mystery_4} className="verticalPhoto"/>
        </div>	
      </div>
      <Footer/>         
    </>
  )
}
export default P_MysteryApp