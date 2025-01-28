import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">The Big Steppers</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering businesses through innovative digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/software" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">Software Development</Link></li>
              <li><Link to="/services/network" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">Network Engineering</Link></li>
              <li><Link to="/services/consulting" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">Business Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500"><FaTwitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500"><FaGithub className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500"><FaLinkedinIn className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500"><FaInstagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            © {year} The Big Steppers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 