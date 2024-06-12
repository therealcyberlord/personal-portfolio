import Profile from "../components/Profile";

// home page
const Home = () => {
  return (
    <>
      <Profile
        name="Xingyu Bian"
        description="Master's in Computer Science at UMass Amherst, currently doing ML research with the UMass BioNLP Group."
        img_path="/src/assets/profile.jpg"
        role="Student at UMass Amherst"
      />
    </>
  );
};

export default Home;
