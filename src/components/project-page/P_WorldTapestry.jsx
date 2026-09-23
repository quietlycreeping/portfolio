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
                <span className="structureTag">ReactJS</span>
                <span className="structureTag">SQL</span>
                <span className="structureTag">Vite</span>

                <span/>

                <a target="_blank" rel="noopener external" href="https://github.com/cbrown2121/Worlds_Tapestry">Repository</a>
                <a target="_blank" rel="author" href={Worlds_Tapestry_Documentation}>Documentation</a>
            </div>
            <p className="projectDescriptor">
              Collaboration with Chase Brown, Sean Kehoe, Mohammed Qudaih, and Rory Strachan <br/><br/>
              We aimed to create a space where people from like-minded communities could connect and ask questions, while also making sure the 
              barrier to entry would be free and straightforward. <br/>
              This project was a team effort. I was in charge of the design, and assisted with the front end and technical document. 
              The design and logo are meant to invoke community and how everyone is interwoven together.
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