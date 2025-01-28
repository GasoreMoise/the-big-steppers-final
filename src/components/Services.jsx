import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaNetworkWired, 
  FaCode, 
  FaLanguage, 
  FaServer, 
  FaTools, 
  FaShieldAlt 
} from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Network Infrastructure",
      description: "Design and implementation of robust network solutions including TCP/IP, DNS, DHCP, and VPN configurations.",
      features: [
        "Network monitoring and maintenance",
        "Performance optimization",
        "Security implementation",
        "Infrastructure planning"
      ]
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Software Development",
      description: "Development of modern web applications with focus on clean code and best practices.",
      features: [
        "Frontend development",
        "Backend development",
        "Responsive design",
        "Version control",
        "Code optimization"
      ]
    },
    {
      icon: <FaLanguage className="w-8 h-8" />,
      title: "Language Services",
      description: "Professional interpretation and translation services in English, French, Kinyarwanda, and Swahili.",
      features: [
        "Real-time interpretation",
        "Document translation",
        "Cultural consultation",
        "Remote interpretation"
      ]
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: "System Administration",
      description: "Comprehensive system setup, maintenance, and optimization services.",
      features: [
        "System configuration",
        "Backup management",
        "Software deployment",
        "Performance monitoring"
      ]
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Technical Support",
      description: "Expert technical support and troubleshooting for various IT systems.",
      features: [
        "Issue resolution",
        "User training",
        "System maintenance",
        "Documentation"
      ]
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Network Security",
      description: "Implementation of robust security measures to protect network infrastructure.",
      features: [
        "Firewall configuration",
        "VPN setup",
        "Security monitoring",
        "Threat prevention"
      ]
    }
  ];

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
          <h2 className="text-4xl font-bold text-white mb-6">Services & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your technical needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#2a2a2a] p-8 rounded-xl h-full border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                {/* Icon */}
                <div className="text-amber-500 mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-500 text-black rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 