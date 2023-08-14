import React from "react";
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
      {/* <h2 className="p-4 text-white text-4xl font-medium text-center">
        Projects
      </h2>
      <div className="p-5 flex flex-wrap justify-around">
        <Project
          name="Project 1"
          description="Description for Project 1 goes here..."
          img_path="https://placehold.it/200"
          src_path="https://github.com/project1"
        />
        <Project
          name="Project 2"
          description="Description for Project 2 goes here..."
          img_path="https://placehold.it/200"
          src_path="https://github.com/project2"
        />
        <Project
          name="Project 3"
          description="Description for Project 3 goes here..."
          img_path="https://placehold.it/200"
          src_path="https://github.com/project3"
        />
        <Project
          name="Project 4"
          description="Description for Project 4 goes here..."
          img_path="https://placehold.it/200"
          src_path="https://github.com/project4"
        />
      </div> */}
    </>
  );
};

export default Home;
