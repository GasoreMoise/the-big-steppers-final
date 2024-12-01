import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fetchImage = async (query) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${query}&client_id=YOUR_ACCESS_KEY`
  );
  const data = await response.json();
  return data[0]?.urls?.regular; // Get the image URL
};

const blogs = [
  {
    id: 1,
    title: 'Understanding the Basics of React',
    excerpt: 'Learn the fundamental concepts of React.js...',
    imageQuery: 'reactjs', // Tag for the image
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Explore the latest trends in web development...',
    imageQuery: 'web development', // Tag for the image
  },
  // Add more blogs if necessary
];

const BlogList = () => {
  const [blogImages, setBlogImages] = useState([]);

  useEffect(() => {
    const getBlogImages = async () => {
      const images = await Promise.all(
        blogs.map(async (blog) => {
          const image = await fetchImage(blog.imageQuery);
          return { ...blog, image }; // Add image URL to the blog data
        })
      );
      setBlogImages(images); // Set the images to state
    };

    getBlogImages();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogImages.map((blog) => (
        <motion.div
          key={blog.id}
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
          <p className="text-gray-600">{blog.excerpt}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogList;

