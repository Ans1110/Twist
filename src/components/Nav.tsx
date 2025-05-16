import { Link, NavLink, useLocation } from "react-router";
import Menu from "./icons/Menu";
import { motion } from "framer-motion";
import { useState } from "react";
import { Path, type MenuList } from "../types";

const Nav = () => {
  const currentPath = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuList: MenuList[] = [
    {
      path: Path.Home,
      name: "Home",
    },
    {
      path: Path.Popular,
      name: "Popular",
    },
    {
      path: Path.Search,
      name: "Search",
    },
    {
      path: Path.About,
      name: "About",
    },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="relative top-0 left-0 right-0 z-50 h-[12vh] select-none px-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mobile menu button */}
      <div className="md:hidden">
        <div onClick={handleToggleMenu}>
          <Menu className="absolute top-8 right-6" isMenuOpen={isMenuOpen} />
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center h-full">
        <div>
          <Link to="/">
            <h1 className="text-orange-300 font-serif text-4xl ml-4 -mt-2 md:ml-0">
              Twist
            </h1>
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-3/4 right-4 bg-white/10 backdrop-blur-lg rounded-lg p-4 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-8 text-amber-100 font-serif text-2xl">
              {menuList.map((item) => (
                <li key={item.path} className="">
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

        {/* Desktop navigation */}
        <ul className="hidden md:flex gap-5 text-amber-100 font-serif text-2xl items-center">
          {menuList.map((item) => (
            <li key={item.path}>
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
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    layoutId="desktopBorder"
                  />
                ) : (
                  <motion.div
                    className="absolute bottom-0 h-[2px]"
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
