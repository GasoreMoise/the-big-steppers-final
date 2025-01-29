import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaGlobe, FaTools, FaDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
      {/* Hero Section with Refined Background */}
      <section className="relative min-h-screen pt-20 flex items-center bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-medium mb-4"
              >
                Software Engineer
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                GASORE NSHUTI{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Moise
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-3xl mb-6 text-gray-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  <Typewriter
                    words={[
                      'Software Engineer',
                      'Full Stack Developer',
                      'Network Professional',
                      'Tech Innovator',
                      'Problem Solver'
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
              
              <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                Experienced software engineer specializing in full-stack development 
                and network infrastructure. Bridging technology gaps with innovative 
                solutions and cross-cultural expertise.
              </p>

              {/* Add Download CV button */}
              <motion.a
                href="/resume.pdf" // Make sure your PDF is in the public folder
                download="Gasore_Moise_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-amber-500 text-black rounded-lg font-medium 
                  hover:bg-amber-400 transition-colors mb-8 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </motion.a>

              <div className="flex gap-6 mb-8">
                <motion.a
                  href="https://github.com/GasoreMoise"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/moise-gasore-0b2561235"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:gasorenshuti34@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <FaEnvelope className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>

            {/* Core Expertise Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <ExpertiseCard
                icon={<FaCode className="w-6 h-6" />}
                title="Tech Stack"
                description="Python, JavaScript, React, C++, SQL"
              />
              <ExpertiseCard
                icon={<FaGlobe className="w-6 h-6" />}
                title="Languages"
                description="English, French, Kinyarwanda, Swahili"
              />
              <ExpertiseCard
                icon={<FaTools className="w-6 h-6" />}
                title="Infrastructure"
                description="Cloud, Network, System Architecture"
              />
              <ExpertiseCard
                icon={<FaCode className="w-6 h-6" />}
                title="Development"
                description="Full Stack, Mobile, API Design"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

const ExpertiseCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-[#2a2a2a]/80 backdrop-blur-sm p-6 rounded-lg border border-amber-500/20"
  >
    <div className="text-amber-500 mb-2">{icon}</div>
    <h3 className="text-white text-lg font-bold mb-1">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

export default Home;

