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
            Collaboration with
            <a id="textlink" target="_blank" rel="noopener external" href="https://www.emilyorlando.design/">Emily Orlando</a><br/><br/>
              Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. 
              Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account 
              lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
              Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack 
              Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner 
              gaff booty Jack Tar transom spirits. 
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