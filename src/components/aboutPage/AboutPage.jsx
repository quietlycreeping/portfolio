/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Homepage with various components
==========================================================*/

//======Components===========================
import Header from "../header-footer/Header"
import Footer from "../header-footer/Footer"
import "./aboutPageStyle.css"
//======Images===========================
import me from "../../assets/profile/me.jpg"

const AboutPage = () => {
  return (
    <>
      <Header/>
      <div className="main-content">
        <h2>About Me</h2>
        <div id="about_columns">
          <img id="aboutimage" src={me}/>
          <p id="aboutblurb"> Hi! I'm Jennifer Orlando.
          <br/><br/>
          I love adding a little whimsy and magic to my life, especially with coding. <br/>
          Creating a working program from a few lines of code is truly magical! <br/><br/>
          While I'm not coding I'm usually creating something else. <br/>
          I make costumes, 3D models, and various other crafts.
          </p> 
        </div>             
      </div>  
      <Footer/>       
    </>
  )
}

export default AboutPage