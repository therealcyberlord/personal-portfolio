import Project from "../components/Project";

const Projects = () => {
  return (
    <div className="px-4 py-4">
      <h1 className="text-white text-2xl md:text-3xl font-medium">
        My Projects
      </h1>
      <Project name="StockExpert.io" description="lorem ipsum dolar alrit" />
    </div>
  );
};

export default Projects;
