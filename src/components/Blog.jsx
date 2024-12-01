import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Blog</h2>
        <div className="space-y-8">
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">Blog Post Title 1</h3>
            <p className="text-lg text-gray-600">Short excerpt of the post...</p>
            <Link to="/blog/1" className="text-blue-600">Read more</Link>
          </motion.div>

          {/* Repeat for other blog posts */}
        </div>
      </div>
    </section>
  );
};

export default Blog;