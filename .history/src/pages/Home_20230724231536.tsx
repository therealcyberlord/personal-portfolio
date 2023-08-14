import React from "react";
import Profile from "../components/Profile";
import Project from "../components/Project";
import SkillItem from "../components/Skill"; // Update the import statement
import {
  SiReact,
  SiDjango,
  SiExpress,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";

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
      <h2 className="p-4 text-white text-4xl font-medium text-center">
        Projects
      </h2>
      <div className="p-5 flex flex-wrap justify-around"></div>
      {/* Skills section */}
      {/* <div className="p-5 flex flex-wrap justify-around">
        {/* <SkillItem icon={<SiReact />} name="React" />
        <SkillItem icon={<SiDjango />} name="Django" />
        <SkillItem icon={<SiExpress />} name="Express" />
        <SkillItem icon={<SiPytorch />} name="PyTorch" />
        <SkillItem icon={<SiTensorflow />} name="TensorFlow" /> */}
      </div> */}
    </>
  );
};

export default Home;
