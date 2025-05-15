import { Link, NavLink, useLocation } from "react-router";
import Menu from "./icons/menu";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const currentPath = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/popular",
      name: "Popular",
    },
    {
      path: "/search",
      name: "Search",
    },
    {
      path: "/about",
      name: "About",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-16 pt-8 select-none px-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mobile menu button - only visible on small screens */}
      <div className="md:hidden">
        <div onClick={toggleMenu}>
          <Menu className="absolute top-8 right-6" isMenuOpen={isMenuOpen} />
        </div>
      </div>

      <div className="container mx-auto flex justify-between h-full">
        <div>
          <Link to="/">
            <h1 className="text-orange-300 font-serif text-4xl ml-4 -mt-2 md:ml-0">
              Twist
            </h1>
          </Link>
        </div>

        {/* Mobile menu - shown when menu is toggled */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-20 right-6 bg-transparent bg-opacity-95 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-8 text-amber-100 font-serif text-2xl">
              {menuList.map((item) => (
                <li key={item.path} className="relative">
                  <NavLink
                    to={item.path}
                    className={
                      currentPath === item.path
                        ? "text-red-300 border-b-2 border-red-300"
                        : ""
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Desktop navigation - hidden on small screens */}
        <ul className="hidden md:flex gap-5 text-amber-100 font-serif text-2xl">
          {menuList.map((item) => (
            <li key={item.path} className="relative">
              <NavLink
                to={item.path}
                className={
                  currentPath === item.path
                    ? "text-red-300 border-b-2 border-red-300"
                    : ""
                }
              >
                {item.name}
                {currentPath === item.path ? (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-300"
                    layoutId="desktopBorder"
                  />
                ) : (
                  <motion.div
                    className="absolute bottom-0 h-[2px] bg-amber-100"
                    initial={{ left: "50%", right: "50%", opacity: 0 }}
                    whileHover={{ left: 0, right: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
