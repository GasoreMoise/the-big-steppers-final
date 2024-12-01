import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen text-center"
    >
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;

