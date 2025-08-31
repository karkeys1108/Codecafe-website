import { useEffect, useState } from 'react';
import { X, Star, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GITHUB_REPO = 'karkeys1108/Codecafe-website';
const GITHUB_URL = `https://github.com/${GITHUB_REPO}`;

export default function GitHubStarPrompt() {
  const [isVisible, setIsVisible] = useState(true); 
  const [isStarred, setIsStarred] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    // Show the prompt immediately for testing
    // In production, you can change this back to:
    /*
    const timer = setTimeout(() => {
      const hasSeenPrompt = localStorage.getItem('githubPromptSeen');
      if (!hasSeenPrompt) {
        setIsVisible(true);
        localStorage.setItem('githubPromptSeen', 'true');
      }
    }, 60000); // 1 minute
    */

    // Fetch star count
    const fetchStarCount = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`);
        const data = await response.json();
        setStarCount(data.stargazers_count || 0);
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
        // Set a default star count if API fails
        setStarCount(0);
      }
    };

    fetchStarCount();

    return () => {
      // Clear the timer when component unmounts
      // clearTimeout(timer);
    };
  }, []);

  const handleStarClick = async () => {
    if (isStarred) return;
    
    setIsLoading(true);
    try {
      // Open GitHub in a new tab for starring
      window.open(`${GITHUB_URL}`, '_blank');
      setIsStarred(true);
      setStarCount(prev => prev + 1);
      
      // Hide the prompt after starring
      setTimeout(() => setIsVisible(false), 2000);
    } catch (error) {
      console.error('Error starring repository:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 w-80 overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />
                  <h3 className="font-medium text-gray-900 dark:text-white">Enjoying our website?</h3>
                </div>
                <button 
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                If you find this project useful, please consider giving it a star on GitHub to support our work! ⭐
              </p>
              <div className="flex items-center justify-between">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                >
                  View on GitHub
                </a>
                <button
                  onClick={handleStarClick}
                  disabled={isLoading || isStarred}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isStarred
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Star className={`w-4 h-4 mr-1.5 ${isStarred ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                  {isStarred ? 'Starred' : 'Star'}
                  {starCount > 0 && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-xs rounded-full bg-gray-200 dark:bg-gray-700">
                      {starCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
