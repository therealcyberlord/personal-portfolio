import Profile from "./components/Profile";
function App() {
  return (
    <div className="flex">
      <Profile
        name="Xingyu"
        description="Rising senior at the University of Massachusetts Amherst, majoring in Computer Science with a minor in Business. Experienced in AI/ML and web development. Passionate about leveraging machine learning, particularly large language models (LLMs), to tackle complex problems. Currently seeking new grad positions."
        img_path=""
        role="data science intern"
      />
    </div>
  );
}

export default App;
