import Profile from "./components/Profile";
function App() {
  return (
    <div className="flex">
      <Profile
        name="Xingyu"
        description="Rising senior at the University of Massachusetts Amherst, majoring in Computer Science with a minor in Business. Experienced in AI/ML and web development. Passionate about leveraging machine learning, particularly large language models (LLMs), to tackle complex problems. Currently seeking new grad positions."
        img_path="https://media.licdn.com/dms/image/D4E03AQFCQkdaurjz6w/profile-displayphoto-shrink_200_200/0/1683933220891?e=1695859200&v=beta&t=6aq9gF1fOYF9MzT3NBvvmVmEPlryFBR79bpj7rvutXQ"
        role="data science intern"
      />
    </div>
  );
}

export default App;
