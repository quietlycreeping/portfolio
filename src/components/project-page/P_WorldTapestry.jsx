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
import Worlds_Tapestry_Documentation from "../../assets/WorldsTapestry/Worlds_Tapestry_Documentation.pdf"
import worldstapersty_1 from "../../assets/WorldsTapestry/worldstapersty_1.png"
import worldstapersty_2 from "../../assets/WorldsTapestry/worldstapersty_2.png"
import worldstapersty_3 from "../../assets/WorldsTapestry/worldstapersty_3.jpg"
import worldstapersty_4 from "../../assets/WorldsTapestry/worldstapersty_4.png"


const P_WorldTapestry = () => {

  return (
    <>
      <Header/>
      <div className="main-content">
        <h2 className="page-title">World's Tapestry</h2>
        <div className="project_columns">
          <p className="projectDescriptor">
            Collaboration with Chase Brown, Sean Kehoe, Mohammed Qudaih, and Rory Strachan <br/><br/>
            We aimed to create a space where people from like-minded communities could connect and ask questions, while also making sure the 
            barrier to entry would be free and straightforward. <br/>
            This project was a team effort. I was in charge of the design, and assisted with the front end and technical document. 
            The design and logo are meant to invoke community and how everyone is interwoven together.
          </p>

          <div className="projectTags">
              <span className="structureTag">ReactJS</span>
              <span className="structureTag">SQL</span>
              <span className="structureTag">Vite</span>

              <br/><br/>

              <a target="_blank" rel="noopener external" href="https://github.com/cbrown2121/Worlds_Tapestry">Repository</a>
              <a target="_blank" rel="author" href={Worlds_Tapestry_Documentation}>Documentation</a>
          </div>
        </div>

        <div className="photos_bottom">
            <img src={worldstapersty_2}/>
            <img src={worldstapersty_1}/>
            <img src={worldstapersty_4}/>
            <img src={worldstapersty_3} className="verticalPhoto"/>
        </div>
      </div>	
      <Footer/>         
    </>
  )
}
export default P_WorldTapestry