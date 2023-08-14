import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-sky-500 dark:text-sky-400 font-bold text-xl">
          Xingyu 🦥
        </div>
        {/* Navigation Items */}
        <ul className="flex space-x-4 text-lg lg:text-xl">
          <li>
            <Link
              to="/"
              className="text-sky-500 dark:text-sky-400 hover:text-blue-200 dark:hover:text-blue-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-sky-500 dark:text-sky-400 hover:text-blue-200 dark:hover:text-blue-200 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-sky-500 dark:text-sky-400 hover:text-blue-200 dark:hover:text-blue-200 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
