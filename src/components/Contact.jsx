import Person1 from '../assets/team/person1.jpg';
import Person2 from '../assets/team/person2.jpg';
import Person3 from '../assets/team/person3.jpg';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-teal-600 text-white py-32 px-6 text-center">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: 'url("/path/to/contact-hero.jpg")' }}></div>
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch with Us
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          You can always reach out to us and talk to our team whenever, however you want !
        </motion.p>
      </section>

      {/* Contact Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-semibold text-gray-800 text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Meet Our Official Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                name: 'GASORE NSHUTI Moise',
                role: 'Lead Developer, CEO',
                image: Person1, // Use imported variable
              },              
              {
                name: 'DUSHIMIMANA Fabrice',
                role: 'Technical Support, Co-Founder',
                image: Person2,
              },
              {
                name: 'DUSHIME Dieudonne',
                role: 'International Affairs, Co-Founder',
                image: Person3,
              },
            ].map((person, index) => (
              <motion.div
                className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform"
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
                <p className="text-sm text-gray-600">{person.role}</p>
                <p className="text-sm text-gray-600">{person.contact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            className="text-3xl font-semibold text-gray-800 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Send Us a Message
          </motion.h2>
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div>
              <label className="block text-gray-600 text-sm mb-2" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2" htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg text-lg transition"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Got any more Questions?</h2>
        <p className="text-lg mb-6">Feel free to reach out via email, phone, or visit us at our office.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.div
            className="flex items-center text-lg space-x-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaEnvelope className="text-xl" />
            <span>thebigsteppers@company.com</span>
          </motion.div>
          <motion.div
            className="flex items-center text-lg space-x-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaPhone className="text-xl" />
            <span>+250 7886 15083</span>
          </motion.div>
          <motion.div
            className="flex items-center text-lg space-x-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaMapMarkerAlt className="text-xl" />
            <span>KK 402 St, Kigali</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


