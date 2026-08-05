/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: footer component
==========================================================*/
import { Link } from "react-router-dom";
import { useContext } from "react";
//======Files===========================
import "./footerStyle.css";

const Footer = () =>   
{ 
  return (
    <footer>
      <div className="footerLinks">
        <a href="https://github.com/quietlycreeping">Github</a>
        <Link to="/about">Email</Link>
        <a href="https://www.linkedin.com/in/-jenniferorlando/">LinkedIn</a>
      </div>
      <div className="copyright">
        © J. Orlando 2026
      </div>
    </footer>
  )
}
export default Footer