import Profile from "../components/Profile";
import { SiGithub, SiKaggle } from "react-icons/si";

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

      {/* GitHub Section */}
      <div className="py-6 flex items-center">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          <SiGithub className="text-6xl md:text-7xl" />
        </a>
        <div className="ml-4">
          <p className="text-white text-xl md:text-2xl">GitHub</p>
          <p className="text-gray-300 text-lg md:text-xl">
            Check out my projects and contributions on GitHub.
          </p>
        </div>
      </div>

      {/* Kaggle Section */}
      <div className="py-6 flex items-center">
        <a
          href="https://www.kaggle.com/your-kaggle-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          <SiKaggle className="text-6xl md:text-7xl" />
        </a>
        <div className="ml-4">
          <p className="text-white text-xl md:text-2xl">Kaggle</p>
          <p className="text-gray-300 text-lg md:text-xl">
            View my Kaggle profile and competition submissions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
