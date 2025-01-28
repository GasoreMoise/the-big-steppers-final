import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGlobeAmericas, FaClock, FaMoneyBillWave, FaShareAlt } from 'react-icons/fa';
import { formatCurrency } from '../utils/international';

const GlobalExperience = () => {
  const [localTime, setLocalTime] = useState(new Date());
  const [userRegion, setUserRegion] = useState(null);
  const [localCurrency, setLocalCurrency] = useState('USD');
  const [socialPlatforms, setSocialPlatforms] = useState([]);
  const location = useLocation();

  // Regional social media platforms
  const regionalPlatforms = {
    CN: ['WeChat', 'Weibo', 'Douyin'],
    KR: ['KakaoTalk', 'Line', 'Band'],
    JP: ['Line', 'Twitter', 'Yahoo Japan'],
    IN: ['WhatsApp', 'ShareChat', 'JioChat'],
    RU: ['VKontakte', 'Telegram', 'Odnoklassniki'],
    BR: ['WhatsApp', 'Facebook', 'Instagram'],
    SA: ['WhatsApp', 'Snapchat', 'Instagram'],
    NG: ['WhatsApp', 'Facebook', 'Instagram'],
    // Add more regions
  };

  useEffect(() => {
    // Detect user's region and set appropriate platforms
    const detectRegion = async () => {
      try {
        const response = await fetch('https://ip-api.com/json/');
        const data = await response.json();
        setUserRegion(data.countryCode);
        setSocialPlatforms(regionalPlatforms[data.countryCode] || ['Facebook', 'Twitter', 'LinkedIn']);
      } catch (error) {
        console.error('Error detecting region:', error);
      }
    };

    detectRegion();
  }, []);

  // Update local time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4">
        <div className="space-y-4">
          {/* Local Time */}
          <div className="flex items-center space-x-3">
            <FaClock className="text-primary-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {localTime.toLocaleTimeString()}
            </span>
          </div>

          {/* Currency Converter */}
          <div className="flex items-center space-x-3">
            <FaMoneyBillWave className="text-primary-500" />
            <select
              value={localCurrency}
              onChange={(e) => setLocalCurrency(e.target.value)}
              className="text-sm bg-transparent"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
              <option value="GBP">GBP</option>
              {/* Add more currencies */}
            </select>
          </div>

          {/* Regional Social Share */}
          <div className="flex items-center space-x-3">
            <FaShareAlt className="text-primary-500" />
            <div className="flex space-x-2">
              {socialPlatforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => handleShare(platform)}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GlobalExperience; 