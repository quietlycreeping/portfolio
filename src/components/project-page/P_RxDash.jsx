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
            I am a pharmacy technician and I wanted to merge my pharmacy experience with code. 
            So I created a timem-anagement game, taking inspiration from Overcooked and Dinner Dash. <br/>
            The game has a countdown clock, pathfinding, and a randomized que. 
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