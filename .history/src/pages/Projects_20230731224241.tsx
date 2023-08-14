import Project from "../components/Project";

const Projects = () => {
  // Assuming you have an array of project data
  const projectsData = [
    // Your project data here
  ];

  // Function to split the projects into groups of 4
  const splitProjectsIntoRows = (projectsData) => {
    const rows = [];
    for (let i = 0; i < projectsData.length; i += 4) {
      const row = projectsData.slice(i, i + 4);
      rows.push(row);
    }
    return rows;
  };

  const rowsOfProjects = splitProjectsIntoRows(projectsData);

  return (
    <div className="px-4 py-4">
      <h1 className="text-white text-2xl md:text-3xl font-medium mb-6">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rowsOfProjects.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {row.map((project, projectIndex) => (
              <Project
                key={projectIndex}
                name={project.name}
                description={project.description}
                img_path={project.img_path}
                src_path={project.src_path}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
