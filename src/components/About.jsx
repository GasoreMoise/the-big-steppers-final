import { motion } from 'framer-motion';
import { FaGlobe, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-32 px-6 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-opacity-50"
          style={{ backgroundImage: 'url("/path/to/your/about-image.jpg")' }}
        ></div>
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Discover the story behind our success as UR's best software engineers with an aim of revolutionizing the digital world in Rwanda and internationally.
        </motion.p>
        <motion.h3
          className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We are the Big Steppers !
        </motion.h3>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We aim to empower businesses by providing innovative solutions, fostering a collaborative environment, and
            creating a meaningful impact in the digital world.
          </motion.p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-50 shadow-md rounded-lg p-6 text-center hover:shadow-lg transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaLightbulb className="text-4xl mb-4 text-yellow-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">We believe in creating new ideas that drive progress and inspire change.</p>
          </motion.div>
          <motion.div
            className="bg-gray-50 shadow-md rounded-lg p-6 text-center hover:shadow-lg transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaUsers className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Teamwork</h3>
            <p className="text-gray-600">Collaboration is the foundation of our success and growth.</p>
          </motion.div>
          <motion.div
            className="bg-gray-50 shadow-md rounded-lg p-6 text-center hover:shadow-lg transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaGlobe className="text-4xl mb-4 text-green-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Global Impact</h3>
            <p className="text-gray-600">We strive to make a positive difference for our clients and the community.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0">
          <motion.div
            className="sm:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaChartLine className="text-blue-600 text-6xl mx-auto mb-6" />
          </motion.div>
          <div className="sm:w-1/2 text-center sm:text-left">
            <motion.h2
              className="text-3xl font-semibold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our Journey
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              From a small team with big dreams to a growing enterprise making a global impact, our journey is a story
              of resilience and determination.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-xl transition"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Join Us
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <p className="text-sm text-gray-400">© 2024 The Big Steppers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;


