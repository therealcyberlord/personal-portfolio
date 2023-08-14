import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import the LinkedIn icon from the react-icons library.

const Contact = () => {
  return (
    <div className="px-4 py-4">
      <h1 className="text-white text-2xl font-medium">
        Feel free to connect with me on LinkedIn
      </h1>
      <div className="py-6 flex items-center">
        <a
          href="https://www.linkedin.com/in/xingyu-bian-1734bb134/"
          target="_blank" // Open the link in a new tab/window.
          rel="noopener noreferrer" // Recommended for security reasons.
          className="text-blue-500"
        >
          <FaLinkedin size={100} />
        </a>
        <div className="ml-4">
          <p className="text-white text-lg">Xingyu Bian</p>
          <p className="text-gray-300">Software Engineer</p>
          <p className="text-gray-300">Email: xingyubian@umass.edu</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
