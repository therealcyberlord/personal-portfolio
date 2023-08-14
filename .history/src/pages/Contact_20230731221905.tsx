import { FaLinkedin } from "react-icons/fa"; // Import the LinkedIn icon from the react-icons library.

const Contact = () => {
  return (
    <div className="px-4 py-4">
      <h1 className="text-white text-2xl md:text-3xl font-medium">
        Feel free to connect with me on LinkedIn
      </h1>
      <div className="py-6 flex items-center">
        <a
          href="https://www.linkedin.com/in/xingyu-bian-1734bb134/"
          target="_blank" // Open the link in a new tab/window.
          rel="noopener noreferrer" // Recommended for security reasons.
          className="text-blue-500"
        >
          <FaLinkedin className="text-6xl md:text-7xl" />
        </a>
        <div className="ml-4">
          <p className="text-white text-xl md:text-2xl">Xingyu Bian</p>
          <p className="text-gray-300 text-lg md:text-xl">
            Data Science Intern | Vice President of UMass ACM Machine Learning
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            Email: xingyubian@umass.com
          </p>
        </div>
      </div>

      {/* GitHub Section */}
      <div className="py-6 flex items-center">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          <FaGithub className="text-6xl md:text-7xl" />
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
          <FaKaggle className="text-6xl md:text-7xl" />
        </a>
        <div className="ml-4">
          <p className="text-white text-xl md:text-2xl">Kaggle</p>
          <p className="text-gray-300 text-lg md:text-xl">
            View my Kaggle profile and competition submissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
