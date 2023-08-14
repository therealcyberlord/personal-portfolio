import Project from "../components/Project";

const Projects = () => {
  return (
    <div className="px-4 py-4">
      <h1 className="text-white text-2xl md:text-3xl font-medium mb-6">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {" "}
        {/* Reduced gap to 4 */}
        <Project
          name="StockExpert.io"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a arcu vel nunc cursus ultrices et ac ipsum. Nullam id nulla id erat luctus cursus sit amet non nisi."
          img_path="https://camo.githubusercontent.com/945e5847067c8a1e621a81b5eebf8c460be8d8b7176cc0173696d5fdac405438/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f52686c73683466414550492f302e6a7067"
          src_path="https://github.com/therealcyberlord/StockExpert.io"
        />
        {/* Add more Project components here if needed */}
        <Project
          name="StockExpert.io"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a arcu vel nunc cursus ultrices et ac ipsum. Nullam id nulla id erat luctus cursus sit amet non nisi."
          img_path="https://camo.githubusercontent.com/945e5847067c8a1e621a81b5eebf8c460be8d8b7176cc0173696d5fdac405438/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f52686c73683466414550492f302e6a7067"
          src_path="https://github.com/therealcyberlord/StockExpert.io"
        />
        <Project
          name="StockExpert.io"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a arcu vel nunc cursus ultrices et ac ipsum. Nullam id nulla id erat luctus cursus sit amet non nisi."
          img_path="https://camo.githubusercontent.com/945e5847067c8a1e621a81b5eebf8c460be8d8b7176cc0173696d5fdac405438/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f52686c73683466414550492f302e6a7067"
          src_path="https://github.com/therealcyberlord/StockExpert.io"
        />
      </div>
    </div>
  );
};

export default Projects;
