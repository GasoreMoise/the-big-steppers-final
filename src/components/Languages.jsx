import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLanguage, FaGlobe, FaCheck, FaStar } from 'react-icons/fa';

const Languages = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const languages = [
    {
      name: "English",
      level: "Professional Working Proficiency",
      percentage: 90,
      skills: [
        "Technical Documentation",
        "Business Communication",
        "Professional Presentations",
        "Technical Support"
      ]
    },
    {
      name: "French",
      level: "Professional Working Proficiency",
      percentage: 85,
      skills: [
        "Technical Discussions",
        "Client Communication",
        "Documentation Review",
        "Project Coordination"
      ]
    },
    {
      name: "Kinyarwanda",
      level: "Native Proficiency",
      percentage: 100,
      skills: [
        "Technical Training",
        "Local Team Collaboration",
        "Community Engagement",
        "Cultural Expertise"
      ]
    },
    {
      name: "Swahili",
      level: "Professional Working Proficiency",
      percentage: 80,
      skills: [
        "Regional Communication",
        "Technical Discussions",
        "East African Collaboration",
        "Cultural Bridge"
      ]
    }
  ];

  const renderStars = (percentage) => {
    const stars = Math.round(percentage / 20);
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`w-5 h-5 ${
          index < stars ? 'text-amber-500' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-[#1a1a1a]" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Language Proficiency</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Multilingual capabilities enabling effective global communication
          </p>
        </motion.div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#2a2a2a] rounded-xl border border-amber-500/10 overflow-hidden"
            >
              {/* Language Header */}
              <div className="p-6 border-b border-amber-500/10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <FaLanguage className="w-6 h-6 text-amber-500" />
                    <h3 className="text-2xl font-bold text-white">{language.name}</h3>
                  </div>
                  <div className="flex gap-1">
                    {renderStars(language.percentage)}
                  </div>
                </div>
                <p className="text-amber-500">{language.level}</p>
              </div>

              {/* Proficiency Bar */}
              <div className="px-6 py-4">
                <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${language.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1 }}
                    className="h-full bg-amber-500 rounded-full"
                  />
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6 bg-[#252525]">
                <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                  <FaGlobe className="w-5 h-5 text-amber-500" />
                  Language Applications
                </h4>
                <ul className="space-y-3">
                  {language.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <FaCheck className="w-4 h-4 text-amber-500 mt-1" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cultural Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-[#2a2a2a] rounded-xl border border-amber-500/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Cultural Expertise</h3>
          <p className="text-gray-400">
            Beyond language proficiency, I bring deep cultural understanding that enhances 
            international collaboration and ensures effective cross-cultural communication in 
            technical environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages; 