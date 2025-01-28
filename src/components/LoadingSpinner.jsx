const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-primary-200 border-t-primary-500 animate-spin"></div>
        <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 