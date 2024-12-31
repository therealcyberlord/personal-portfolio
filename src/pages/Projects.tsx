import Project from "../components/Project";

const Projects = () => {
  const projects = [
    {
      name: "Human Detection in Video and Audio",
      description: "Human detection is an end-to-end application that leveraged machine learning models to detect unique faces and process audio from video sources, enabling law enforcement agencies to advance child rescue efforts more effectively",
      img_path: "https://github.com/apoorvasaraswat5/HumanDetection/blob/main/docs/output.png?raw=true",
      src_path: "https://github.com/apoorvasaraswat5/HumanDetection"
    },
    {
      name: "Hintings AI",
      description: "Hintings is an advanced Document Question Answering (QA) system that utilizes large language models (LLM) for retrieval augmented generation. In addition, it supports web search and mathematical reasoning out of the box",
      img_path: "https://github.com/tjpel/HinTinGs/raw/main/frontend/public/hintings_logo_green.png",
      src_path: "https://github.com/tjpel/HinTinGs"
    },
    {
      name: "StockExpert.io",
      description: "A user-friendly web app to track stock portfolios, create watchlists, access real-time market data, view graphical stock trends, and analyze sentiment for informed investment decisions",
      img_path: "https://camo.githubusercontent.com/8fe6edb4eb6e2f060f1326aaa515680e3b6c8e02e9a2d5e784f7e4d114ad26b5/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f52686c73683466414550492f302e6a7067",
      src_path: "https://github.com/therealcyberlord/StockExpert.io"
    },
    {
      name: "COVID exploratory data analysis",
      description: "A data science project aimed at exploring the impact of COVID-19 through exploratory data analysis. Currently the most upvoted health code publication on Kaggle, totaling over 500K+ views",
      img_path: "https://cdn.pixabay.com/photo/2020/05/15/18/46/coronavirus-5174671_1280.jpg",
      src_path: "https://www.kaggle.com/code/therealcyberlord/coronavirus-covid-19-visualization-prediction"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            My Projects
            <span className="text-4xl" role="img" aria-label="developer">
              🧑‍💻
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in machine learning, web development, and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="transform hover:scale-[1.02] transition-all duration-300">
              <Project
                name={project.name}
                description={project.description}
                img_path={project.img_path}
                src_path={project.src_path}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;