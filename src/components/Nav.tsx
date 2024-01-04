import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="flex justify-between items-center">
        <div className="text-sky-500 dark:text-sky-400 font-bold text-3xl">
          <Link to="/"> Xingyu 🦥 </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-sky-500 text-xl dark:text-sky-400 hover:text-blue-200 dark:hover:text-blue-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-sky-500 text-xl dark:text-sky-400 hover:text-blue-200 dark:hover:text-blue-200 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-sky-500 text-xl dark:text-sky-400 hover:text-blue-200 dark:hover:text-blue-200 transition duration-300"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
