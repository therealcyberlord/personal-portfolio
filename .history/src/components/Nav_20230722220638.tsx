import Link from "react-outer-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 dark:bg-slate-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-sky-500 dark:text-sky-400 font-bold text-xl">
            Xingyu 🦥
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/home"
                className="text-sky-500 dark:text-sky-400 hover:text-blue-200 dark:hover:text-blue-200 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="text-sky-500 dark:text-sky-400 hover:text-blue-200 dark:hover:text-blue-200 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sky-500 dark:text-sky-400 hover:text-blue-200 dark:hover:text-blue-200 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
