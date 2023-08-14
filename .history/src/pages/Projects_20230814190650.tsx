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
          description="Hintings is an advanced Document QA system using state-of-the-art large language models (LLM) for retrieval augmented generation"
          img_path="https://github.com/tjpel/HinTinGs/raw/main/frontend/public/hintings_logo_green.png"
          src_path="https://github.com/tjpel/HinTinGs"
        />
        <Project
          name="Blijax Stockbot"
          description="Blijax is a GPT-4-powered web app for financial advice. I led frontend and backend development"
          img_path="https://github.com/therealcyberlord/Blijax-Stockbot/raw/main/frontend/src/assets/stockbot.jpg"
          src_path="https://github.com/therealcyberlord/Blijax-Stockbot"
        />

        <Project
          name="StockExpert.io"
          description="User-friendly app to track portfolios, access real-time market data, analyze sentiment, and view stock trends"
          img_path="https://camo.githubusercontent.com/945e5847067c8a1e621a81b5eebf8c460be8d8b7176cc0173696d5fdac405438/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f52686c73683466414550492f302e6a7067"
          src_path="https://github.com/therealcyberlord/StockExpert.io"
        />
        <Project
          name="Covid exploratory data analysis"
          description="Data science project: exploring COVID-19 impact via EDA. Top Kaggle health code with 500K+ views"
          img_path="https://cdn.pixabay.com/photo/2020/05/15/18/46/coronavirus-5174671_1280.jpg"
          src_path="https://www.kaggle.com/code/therealcyberlord/coronavirus-covid-19-visualization-prediction"
        />
      </div>
    </div>
  );
};

export default Projects;
