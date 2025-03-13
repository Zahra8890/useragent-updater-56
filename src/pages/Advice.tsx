
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { adviceArticles } from '@/utils/userAgentData';

const Advice = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [...new Set(adviceArticles.map(article => article.category))];
  
  const filteredArticles = selectedCategory
    ? adviceArticles.filter(article => article.category === selectedCategory)
    : adviceArticles;
    
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
            Web Development
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Expert Advice & Articles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn best practices and stay updated with the latest trends in user agent handling and web development.
          </p>
        </motion.div>
        
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              selectedCategory === null
                ? "bg-blue-50 text-blue-700"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            )}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                selectedCategory === category
                  ? "bg-blue-50 text-blue-700"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <Link 
                to={`/advice/${article.id}`}
                className={cn(
                  "block rounded-xl p-6",
                  "bg-white backdrop-blur-sm border border-gray-100",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:border-blue-100",
                  "glass-card"
                )}
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.publishDate}
                  </span>
                  <span className="text-xs text-gray-500 ml-auto">
                    {article.readTime} read
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {article.summary}
                </p>
                
                <span className="inline-flex items-center text-sm font-medium text-blue-600">
                  Read article
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advice;
