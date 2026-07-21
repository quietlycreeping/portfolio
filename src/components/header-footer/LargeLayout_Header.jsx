/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: header component for wide screens
==========================================================*/
import { Link } from "react-router-dom";
//======Files===========================
import "./headerStyleLarge.css"
import logo from "../../assets/logo.png";


const LargeHeader = () =>   
{  
  return (
    <nav className="navbar">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <Link to="/">
          <h1 id="website-title">Jennifer Orlando</h1>
        </Link>
      </div>
      <div id="header-right-large">
        <button><Link to="/"> Projects </Link></button>
        <button>Resume</button>
        <button><Link to="/about"> About Me </Link></button>
      </div>
    </nav>
  )
}

export default LargeHeader