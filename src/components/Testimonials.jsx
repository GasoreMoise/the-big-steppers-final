import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaQuoteLeft, FaStar, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      position: "Network Manager at AERA Ltd",
      company: "AERA Ltd",
      image: "/path-to-image.jpg",
      linkedIn: "https://linkedin.com/in/johnsmith",
      content: "Moise demonstrated exceptional skills in network infrastructure and security implementation. His attention to detail and problem-solving abilities made him an invaluable team member.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Project Lead",
      company: "CCI",
      image: "/path-to-image.jpg",
      linkedIn: "https://linkedin.com/in/sarahjohnson",
      content: "Working with Moise was a great experience. His multilingual abilities and technical expertise made our international projects run smoothly. Highly recommended for cross-cultural technical projects.",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      position: "Technical Director",
      company: "Tech Solutions Inc",
      image: "/path-to-image.jpg",
      linkedIn: "https://linkedin.com/in/davidchen",
      content: "Moise's comprehensive understanding of both technical and communication aspects makes him stand out. His ability to explain complex technical concepts clearly is remarkable.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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
          <h2 className="text-4xl font-bold text-white mb-6">Client Testimonials</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What professionals say about working with me
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 text-gray-400 hover:text-amber-500 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 text-gray-400 hover:text-amber-500 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#2a2a2a] p-8 md:p-12 rounded-xl border border-amber-500/10"
          >
            <div className="flex flex-col items-center text-center">
              {/* Quote Icon */}
              <FaQuoteLeft className="w-12 h-12 text-amber-500 mb-6" />

              {/* Testimonial Content */}
              <p className="text-xl text-gray-300 mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-amber-500" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <h4 className="text-white font-bold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-amber-500 mb-2">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-gray-400 mb-4">
                  {testimonials[currentIndex].company}
                </p>
                <a
                  href={testimonials[currentIndex].linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-amber-500' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 