import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";

const About = () => {
  return (
    <div className="px-4 py-4">
      <h1 className="text-white text-2xl md:text-3xl font-medium">
        Check out my LinkedIn and other coding portfolios 💻
      </h1>
      <div className="py-6 flex items-center">
        <a
          href="https://www.linkedin.com/in/xingyu-bian-1734bb134/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition duration-300"
        >
          <FaLinkedin className="text-6xl md:text-7xl" />
        </a>
        <a
          href="https://github.com/therealcyberlord"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition duration-300 ml-4"
        >
          <FaGithub className="text-6xl md:text-7xl" />
        </a>
        <a
          href="https://www.kaggle.com/therealcyberlord"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition duration-300 ml-4"
        >
          <FaKaggle className="text-6xl md:text-7xl" />
        </a>
      </div>
    </div>
  );
};

export default About;
