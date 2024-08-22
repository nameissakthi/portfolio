import "./Projects.css";
import React from "react";
import All_Projects from '../../assets/Projects/All_Projects'

const Projects = () => {
  return (
    <div className="projects">
      <p>Projects</p>
      <div className="project_container">
        {All_Projects().map((value)=>{
            return (
                <div className="project_card">
                    <div className="project_img">
                        <img src={value["project_image"]} alt="Project1-Img" />
                    </div>
                    <div className="project_description">
                        <p className="project_title">{value["project_title"]}</p>
                        <p className="project_desp">
                            {value["project_description"]}
                        </p>
                        <a href={value["project_url"]} target="__blank">
                            View
                        </a>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Projects;
