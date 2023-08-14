import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-4 py-8 bg-gray-900">
      <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">
        Feel free to connect with me on LinkedIn
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
        <div className="ml-4">
          <p className="text-white text-xl md:text-2xl">Xingyu Bian</p>
          <p className="text-gray-300 text-lg md:text-xl">
            Data Science Intern | Undergraduate Course Assistant
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            Email: xingyubian@umass.com
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            Location: Boston, MA
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/xingyu-bian-1734bb134/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              linkedin.com/in/xingyu-bian
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
