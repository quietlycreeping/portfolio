/*=========================================================
 Author:     J. Orlando
 Date:       September 2026
 Description: World's Tapestry project page
==========================================================*/
import { Link } from "react-router-dom";
//======Components===========================
import Header from "../header-footer/Header.jsx"
import Footer from "../header-footer/Footer.jsx";
import "./projectPageStyle.css"
//======Images/Files===========================
import placeholderLandscape from "../../assets/placeholderLandscape.png"
import Worlds_Tapestry_Documentation from "../../assets/WorldsTapestry/Worlds_Tapestry_Documentation.pdf"


const P_WorldTapestry = () => {

  return (
    <>
      <Header/>
      <div className="main-content">
        <h2 className="page-title">World's Tapestry</h2>
        <div className="project_columns">
          <div className="project_left">

            <div className="projectTags">
                <span className="structureTag">React JS</span>
                <span className="structureTag">Vite</span>

                <span/>

                <a target="_blank" rel="noopener external" href="https://github.com/cbrown2121/Worlds_Tapestry">Repository</a>
                <a target="_blank" rel="author" href={Worlds_Tapestry_Documentation}>Documentation</a>
            </div>
            <p className="projectDescriptor">
              Collaboration with Chase Brown, Sean Kehoe, Mohammed Qudaih, and Rory Strachan <br/><br/>
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
export default P_WorldTapestry