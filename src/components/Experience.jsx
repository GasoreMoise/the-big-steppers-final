import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBuilding, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Data Entry & IT Support",
      company: "Rwanda Energy Group (REG)",
      location: "Gicumbi, Rwanda",
      period: "June 2024 - October 2024",
      description: "Handled data entry and IT support responsibilities with focus on accuracy and confidentiality.",
      responsibilities: [
        "Accurately input data into REG systems, databases and software applications",
        "Handled sensitive data mostly customer details and company metrics, with strict confidentiality"
      ],
      technologies: ["Database Management", "Data Entry", "IT Support", "Data Security"]
    },
    {
      title: "Network Technician",
      company: "AERA Ltd",
      location: "Gakenke, Rwanda",
      period: "August 2021 - February 2022",
      description: "Managed network infrastructure and performance monitoring.",
      responsibilities: [
        "Installed, configured, and maintained network hardware and software, ensuring high availability and performance",
        "Monitored network performance using tools like SolarWinds and Wireshark diagnosing and resolving issues promptly"
      ],
      technologies: ["SolarWinds", "Wireshark", "Network Configuration", "Hardware Installation"]
    },
    {
      title: "IT Support Specialist",
      company: "AERA Ltd",
      location: "Gakenke, Rwanda",
      period: "March 2022 - June 2022",
      description: "Provided comprehensive IT support and system maintenance.",
      responsibilities: [
        "Performed routine system backups and recovery tasks, ensuring data integrity and availability",
        "Administered software installations and updates, ensuring all systems were compliant with organizational standards"
      ],
      technologies: ["System Backup", "Software Administration", "IT Support", "System Maintenance"]
    }
  ];

  return (
    <section className="py-24 bg-[#1f1f1f]" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Professional Journey</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A timeline of my professional experience and key achievements
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-500/20" />

          {/* Experience Cards */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full" />

              {/* Experience Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className="bg-[#2a2a2a] p-8 rounded-xl hover:bg-[#2f2f2f] transition-colors border border-amber-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <FaBuilding className="text-amber-500 w-6 h-6" />
                    <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <FaBuilding className="w-4 h-4" />
                    <span>{experience.company}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <FaCalendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>

                  <p className="text-gray-300 mb-4">{experience.description}</p>

                  <ul className="space-y-2 mb-4">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 