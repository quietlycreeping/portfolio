/*=========================================================
 Author:     J. Orlando
 Date:       August 2026
 Description: Project card template with props
==========================================================*/
import { Link } from "react-router-dom";
//======Files===========================
import "./ProjectCardStyle.css";

const ProjectCard_Prop = (props) => {
  let {title, image, body, link} = props;

  return (
    <Link to={link}>
    <div className="projectCard">
        <h2>{title}</h2>
        <img src={image}/>
        <p>{body}</p>
    </div>
    </Link>
  )
}

export default ProjectCard_Prop