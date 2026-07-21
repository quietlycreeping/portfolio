/*=========================================================
 Author:     J. Orlando
 Date:       July 2026
 Description: header component
==========================================================*/
import { Link } from "react-router-dom";
import { useContext } from "react";
//======Contexts===========================
import { ViewportContext } from "../../contexts/ViewportContext";
//======Components===========================
import SmallHeader from "./SmallLayout_Header";
import LargeHeader from "./LargeLayout_Header";

const Header = () =>   
{
  const {screenSize} = useContext(ViewportContext);
  
  return (
    <>
      {(screenSize == "large") ? <LargeHeader/> : <SmallHeader/> }
    </>
  )
}
export default Header
