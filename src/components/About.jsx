import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { FaAward, FaHandshake, FaLightbulb, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// Import team images
import teamMember1 from '../assets/team/person1.jpg';
import teamMember2 from '../assets/team/person2.jpg';
import teamMember3 from '../assets/team/person3.jpg';

const team = [
  {
    name: "GASORE NSHUTI Moise",
    position: "CEO & Founder",
    image: teamMember1,
    description: "15+ years of experience in software development",
    linkedin: "https://www.linkedin.com/in/moise-gasore-0b2561235",
    twitter: "https://x.com/MoiseGasore"
  },
  {
    name: "Jane Smith",
    position: "Technical Director",
    image: teamMember2,
    description: "Expert in cloud architecture and system design.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Mike Johnson",
    position: "Creative Lead",
    image: teamMember3,
    description: "Award-winning designer with a passion for UX.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
];

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-100">
              Building the future of digital innovation, one step at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To empower businesses with innovative digital solutions that drive growth,
                efficiency, and success in an ever-evolving technological landscape.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="flex items-start space-x-4"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="text-primary-500 mt-1">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="./assets/team/person1.jpg" // Add your company image here
                alt="Our team at work"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-lg">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Updated Team Section with Enhanced Styling */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('Our Team')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('Meet the team that drives our success')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Image Container with Enhanced Styling */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-w-3 aspect-h-4 mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links - Appear on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-4">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaLinkedinIn className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaTwitter className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const values = [
  {
    icon: <FaLightbulb className="w-6 h-6" />,
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions."
  },
  {
    icon: <FaHandshake className="w-6 h-6" />,
    title: "Client Partnership",
    description: "We build lasting relationships based on trust and mutual success."
  },
  {
    icon: <FaAward className="w-6 h-6" />,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do."
  }
];

export default About;


