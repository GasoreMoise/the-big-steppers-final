import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import Blog from "./components/Blog";
import Post from "./components/Post";
import NotFound from "./components/NotFound";

const App = () => {
  
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="post/:postId" element={<Post />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );
};

export default App;



