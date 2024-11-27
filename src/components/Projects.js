import Masonry from "react-masonry-css";
import Project from "./Project";
import { Helmet } from "react-helmet-async";

const Projects = ({ projects }) => {
  const breakpointColumnsObj = {
    default: 3,
    1080: 3,
    768: 2,
    500: 1,
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://zac-williams.com/" />
        <meta property="og:url" content="https://zac-williams.com/" />
      </Helmet>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects.map((project) => (
          <Project key={project.id} id={project.id} />
        ))}
      </Masonry>
    </>
  );
};

export default Projects;
