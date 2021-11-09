import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import projectData from './data/project-data.json';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {

  const [projects, setProjects] = useState (projectData.projects);

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router forceRefresh={true}>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route path='/' exact>
              <div className="projects-content">
                <Projects projects={projects}/>
              </div>
            </Route>
            <Route path='/projects/:id' exact>
              <ProjectDetails />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
