import React from "react";
import ProjectItem from "../components/ProjectItem";
// import Proj1 from "../assets/proj1.jpg"
// import Proj3 from "../assets/proj3.webp"
import "../styles/Projects.css"
import { ProjectList } from "../helpers/ProjectList";
function Projects()  {
 return <div className="projects">
    <h1>My Personal Projects</h1>
    <div className="projectList">
        {/* <ProjectItem name="Social Media Website" image={Proj1}/> 
        <ProjectItem name="Spotify Clone"  image={Proj3}/>  */}
        {ProjectList.map((project,idx)=>{
            return <ProjectItem id={idx} name={project.name} image={project.image}/>
        })}
    </div>
    </div>
}
export default Projects;