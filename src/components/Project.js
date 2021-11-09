import { useState } from 'react';
import { Link } from "react-router-dom";
import projectData from "../data/project-data.json";

const Project = ({ id }) => {

  const [project, setProjects] = useState (() => {
    for (var i = 0; i < projectData.projects.length; i++) {
      if (projectData.projects[i].id === id) {
        return projectData.projects[i];
      }
    }
  });

  return (
    <>
      <div className='grid-item'>
        <div className='grid-item-info'>
          <h2>{project.title}</h2>
          <p className='grid-item-subtitle'>{project.subtitle}</p>
        </div>
        <Link 
          to={{
            pathname: `/projects/${project.id}`,
          }}
        >
          <img src={project.thumbnailImg} alt='Project Highlight Image'></img>
        </Link>
      </div>
    </>
  )

}

export default Project;