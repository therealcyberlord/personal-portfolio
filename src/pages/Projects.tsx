import Project from "../components/Project";

const Projects = () => {
  return (
    <div className="px-4 py-4">
      <h1 className="text-white text-2xl md:text-3xl font-medium mb-6">
        My Projects 🧑‍💻
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Project
          name="Hintings AI"
          description="Hintings is an advanced Document Question Answering (QA) system that utilizes cutting-edge large language models (LLM) for retrieval augmented generation"
          img_path="https://github.com/tjpel/HinTinGs/raw/main/frontend/public/hintings_logo_green.png"
          src_path="https://github.com/tjpel/HinTinGs"
        />
        <Project
          name="Blijax Stockbot"
          description="Blijax is a multipurpose GPT 4-powered web application whose purpose is targeted at providing financial advice. I directed the development of the frontend and backend of the application."
          img_path="https://github.com/therealcyberlord/Blijax-Stockbot/raw/main/frontend/src/assets/stockbot.jpg"
          src_path="https://github.com/therealcyberlord/Blijax-Stockbot"
        />

        <Project
          name="StockExpert.io"
          description="A user-friendly web app to track stock portfolios, create watchlists, access real-time market data, view graphical stock trends, and analyze sentiment for informed investment decisions."
          img_path="https://camo.githubusercontent.com/f77ce75cc626ece4c692bbedab5740f0f278ca0e7718df7751081969b66f45a8/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f52686c73683466414550492f302e6a7067"
          src_path="https://github.com/therealcyberlord/StockExpert.io"
        />
        <Project
          name="Covid exploratory data analysis"
          description="A data science project aimed at exploring the impact of COVID-19 through exploratory data analysis. Currently the most upvoted health code publication on Kaggle, totaling over 500K+ views"
          img_path="https://cdn.pixabay.com/photo/2020/05/15/18/46/coronavirus-5174671_1280.jpg"
          src_path="https://www.kaggle.com/code/therealcyberlord/coronavirus-covid-19-visualization-prediction"
        />
      </div>
    </div>
  );
};

export default Projects;
