
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { adviceArticles } from '@/utils/userAgentData';

const AdviceSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
            Expert Advice
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Web Development Insights
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover best practices, tips, and strategies for handling user agents and optimizing your websites for different browsers and devices.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {adviceArticles.slice(0, 3).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Link 
                to={`/advice/${article.id}`}
                className={cn(
                  "block h-full rounded-xl p-6",
                  "bg-white backdrop-blur-sm border border-gray-100",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:border-blue-100",
                  "glass-card"
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.readTime} read
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.summary}
                </p>
                
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {article.publishDate}
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    Read article →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/advice"
            className={cn(
              "inline-flex items-center px-6 py-3 rounded-full",
              "bg-blue-50 text-blue-700 hover:bg-blue-100",
              "font-medium transition-all duration-300"
            )}
          >
            View all articles
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdviceSection;
