import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import RegionalStats from './RegionalStats';

const GlobalHero = () => {
  const [activeRegion, setActiveRegion] = useState('global');
  const [timelapseActive, setTimelapseActive] = useState(true);

  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Global Solutions for Modern Business
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering businesses worldwide with innovative technology solutions
          </p>
          <RegionalStats />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalHero; 