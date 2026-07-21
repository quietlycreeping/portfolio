/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: header component for narrow screens
==========================================================*/
import { Link } from "react-router-dom";
//======Files===========================
import "./headerStyleSmall.css";
import logo from "../../assets/logo.png";

const SmallHeader = () =>   
{  
  return (
    <nav className="navbar">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <Link to="/">
          <h1 id="small-website-title">Jennifer Orlando</h1>
        </Link>
      </div>
      <div id="header-right-large">
          burger
      </div>
    </nav>
  )
}

export default SmallHeader