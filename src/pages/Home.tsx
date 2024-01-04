import Profile from "../components/Profile";

// home page
const Home = () => {
  return (
    <>
      <Profile
        name="Xingyu Bian"
        description="Incoming Grad Student at UMass Amherst, majoring in Computer Science. Experienced in AI/ML and full-stack development."
        img_path="src/assets/profile.jpg"
        role="Student at UMass Amherst"
      />
    </>
  );
};

export default Home;
