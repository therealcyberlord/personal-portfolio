import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl md:text-3xl">
          <Link to="/" className="hover:text-sky-500 transition duration-300"> Xingyu 🦥 </Link>
        </div>
        <ul className="flex space-x-6 text-lg md:text-xl">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-sky-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-sky-500 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-300 hover:text-sky-500 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="text-gray-300 hover:text-sky-500 transition duration-300"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
