const Projects = () => {
  const projects = [
    {
      name: "Human Detection in Video and Audio 🔊",
      description: "This project implements an end-to-end solution for human detection in video and audio, leveraging advanced machine learning models to identify faces and process audio. The application is designed to assist law enforcement by improving child rescue operations with more accurate and timely identification. This is affiliated with the UMass Rescue Lab through the independent study: Machine Learning Applied to Child Rescue.",
      src_path: "https://github.com/apoorvasaraswat5/HumanDetection",
      theme: "bg-gradient-to-r from-gray-700 to-gray-800" // Muted gray gradient
    },
    {
      name: "Hintings AI 🤖",
      description: "Hintings is an intelligent document chatbot that allows users to upload multiple files for context. It integrates seamlessly with external tools like SerpApi for web search and Hugging Face for image generation, offering a dynamic and comprehensive experience. Built during the summer of 2023 at AI Camp by a team of four, it won the award for Best Product among all interns.",
      src_path: "https://github.com/tjpel/HinTinGs",
      theme: "bg-gradient-to-r from-gray-600 to-gray-700" // Muted gray gradient
    },
    {
      name: "StockExpert.io 📈",
      description: "StockExpert.io is an intuitive web application designed to help users track stock portfolios, create personalized watchlists, access real-time market data, visualize stock trends, and analyze sentiment to make informed investment decisions.",
      src_path: "https://github.com/therealcyberlord/StockExpert.io",
      theme: "bg-gradient-to-r from-green-500 to-green-600" // Muted green gradient
    },
    {
      name: "COVID Exploratory Data Analysis 🦠",
      description: "This data science project offers a comprehensive analysis of the COVID-19 pandemic’s impact. It started as a hobby project during my senior year of high school to raise awareness about COVID-19 when the pandemic first began. Since then, it has become the most upvoted health-related publication on Kaggle, with over 500K views, providing valuable insights through interactive visualizations and analysis.",
      src_path: "https://www.kaggle.com/code/therealcyberlord/coronavirus-covid-19-visualization-prediction",
      theme: "bg-gradient-to-r from-gray-600 to-gray-700" // Muted gray gradient for COVID
    }
  ];

  return (
    <section className="py-16 px-4">
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
            <div key={index} className={`transform hover:scale-[1.02] transition-all duration-300 ${project.theme}`}>
              <div className="p-6 rounded-lg shadow-lg bg-opacity-80">
                <h3 className="text-2xl text-white font-semibold mb-2">{project.name}</h3>
                <p className="text-lg text-gray-100 mt-4">{project.description}</p>
                <a
                  href={project.src_path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sky-500 hover:text-sky-400 transition-colors text-lg"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
