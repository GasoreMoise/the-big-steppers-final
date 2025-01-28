import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const result = await emailjs.sendForm(
        'service_lzuq272', // Replace with your Service ID
        'template_rh7zijv', // Replace with your Template ID
        form.current,
        'dK62YN1nX5o2Rv2Ma' // Replace with your Public Key
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "gasorenshuti34@gmail.com",
      link: "mailto:gasorenshuti34@gmail.com"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+250788615083",
      link: "tel:+250788615083"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      value: "KK 413 St, Rwanda",
      link: "https://maps.google.com/?q=KK+413+St,Rwanda"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/GasoreMoise",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/moise-gasore-0b2561235",
      label: "LinkedIn"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      url: "https://wa.me/+250788615083",
      label: "WhatsApp"
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
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss your project or explore potential opportunities for collaboration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-amber-500/10 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-amber-500/10 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-amber-500/10 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-amber-500/10 rounded-lg focus:outline-none focus:border-amber-500 text-white resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              {submitStatus.message && (
                <div className={`flex items-center gap-2 p-4 rounded-lg ${
                  submitStatus.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}>
                  {submitStatus.success ? (
                    <FaCheckCircle className="w-5 h-5" />
                  ) : (
                    <FaExclamationCircle className="w-5 h-5" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-amber-500 text-black rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-[#2a2a2a] p-8 rounded-xl border border-amber-500/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <div className="text-amber-500">{info.icon}</div>
                    <div>
                      <p className="font-medium text-white">{info.title}</p>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#2a2a2a] p-8 rounded-xl border border-amber-500/10">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#1a1a1a] rounded-lg text-gray-400 hover:text-amber-500 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-[#2a2a2a] p-8 rounded-xl border border-amber-500/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-white font-medium">Currently Available for Projects</p>
              </div>
              <p className="text-gray-400">
                I'm always interested in hearing about new projects and opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


