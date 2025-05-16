import { Link } from "react-router";
import type { CardProps } from "../types/type";
import { motion } from "framer-motion";

const Card = ({ key, img, name, index }: CardProps) => {
  return (
    <Link to={`/details/${name}`}>
      <motion.div
        key={key}
        className="flex flex-col justify-center items-center gap-2 w-58 h-64 bg-white/10 backdrop-blur-lg rounded-lg box-border cursor-pointer hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 + index * 0.6 }}
      >
        <img
          src={img}
          alt={name}
          className="object-cover object-center w-48 h-52 rounded-2xl rounded-t-2xl pt-2 "
        />
        <h2 className="text-amber-100 font-serif text-2xl">{name}</h2>
      </motion.div>
    </Link>
  );
};

export default Card;
