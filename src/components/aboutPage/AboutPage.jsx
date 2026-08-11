/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Homepage with various components
==========================================================*/

//======Components===========================
import Header from "../header-footer/Header"
import Footer from "../header-footer/Footer"
//======Images===========================
import placeholderLandscape from "../../assets/placeholderLandscape.png"

const AboutPage = () => {
  return (
    <>
      <Header/>
      <div className="main-content">
        <h2>About Me</h2>
        <img className="projectMainImage" src={placeholderLandscape}/>
        <p>About Page here
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. 
          Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account 
          lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.<br/><br/>
          Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea 
          cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
        </p>
        <img className="projectMainImage" src={placeholderLandscape}/>
        <img className="projectMainImage" src={placeholderLandscape}/>                
      </div>  
      <Footer/>       
    </>
  )
}

export default AboutPage