import React from 'react';

const RegionalStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
        <p className="text-gray-600 dark:text-gray-300">Present in 150+ countries</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Active Users</h3>
        <p className="text-gray-600 dark:text-gray-300">10M+ daily users</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
        <p className="text-gray-600 dark:text-gray-300">99.9% uptime</p>
      </div>
    </div>
  );
};

export default RegionalStats; 