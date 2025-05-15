import { motion } from "framer-motion";

const Menu = ({
  className,
  isMenuOpen,
}: {
  className?: string;
  isMenuOpen: boolean;
}) => {
  return (
    <motion.div
      className={`flex flex-col gap-1.5 ${className} cursor-pointer`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-8 h-[3px] rounded-[2px] bg-white origin-center"
        animate={{
          rotate: isMenuOpen ? 45 : 0,
          y: isMenuOpen ? 9 : 0,
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <motion.div
        className="w-8 h-[3px] rounded-[2px] bg-white"
        animate={{
          opacity: isMenuOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <motion.div
        className="w-8 h-[3px] rounded-[2px] bg-white origin-center"
        animate={{
          rotate: isMenuOpen ? -45 : 0,
          y: isMenuOpen ? -9 : 0,
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </motion.div>
  );
};

export default Menu;
