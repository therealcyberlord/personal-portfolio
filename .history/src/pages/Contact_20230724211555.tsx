import { FaLinkedin } from "react-icons/fa"; // Import the LinkedIn icon from the react-icons library.

const Contact = () => {
  return (
    <div className="px-2 py-8">
      <h1 className="text-white text-4xl font-medium">Contact</h1>
      <p className="text-white text-xl">
        Feel free to reach out to me via LinkedIn! 😀
      </p>
      <a
        href="https://www.linkedin.com/in/xingyu-bian-1734bb134/"
        target="_blank" // Open the link in a new tab/window.
        rel="noopener noreferrer" // Recommended for security reasons.
        className="flex items-center justify-center mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        <FaLinkedin size={20} className="mr-2" />
        Connect on LinkedIn
      </a>
    </div>
  );
};

export default Contact;
