
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { adviceArticles } from '@/utils/userAgentData';

const AdviceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(adviceArticles.find(a => a.id === id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setArticle(adviceArticles.find(a => a.id === id));
  }, [id]);
  
  if (!article) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-28 pb-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <Link to="/advice" className="text-blue-500 hover:underline">
              Return to advice
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-20">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Link to="/advice" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Articles
          </Link>
          
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
          
          <div className="glass-card rounded-xl p-6 mb-8">
            <p className="text-xl text-gray-700 italic mb-0">
              {article.summary}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('```')) {
                const code = paragraph.replace(/```.*\n/, '').replace(/```$/, '');
                return (
                  <pre key={index} className="rounded-lg bg-gray-800 p-4 overflow-x-auto">
                    <code className="text-sm text-gray-200">{code}</code>
                  </pre>
                );
              }
              
              if (paragraph.startsWith('#')) {
                const heading = paragraph.replace(/^#+\s/, '');
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{heading}</h2>;
              }
              
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').map(item => item.replace(/^-\s/, ''));
                return (
                  <ul key={index} className="list-disc pl-5 space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                );
              }
              
              return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>;
            })}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {adviceArticles
                .filter(a => a.id !== article.id)
                .slice(0, 2)
                .map(a => (
                  <Link 
                    key={a.id}
                    to={`/advice/${a.id}`}
                    className="glass-card rounded-xl p-4 transition-all hover:shadow-md"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                        {a.category}
                      </span>
                    </div>
                    <h3 className="font-medium mb-2">{a.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {a.summary}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default AdviceDetail;
