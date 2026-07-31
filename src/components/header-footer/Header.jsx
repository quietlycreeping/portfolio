/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: header component
==========================================================*/
import { Link } from "react-router-dom";
import { useContext } from "react";
//======Contexts===========================
import { ViewportContext } from "../../contexts/ViewportContext";
//======Files===========================
import "./headerStyle.css";
import logo from "../../assets/logo.png";

//for small sized screens
const BurgerLinks = () =>   
{
  return (
    <>
    =
    </>
  )
}
export {BurgerLinks};

//for large sized screens
const ButtonLinks = () =>   
{
  return (
    <>
      <button><Link to="/"> Projects </Link></button>
      <button>Resume</button>
      <button><Link to="/about"> About Me </Link></button>
    </>
  )
}
export {ButtonLinks};

const Header = () =>   
{
  const {screenSize} = useContext(ViewportContext);
  
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
        {(screenSize == "large") ? <ButtonLinks/> : <BurgerLinks/> }
      </div>
    </nav>
    </>
  )
}
export default Header
