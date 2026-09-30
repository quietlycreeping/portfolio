/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: Error page with various components
==========================================================*/

//======Components===========================
import Header from "../header-footer/Header"
import Footer from "../header-footer/Footer"
//======Images===========================

const PageNotFound = () => {
  return (
    <>
      <Header/>
      <div className="main-content">
        <h2>404 Error</h2>
        <p>Oops! The page you're looking for does not exist.</p>
      </div>  
      <Footer/>       
    </>
  )
}

export default PageNotFound