import Profile from "./components/Profile";
import Navbar from "./components/Nav";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Profile
          name="Xingyu"
          description="Rising senior at the University of Massachusetts Amherst, majoring in Computer Science with a minor in Business. Experienced in AI/ML and web development. Passionate about leveraging machine learning, particularly large language models (LLMs), to tackle complex problems. Currently seeking new grad positions."
          img_path="https://avatars.githubusercontent.com/u/30872286?v=4"
          role="Data Science Intern at AI Camp"
        />
      </div>
    </>
  );
}

export default App;
