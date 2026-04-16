'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { RefreshCcw, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950 text-slate-100 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-navy-900 border border-purple-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-purple-500/10"
      >
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-red-400">
          <AlertTriangle size={32} />
        </div>
        
        <h2 className="text-2xl font-space-grotesk font-bold text-white mb-2">
          Something went wrong!
        </h2>
        
        <p className="text-slate-400 mb-8 text-sm">
          A critical rendering error occurred. Don't worry, it's been logged. You can try recovering the application below.
        </p>

        <button
          onClick={() => reset()}
          className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <RefreshCcw size={18} />
          <span>Try again</span>
        </button>
      </motion.div>
    </div>
  );
}
