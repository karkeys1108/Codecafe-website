import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';

// Sample blog post data - replace with your actual data source
export const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Challenges Freelancers Face When Working with Clients',
    excerpt: 'Discover the most common challenges freelancers encounter in client relationships and how to overcome them',
    date: '2023-09-15',
    readTime: '8 min',
    category: 'Freelancing',
    content: `
      <h2>Top 10 Challenges Freelancers Face When Working with Clients</h2>
      <p>Freelancing offers incredible freedom, but it comes with its own set of challenges. Here are the top 10 issues freelancers commonly face when working with clients:</p>
      
      <h3>1. Scope Creep</h3>
      <p>Clients often request additional work beyond the original agreement. Set clear project boundaries and have a process for handling additional requests.</p>
      
      <h3>2. Late Payments</h3>
      <p>Delayed payments can disrupt cash flow. Implement clear payment terms, request deposits, and consider using escrow services.</p>
      
      <h3>3. Communication Gaps</h3>
      <p>Miscommunication can lead to project delays. Establish clear communication channels and regular check-ins.</p>
      
      <h3>4. Unrealistic Expectations</h3>
      <p>Clients may expect more than what was agreed upon. Always provide detailed proposals and manage expectations from the start.</p>
      
      <h3>5. Finding Quality Clients</h3>
      <p>Not all clients are created equal. Learn to identify red flags and focus on building long-term relationships with great clients.</p>
      
      <h3>6. Time Management</h3>
      <p>Juggling multiple clients requires excellent time management skills. Use tools and techniques to stay organized.</p>
      
      <h3>7. Setting the Right Price</h3>
      <p>Many freelancers struggle with pricing their services. Research market rates and value your time appropriately.</p>
      
      <h3>8. Handling Difficult Clients</h3>
      <p>Learn to identify and manage challenging client relationships professionally.</p>
      
      <h3>9. Maintaining Work-Life Balance</h3>
      <p>Freelancing can blur the lines between work and personal life. Set boundaries and stick to them.</p>
      
      <h3>10. Self-Promotion</h3>
      <p>Consistently finding new clients requires ongoing marketing efforts. Build your personal brand and maintain an online presence.</p>
    `
  },
  {
    id: 2,
    title: 'The Global Freelance Economy: Statistics and Impact',
    excerpt: 'Explore the latest statistics and trends in the global freelance workforce',
    date: '2023-10-05',
    readTime: '10 min',
    category: 'Freelancing',
    content: `
      <h2>The Global Freelance Economy: Statistics and Impact</h2>
      <p>The freelance economy has been growing at an unprecedented rate. Here are some key statistics and insights:</p>
      
      <h3>Global Freelance Statistics</h3>
      <ul>
        <li>There are approximately 1.57 billion freelancers worldwide (2023)</li>
        <li>The freelance market is projected to reach $455.2 billion by 2023</li>
        <li>59% of companies now use flexible talent to stay competitive</li>
        <li>Freelancers contribute over $1.4 trillion to the U.S. economy annually</li>
      </ul>
      
      <h3>Regional Breakdown</h3>
      <p>Freelancing is growing globally, with significant growth in regions like:</p>
      <ul>
        <li>North America: 36% of workers freelance</li>
        <li>Europe: 28% of workers freelance</li>
        <li>Asia: Rapidly growing freelance market with over 40% of global freelancers</li>
      </ul>
      
      <h3>Impact on Traditional Employment</h3>
      <p>The rise of freelancing is changing how we think about work, with more professionals choosing flexibility over traditional 9-5 jobs.</p>
      
      <h3>Future Projections</h3>
      <p>By 2025, it's estimated that 50% of the U.S. workforce will be freelancing in some capacity.</p>
    `
  },
  {
    id: 3,
    title: 'The Vital Role of Websites and Applications in Today\'s World',
    excerpt: 'Understanding how digital platforms are transforming businesses and daily life',
    date: '2023-10-20',
    readTime: '12 min',
    category: 'Web Development',
    content: `
      <h2>The Vital Role of Websites and Applications in Today's World</h2>
      <p>In our increasingly digital world, websites and applications have become essential tools for businesses and individuals alike.</p>
      
      <h3>Business Impact</h3>
      <ul>
        <li>88% of consumers research products online before purchasing</li>
        <li>Businesses with mobile-optimized websites see 15% higher conversion rates</li>
        <li>75% of users judge a company's credibility based on their website design</li>
      </ul>
      
      <h3>E-commerce Growth</h3>
      <p>E-commerce sales are expected to reach $8.1 trillion by 2026, with mobile commerce accounting for 72.9% of all e-commerce sales.</p>
      
      <h3>Mobile Applications</h3>
      <p>There are currently 6.8 billion smartphone users globally, with the average person spending over 4 hours daily on mobile apps.</p>
      
      <h3>Future Trends</h3>
      <p>Emerging technologies like AI, AR/VR, and blockchain are set to further transform how we interact with digital platforms.</p>
    `
  }
];

const Blog = () => {
  return (
    <PageTransition>
      <section className="pt-28 pb-12 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 text-center"
          >
            <h1 className="text-3xl font-bold text-white">
              Our <span className="text-amber-400">Blog</span>
            </h1>
            <p className="text-gray-400 mt-2">Insights and updates from our team</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-amber-400/30 transition-colors p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-amber-400 bg-amber-900/30 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500 space-x-2">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm text-amber-400 hover:text-white transition-colors group-hover:translate-x-1"
                >
                  Read more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
