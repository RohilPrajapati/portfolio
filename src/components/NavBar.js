import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [navCollapse, setNavCollapse] = useState(true);

  const NAV_ITEM = [
    { link: "experience", name: "Experience" },
    { link: "education", name: "Education" },
    { link: "skills", name: "Skills" },
    { link: "projects", name: "Projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-black fixed w-full z-20 top-0 left-0 border-b border-gray-700 shadow-lg"
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <Link to="home" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold text-white">
            Rohil <span className="text-blue-400">Prajapati</span>
          </span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setNavCollapse(!navCollapse)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={!navCollapse}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {navCollapse ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex flex-row space-x-6 font-medium">
            {NAV_ITEM.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    "block py-2 px-3 rounded-md transition " +
                    (isActive
                      ? "text-blue-400 bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-700")
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {!navCollapse && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gray-900 border-t border-gray-700"
          >
            <ul className="flex flex-col p-4 space-y-3 font-medium">
              {NAV_ITEM.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    onClick={() => setNavCollapse(true)}
                    className={({ isActive }) =>
                      "block py-2 px-3 rounded-md transition " +
                      (isActive
                        ? "text-blue-400 bg-gray-800"
                        : "text-gray-300 hover:text-white hover:bg-gray-700")
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
