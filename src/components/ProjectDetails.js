import { useState } from "react";
import { useParams } from "react-router";
import projectData from "../data/project-data.json";
import ImageLayout from "./ProjectDetailsImages";
import ImageCarousel from "./ImageCarousel";
import { Helmet } from "react-helmet-async";

const ProjectDetails = () => {
  let { id } = useParams();

  const projectMetadataURL = `https://zac-williams.com/projects/${id}`;

  const [project, setProjects] = useState(() => {
    for (var i = 0; i < projectData.projects.length; i++) {
      if (projectData.projects[i].id == id) {
        return projectData.projects[i];
      }
    }
  });

  const renderVideo = () => {
    if (project.videoLink != null) {
      return (
        <div className="project-details-video-container">
          <iframe
            src={project.videoLink}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="project-details-video-iframe"
          ></iframe>
        </div>
      );
    } else {
      return (
        <div className="mainImg">
          <img src={project.mainImg} alt="Main" />
        </div>
      );
    }
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href={projectMetadataURL} />
        <meta property="og:url" content={projectMetadataURL} />
      </Helmet>
      <div className="project-details-container">
        <div className="project-details-text-container">
          <div className="project-details-header">
            <span className="project-details-title">{project.title}</span>
            <span className="project-details-subtitle">
              {project.subtitle == null ? "" : " - "}
            </span>
            <span className="project-details-subtitle">{project.subtitle}</span>
          </div>
          {renderVideo()}

          <div className="project-details-summary-container">
            <div className="project-details-skills-container">
              <p className="project-details-description">
                {project.description}
              </p>
            </div>
            <div className="project-details-skills-container">
              <ul className="project-details-skills-list">
                <li>
                  <span className="skills-key">
                    {project.details.school}, {project.details.semester}
                  </span>
                </li>

                {project.details.instructor != null ? (
                  <li style={{ paddingTop: "1em" }}>
                    <span className="skills-key">Instructor: </span>
                    {project.details.instructor}
                  </li>
                ) : (
                  <></>
                )}

                {project.details.advisor != null ? (
                  <li style={{ paddingTop: "1em" }}>
                    <span className="skills-key">Advisor: </span>
                    {project.details.advisor}
                  </li>
                ) : (
                  <></>
                )}

                {project.details.students != null ? (
                  <li style={{ paddingTop: "1em" }}>
                    <span className="skills-key">Students: </span>
                    {project.details.students}
                  </li>
                ) : (
                  <></>
                )}

                {project.details.team != null ? (
                  <li style={{ paddingTop: "1em" }}>
                    <span className="skills-key">Team: </span>
                    {project.details.team}
                  </li>
                ) : (
                  <></>
                )}

                <li style={{ paddingTop: "1em" }}>
                  <span className="skills-key">Skills: </span>
                  {project.details.skills}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ImageLayout
          images={project.imgs}
          layoutStyle={project.layoutStyle}
        ></ImageLayout>

        <ImageCarousel currentProjectId={project.id} />
      </div>
    </>
  );
};

export default ProjectDetails;
