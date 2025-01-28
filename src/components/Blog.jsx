import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt: "A deep dive into modern web development practices and how to build performant applications using React and Node.js ecosystem.",
      category: "Development",
      date: "March 25, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBhbmQlMjBub2RlJTIwanN8ZW58MHx8MHx8fDA%3D",
      tags: ["React", "Node.js", "Web Development", "JavaScript"],
      author: "Gasore Moise"
    },
    {
      id: 2,
      title: "Tennis Analytics: Leveraging Technology in Sports",
      excerpt: "How modern technology and data analytics are transforming tennis training and performance analysis.",
      category: "Sports Tech",
      date: "March 22, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1631490238090-0b1d9267cb3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neSUyMGluJTIwc3BvcnRzfGVufDB8fDB8fHww",
      tags: ["Tennis", "Sports Analytics", "Technology", "Data Science"],
      author: "Gasore Moise"
    },
    {
      id: 3,
      title: "The Evolution of Soccer Technology",
      excerpt: "Exploring how VAR, goal-line technology, and other innovations are revolutionizing soccer.",
      category: "Sports Tech",
      date: "March 18, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1625216109110-d444d70ff665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29jY2VyJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Soccer", "VAR", "Sports Innovation", "Technology"],
      author: "Gasore Moise"
    },
    {
      id: 4,
      title: "Python for Data Analysis in Sports",
      excerpt: "Using Python to analyze sports performance data and create meaningful insights for athletes and coaches.",
      category: "Programming",
      date: "March 15, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGFuYWx5c2lzJTIwaW4lMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D",
      tags: ["Python", "Data Analysis", "Sports", "Programming"],
      author: "Gasore Moise"
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Development", count: blogPosts.filter(post => post.category === "Development").length },
    { name: "Sports Tech", count: blogPosts.filter(post => post.category === "Sports Tech").length },
    { name: "Programming", count: blogPosts.filter(post => post.category === "Programming").length }
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
          <h2 className="text-4xl font-bold text-white mb-6">Technical Blog</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights from my experiences in network infrastructure, multilingual technical support, 
            and cross-cultural software development
          </p>
        </motion.div>

        {/* Categories with Count */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-6 py-2 rounded-full text-sm font-medium transition-colors
                hover:bg-amber-500 hover:text-black
                bg-[#2a2a2a] text-gray-400 flex items-center gap-2"
            >
              {category.name}
              <span className="bg-amber-500/10 px-2 py-0.5 rounded-full text-amber-500">
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Featured Post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-[#2a2a2a] rounded-xl overflow-hidden group"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-amber-500">{blogPosts[0].category}</span>
                <span className="text-gray-400 text-sm flex items-center gap-2">
                  <FaCalendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-400 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-gray-400">
                  <FaClock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link
                  to={`/blog/${blogPosts[0].id}`}
                  className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Read Article
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#2a2a2a] rounded-xl overflow-hidden group"
            >
              {/* Image */}
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a] to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-amber-500">{post.category}</span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaCalendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Time & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaClock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    Read More
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-[#2a2a2a] p-8 rounded-xl border border-amber-500/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6">
            Subscribe to my newsletter for the latest articles and updates
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-amber-500/10 rounded-lg focus:outline-none focus:border-amber-500 text-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-amber-500 text-black rounded-lg font-medium hover:bg-amber-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;