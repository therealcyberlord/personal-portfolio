import { FaLinkedin } from "react-icons/fa"; // Import the LinkedIn icon from the react-icons library.

const Contact = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-white text-4xl font-medium">Contact</h1>
      <p className="text-white text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <a
        href="https://www.linkedin.com/your-profile-url" // Replace 'your-profile-url' with your actual LinkedIn profile URL.
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
