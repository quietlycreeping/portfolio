/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: header component
==========================================================*/
import { Link } from "react-router-dom";
  
const Header = () =>   
{  
  return (
    <>
    <div id="header">
        <nav>
        <button><Link to="/"> Home </Link></button>
        <button><Link to="/about"> About </Link></button>
        </nav>
    </div>
    </>
  )
}

export default Header
