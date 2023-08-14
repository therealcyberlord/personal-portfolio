import Profile from "../components/Profile";
import Project from "../components/Project";

// home page
const Home = () => {
  return (
    <>
      <Profile
        name="Xingyu Bian"
        description="Rising senior at UMass Amherst, majoring in Computer Science with a minor in Business. Experienced in AI/ML and web development. Passionate about leveraging machine learning, particularly large language models (LLMs), to tackle complex problems."
        img_path="https://media.licdn.com/dms/image/D4E03AQFCQkdaurjz6w/profile-displayphoto-shrink_800_800/0/1683933220891?e=1695859200&v=beta&t=uIRKof3vYt0XOvIpsSgM-4hSd2uGWgJoHZSCfBV5E1M"
        role="Data Science Intern at AI Camp"
      />
      <Project
        name="StockExpert.io"
        description="A user-friendly web app to track stock portfolios, create watchlists, access real-time market data, view graphical stock trends, and analyze sentiment for informed investment decisions."
        img_path="https://camo.githubusercontent.com/945e5847067c8a1e621a81b5eebf8c460be8d8b7176cc0173696d5fdac405438/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f52686c73683466414550492f302e6a7067"
        src_path="https://github.com/therealcyberlord/StockExpert.io"
      />
    </>
  );
};

export default Home;
