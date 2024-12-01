import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaBuilding, FaNetworkWired } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Home = () => {
    // Example blog data
  const blogs = [
    {
      id: 1,
      title: 'Understanding the Basics of React',
      excerpt: 'Learn the fundamental concepts of React.js and how to get started...',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhY3QlMjBiYXNpY3N8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      excerpt: 'Discover the latest trends and technologies shaping the future of web development...',
      image: 'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 3,
      title: 'How to Improve Your Coding Skills',
      excerpt: 'Improve your coding abilities with these tips and best practices...',
      image: 'https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-32 px-6 text-center">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}></div>
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Empower Your Business with Us
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We offer innovative solutions that help your business thrive in a digital world.
        </motion.p>
        <motion.a
          href="/about"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-xl transition z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          Get Started
        </motion.a>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BiCodeAlt className="text-6xl text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Software Engineering</h3>
            <p className="text-gray-600">We develop software for start-ups and large institutions</p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaNetworkWired className="text-6xl text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Network Engineering</h3>
            <p className="text-gray-600">We set up, install, and maintain LANs for all types of institutions</p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaLinkedinIn className="text-4xl mb-6 text-blue-700 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Business Consulting</h3>
            <p className="text-gray-600">Expert consulting services to guide your business growth.</p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0">
          <motion.div
            className="sm:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaBuilding className="text-blue-600 text-6xl mx-auto mb-6" />
          </motion.div>
          <div className="sm:w-1/2 text-center sm:text-left">
            <motion.h2
              className="text-3xl font-semibold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Who We Are
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We are a passionate team committed to helping businesses succeed through innovation, strategy, and cutting-edge technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-semibold text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Latest Blog Posts
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <motion.div
                className="bg-white shadow-lg rounded-lg p-6"
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-600">{blog.excerpt}</p>
                <Link to={`/blog/${blog.id}`} className="text-blue-600 mt-4 inline-block">
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-semibold text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Products
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://images.unsplash.com/file-1731626739593-164305aa13b4image?w=416&dpr=2&auto=format&fit=crop&q=60" alt="Product 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fully Developed Softwares</h3>
              <p className="text-gray-600">If you really need a well functioning software, you've come to the right place.</p>
              <Link to="/product/1" className="text-blue-600 mt-4 inline-block">
                View Product
              </Link>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VydmVyfGVufDB8fDB8fHww" alt="Product 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Servers and their accessories</h3>
              <p className="text-gray-600">Home of Network Engineering, if it about network of any kind, we've got you covered.</p>
              <Link to="/product/2" className="text-blue-600 mt-4 inline-block">
                View Product
              </Link>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://media.istockphoto.com/id/1952045881/photo/computer-black-woman-and-manager-training-intern-or-coaching-employee-and-helping-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=OOejNpHUb3KyYFKM43Q6lXSRoVitLR1z8S9xx0Za1H8=" alt="Product 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Consultation</h3>
              <p className="text-gray-600">You have ideas but lack capital and guidance, don't anywhere else.</p>
              <Link to="/product/2" className="text-blue-600 mt-4 inline-block">
                View Product
              </Link>
            </motion.div>

            {/* Add more products if necessary */}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Ready to Take the Next Step?</h2>
        <p className="text-lg mb-6">Let us help you grow your business with our tailored solutions.</p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-blue-600 hover:bg-gray-200 text-xl px-8 py-3 rounded-full transition"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          Contact Us
        </motion.a>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-xl hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-xl hover:text-blue-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-xl hover:text-blue-500">
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm text-gray-400">© 2024 The Big Steppers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

