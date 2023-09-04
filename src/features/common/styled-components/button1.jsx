import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button1 = (props) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }}>
      <Link
        to="/booking"
        className={`hidden lg:ml-6 lg:block  ml-auto text-white bg-blue-600 border-0 py-3 px-6 hover:bg-blue-500 text-sm focus:outline-none rounded-lg shadow-[0_0_3px_blue] ${props.className}`}
      >
        {props.text}
      </Link>
    </motion.button>
  );
};

export default Button1;
