/*=========================================================
 Author:     J. Orlando
 Date:       September 2026
 Description: RxDash project page
==========================================================*/
import { Link } from "react-router-dom";
//======Components===========================
import Header from "../header-footer/Header.jsx"
import Footer from "../header-footer/Footer.jsx";
import "./projectPageStyle.css"
//======Images/Files===========================
import rxdash_1 from "../../assets/RxDash/rxdash_1.jpg"
import rxdash_2 from "../../assets/RxDash/rxdash_2.jpg"
import rxdash_3 from "../../assets/RxDash/rxdash_3.jpg"
import rxdash_4 from "../../assets/RxDash/rxdash_4.jpg"


const P_RxDash = () => {

  return (
    <>
      <Header/>
      <div className="main-content">
        <h2 className="page-title">Rx Dash</h2>
        <div className="project_columns">
          <p className="projectDescriptor">
            Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. 
            Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account 
            lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
            Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack 
            Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner 
            gaff booty Jack Tar transom spirits.
          </p>

          <div className="projectTags">
              <span className="structureTag">C#</span>
              <span className="structureTag">Unity</span>

              <br/><br/>

              <a target="_blank" rel="noopener external" href="https://github.com/quietlycreeping/Rx_Dash">Repository</a>
              <a target="_blank" rel="noopener external" href="https://quietlycreeping.itch.io/rx-d">Prototype</a>
          </div>
        </div>

        <div className="photos_bottom">
          <img src={rxdash_1}/>
          <img src={rxdash_2}/>
          <img src={rxdash_3}/>
          <img src={rxdash_4}/>
        </div>
      </div>	
      <Footer/>         
    </>
  )
}
export default P_RxDash