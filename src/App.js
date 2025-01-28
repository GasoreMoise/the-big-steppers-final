import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";
import ProductDetails from "./components/ProductDetails";
import Blog from "./components/Blog";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import { init } from '@emailjs/browser';

// Initialize EmailJS with your public key
init("dK62YN1nX5o2Rv2Ma");

const App = () => {
  
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/languages" element={<Languages />} />
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



