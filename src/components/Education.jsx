import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBook, FaAward } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = [
    {
      school: "University of Rwanda",
      degree: "Bachelor of Science in Computer Science",
      period: "2021 - Present",
      location: "Huye, Rwanda",
      description: "Focusing on computer science fundamentals, network infrastructure, and software development.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Network Infrastructure Project Lead",
        "Active member of Computer Science Club"
      ],
      courses: [
        "Network Programming",
        "Database Management",
        "Software Engineering",
        "Web Development",
        "System Administration"
      ]
    },
    {
      school: "Ecole Des Science Byimana",
      degree: "Advanced Level Certificate - MCE",
      period: "2018 - 2020",
      location: "Muhanga, Rwanda",
      description: "Specialized in Mathematics, Computer Science, and Economics.",
      achievements: [
        "Top performer in Computer Science",
        "Mathematics Club Leader",
        "Technical Projects Coordinator"
      ],
      courses: [
        "Computer Fundamentals",
        "Mathematics",
        "Economics",
        "Programming Basics"
      ]
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
          <h2 className="text-4xl font-bold text-white mb-6">Education</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-amber-500/20" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex md:items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full" />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-[#2a2a2a] p-8 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                  {/* School Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <FaGraduationCap className="w-8 h-8 text-amber-500" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                      <p className="text-amber-500">{edu.degree}</p>
                    </div>
                  </div>

                  {/* Period and Location */}
                  <div className="flex items-center gap-4 text-gray-400 mb-4">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">{edu.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                      <FaAward className="w-5 h-5 text-amber-500" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Courses */}
                  <div>
                    <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                      <FaBook className="w-5 h-5 text-amber-500" />
                      Key Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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

export default Education; 