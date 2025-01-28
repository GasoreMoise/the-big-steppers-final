import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLanguage, FaReact, FaCertificate } from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "C++", level: 85 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 75 },
        { name: "PHP", level: 60 }
      ]
    },
    {
      icon: <FaReact className="w-8 h-8" />,
      title: "Frameworks & Technologies",
      skills: [
        { name: "React & React Native", level: 90 },
        { name: "GCP", level: 80 },
        { name: "Azure", level: 80 }
      ]
    },
    {
      icon: <FaLanguage className="w-8 h-8" />,
      title: "Languages",
      skills: [
        { name: "English", level: 95 },
        { name: "French", level: 75 },
        { name: "Kinyarwanda", level: 100 },
        { name: "Swahili", level: 75 }
      ]
    }
  ];

  const certifications = [
    {
      name: "Network+ Certification",
      issuer: "CompTIA",
      date: "2023",
      credentialId: "COMP001"
    },
    {
      name: "Cisco Certified Network Associate",
      issuer: "Cisco",
      date: "2023",
      credentialId: "CISCO001"
    }
    // Add more certifications as needed
  ];

  const achievements = [
    {
      title: "High School Valedictorian",
      description: "#1 in class"
    },
    {
      title: "Most Well Behaved Student",
      description: "1st place in high school"
    },
    {
      title: "BDF ICT Competition",
      description: "Won with perfect score (100%)"
    },
    {
      title: "National Math Olympiad",
      description: "2019 Finalist"
    }
  ];

  const renderAchievements = () => (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-[#2a2a2a] p-4 rounded-lg">
            <h4 className="text-amber-500 font-bold">{achievement.title}</h4>
            <p className="text-gray-400">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

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
          <h2 className="text-4xl font-bold text-white mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#2a2a2a] p-8 rounded-xl border border-amber-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-amber-500">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">{skill.name}</span>
                      <span className="text-amber-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-amber-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-[#2a2a2a] p-8 rounded-xl border border-amber-500/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <FaCertificate className="w-8 h-8 text-amber-500" />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-[#1a1a1a] rounded-lg border border-amber-500/10"
              >
                <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-amber-500 mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">Issued: {cert.date}</p>
                <p className="text-gray-400 text-sm">Credential ID: {cert.credentialId}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {renderAchievements()}
      </div>
    </section>
  );
};

export default Skills; 