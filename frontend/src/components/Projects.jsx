import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects/")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="pt-20 p-8 my-8 rounded-lg bg-blue-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Software Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="mb-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} className="text-blue-500">
              View
            </a>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;
