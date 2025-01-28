import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaNetworkWired, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'network', label: 'Network Infrastructure' },
    { id: 'software', label: 'Software Development' },
    { id: 'support', label: 'Technical Support' }
  ];

  const projects = [
    {
      title: "Wallet Web Application",
      category: "sotware",
      description: "A comprehensive personal finance management system built for tracking expenses, income, and budgeting across multiple accounts.",
      technologies: ["React", "Typescript", "Material UI", "Redux Toolkit", "FASTAPI", "PostgreSQL", "Pydantic for data validation", "Python", "JWT Auhtentication"],
      image: "https://plus.unsplash.com/premium_photo-1663931932648-cf5545116c35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbGV0JTIwd2VifGVufDB8fDB8fHww",
      github: "https://github.com/GasoreMoise/final-wallet-web-app.git",
      live: "https://final-wallet-web-app.vercel.app/",
      type: "Software Development"
    },
    {
      title: "Remote Interpretation Platform",
      category: "software",
      description: "Developed and maintained interpretation systems for remote communication, primarily using Zoom platform integration.",
      technologies: ["Zoom API", "WebRTC", "JavaScript", "Real-time Communication"],
      image: "https://plus.unsplash.com/premium_photo-1688678097958-0620a452f0e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVtb3RlJTIwaW50ZXJwcmV0YXRpb24lMjBwbGF0Zm9ybXxlbnwwfHwwfHx8MA%3D%3D",
      github: "https://github.com/yourusername/project2",
      live: "https://project-demo.com",
      type: "CCI Project"
    },
    // Add more projects...
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-24 bg-[#1a1a1a]" id="portfolio">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing my expertise in network infrastructure, software development, and technical solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterCategories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors
                ${filter === cat.id 
                  ? 'bg-amber-500 text-black' 
                  : 'bg-[#2a2a2a] text-gray-400 hover:bg-amber-500/10 hover:text-amber-500'}`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#2a2a2a] rounded-xl overflow-hidden"
    >
      {/* Project Image */}
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <span className="text-amber-500 text-sm font-medium mb-2 block">
          {project.type}
        </span>
        <h3 className="text-xl font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            <FaExternalLinkAlt className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 