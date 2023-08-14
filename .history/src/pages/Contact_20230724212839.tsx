import React from "react";
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
          <p className="text-gray-300 text-lg md:text-xl">Software Engineer</p>
          <p className="text-gray-300 text-lg md:text-xl">
            Email: xingyubian@umass.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
