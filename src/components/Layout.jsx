import { motion, AnimatePresence } from 'framer-motion';
import GlobalNav from './GlobalNav';
import Footer from './Footer';
import ThemeCustomizer from './ThemeCustomizer';
import LanguageSwitcher from './LanguageSwitcher';
import GlobalExperience from './GlobalExperience';
import { useTranslation } from 'react-i18next';
import { getLocalizedDirection } from '../utils/international';

const Layout = ({ children }) => {
  const { i18n } = useTranslation();

  return (
    <div 
      className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900"
      dir={getLocalizedDirection(i18n.language)}
    >
      <GlobalNav />
      <ThemeCustomizer />
      <div className="fixed left-6 top-24 z-50">
        <LanguageSwitcher />
      </div>
      <GlobalExperience />
      
      <AnimatePresence mode="wait">
        <motion.main 
          className="flex-grow pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout; 