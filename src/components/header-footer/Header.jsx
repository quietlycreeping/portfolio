/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: header component
==========================================================*/
import { Link } from "react-router-dom";
//======Files===========================
import "./headerStyle.css";
import logo from "../../assets/logo.png";

const Header = () =>   
{ 
  return (
    <>
    <nav className="navbar">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <Link to="/" id="website-title">
          Jennifer Orlando
        </Link>
      </div>
      <div className="header-right">
        <button><Link to="/">Projects</Link></button>
        <button>Resume</button>
        <button><Link to="/about">About Me</Link></button>
      </div>
    </nav>
    </>
  )
}
export default Header
