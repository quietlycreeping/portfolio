/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Projectpage with various components
==========================================================*/
import { Link } from "react-router-dom";
//======Components===========================
import Header from "../header-footer/Header.jsx"
import Footer from "../header-footer/Footer.jsx";
//======Images===========================
import placeholderLandscape from "../../assets/placeholderLandscape.png"

const P_WorldTapestry = () => {

  return (
    <>
      <Header/>
      <div className="main-content">
        <h2>World's Tapestry</h2>
        <div className="projectPhotos">
            <img src={placeholderLandscape}/>
            <img src={placeholderLandscape}/>
            <img src={placeholderLandscape}/>
            <img src={placeholderLandscape}/>
        </div>
        <div className="projectStructureTags">
            <p>Language</p>
            <p>Framework</p>
        </div>
        <div className="projectAboutTags">
            <a href="https://github.com/quietlycreeping">Repository</a>
            <a href="https://github.com/quietlycreeping">ProjectLink</a>
        </div>
        <p className="projectDescriptor">
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. 
          Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account 
          lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
          Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack 
          Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner 
          gaff booty Jack Tar transom spirits.
        </p>	
      </div>
      <Footer/>         
    </>
  )
}
export default P_WorldTapestry