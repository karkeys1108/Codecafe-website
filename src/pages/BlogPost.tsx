import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';

// Import the blogPosts data (in a real app, this would come from an API)
import { blogPosts } from './Blog';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // In a real app, you would fetch the blog post from an API
    const foundPost = blogPosts.find(p => p.id === Number(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <span className="flex items-center mr-4">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime} read
              </span>
              <span className="ml-4 px-2 py-1 text-xs bg-amber-900/30 text-amber-400 rounded">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            
            <div 
              className="prose prose-invert max-w-none mt-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Share this post</h3>
              <div className="flex space-x-4">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPost;
