import { Link } from "react-router";
import type { CardProps } from "../types";
import { motion } from "framer-motion";

const Card = ({ name, img, index }: CardProps) => {
  return (
    <Link to={`/details/${name}`}>
      <motion.div
        className="flex flex-col justify-center items-center gap-2 w-58 h-64 bg-white/10 backdrop-blur-lg rounded-lg box-border cursor-pointer hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 + index * 0.4 }}
      >
        <img
          src={img}
          alt={name}
          className="select-none object-cover object-center w-48 h-52 rounded-2xl rounded-t-2xl pt-2 "
        />
        <h2 className="text-amber-100 font-serif text-2xl text-center">
          {name}
        </h2>
      </motion.div>
    </Link>
  );
};

export default Card;
