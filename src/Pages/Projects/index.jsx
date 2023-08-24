import { useState, useEffect } from "react";
import projectsData from "../../assets/data/project-data.json";
 
function ProjectsPage(props) {
  const [projects, setProjects] = useState([]);
 
  useEffect(() => {
    setProjects(projectsData);
  }, []); 
 
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project.id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}
 
export default ProjectsPage;