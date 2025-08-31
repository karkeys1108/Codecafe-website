import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function PolicyLayout({ title, lastUpdated, icon, children }: PolicyLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
            <div className="flex items-center">
              <div className="p-3 bg-white/20 rounded-lg mr-4">
                {icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-blue-100">Last Updated: {lastUpdated}</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const PolicySection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mb-8 last:mb-0">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
      {title}
    </h2>
    <div className="prose dark:prose-invert max-w-none">
      {children}
    </div>
  </section>
);
