import { Component } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import projectData from "../data/project-data.json";

const ImageCarousel = ({ currentProjectId }) => {

  const [projects, setProjects] = useState(() => {

    const numberOfProjectsToGet = 6;
    var p = {
      prevProject: {},
      nextProject: {},
      moreProjects: [],
    }

    for (var i = 0; i < projectData.projects.length; i++) {
      if (projectData.projects[i].id == currentProjectId) {

        // add prev project
        if (i > 0) {
          p.prevProject = projectData.projects[i - 1];
        }
        else {
          p.prevProject = projectData.projects[projectData.projects.length - 1];
        }

        // add more projects
        for (var j = 1; j < numberOfProjectsToGet + 1; j++) {
          // Grab the next X projects from the portfolio. If the user is on a project at the end of the list continue from the start.
          p.moreProjects.push(projectData.projects[(i + j) % projectData.projects.length]);
        }

        // add next project
        p.nextProject = p.moreProjects[0];

        break;
      }
    }

    return p;
  });

  return (
    <div className="image-carousel-container">
      <div id="image-carousel-nav">
        <Link
          to={{
            pathname: `/projects/${projects.prevProject.id}`
          }}
          id="prev"
        >
          <span className="bold-hover">&#60; prev</span>
        </Link>
        <Link
          to={{
            pathname: `/projects/${projects.nextProject.id}`
          }}
          id="next"
        >
          <span id="next" className="bold-hover">next &#62;</span>
        </Link>
      </div>
      <div className="image-carousel-grid">
        {
          projects.moreProjects.map((project) => (
            <div key={project.id} className='grid-item'>
              <div className='grid-item-info'>
                <h2>{project.title}</h2>
              </div>
              <Link
                to={{
                  pathname: `/projects/${project.id}`
                }}
              >
                <img src={project.carouselImg} alt={project.title} className="display-block" />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ImageCarousel;