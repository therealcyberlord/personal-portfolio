import Project from "../components/Project";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-white text-3xl md:text-4xl font-semibold mb-12 text-center">
        My Projects 🧑‍💻
      </h1>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       
        <Project
          name="Human Dection in Video and Audio"
          description="Human detection is an end-to-end application that leveraged machine learning models to detect unique faces and process audio from video sources, enabling law enforcement agencies to advance child rescue efforts more effectively"
          img_path="https://github.com/apoorvasaraswat5/HumanDetection/blob/main/docs/output.png?raw=true"
          src_path="https://github.com/apoorvasaraswat5/HumanDetection"
        />

        <Project
          name="Hintings AI"
          description="Hintings is an advanced Document Question Answering (QA) system that utilizes large language models (LLM) for retrieval augmented generation. In addition, it supports web search and mathematical reasoning out of the box"
          img_path="https://github.com/tjpel/HinTinGs/raw/main/frontend/public/hintings_logo_green.png"
          src_path="https://github.com/tjpel/HinTinGs"
        />
        <Project
          name="StockExpert.io"
          description="A user-friendly web app to track stock portfolios, create watchlists, access real-time market data, view graphical stock trends, and analyze sentiment for informed investment decisions"
          img_path="https://camo.githubusercontent.com/f77ce75cc626ece4c692bbedab5740f0f278ca0e7718df7751081969b66f45a8/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f52686c73683466414550492f302e6a7067"
          src_path="https://github.com/therealcyberlord/StockExpert.io"
        />
        <Project
          name="COVID exploratory data analysis"
          description="A data science project aimed at exploring the impact of COVID-19 through exploratory data analysis. Currently the most upvoted health code publication on Kaggle, totaling over 500K+ views"
          img_path="https://cdn.pixabay.com/photo/2020/05/15/18/46/coronavirus-5174671_1280.jpg"
          src_path="https://www.kaggle.com/code/therealcyberlord/coronavirus-covid-19-visualization-prediction"
        />
      </div>
    </div>
  );
};

export default Projects;
