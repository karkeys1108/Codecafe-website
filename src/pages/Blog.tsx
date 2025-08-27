import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';

// Sample blog post data - replace with your actual data source
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React 18',
    excerpt: 'Learn about the latest features and improvements in React 18 and how to upgrade your applications.',
    date: '2023-05-15',
    readTime: '5 min read',
    category: 'Development',
    image: '/images/blog/react-18.jpg', // Make sure to add this image to your public folder
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development in 2023.',
    date: '2023-06-22',
    readTime: '8 min read',
    category: 'Web',
    image: '/images/blog/web-future.jpg',
  },
  {
    id: 3,
    title: 'UI/UX Best Practices',
    excerpt: 'Essential UI/UX design principles that every developer should know to create better user experiences.',
    date: '2023-07-10',
    readTime: '6 min read',
    category: 'Design',
    image: '/images/blog/ui-ux.jpg',
  },
];

const Blog = () => {
  return (
    <PageTransition>
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-amber-400">Blog</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Insights, tutorials, and updates from our team of experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-amber-400 bg-amber-900/30 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center mt-4 text-amber-400 hover:text-white group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors duration-300 flex items-center mx-auto">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
