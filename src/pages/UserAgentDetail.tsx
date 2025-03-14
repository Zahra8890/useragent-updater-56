import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { UserAgent, userAgents } from '@/utils/userAgentData';
import Footer from '@/components/Footer';

const UserAgentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [userAgent, setUserAgent] = useState<UserAgent | null>(null);
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    const agent = userAgents.find(ua => ua.id === id);
    setUserAgent(agent || null);
    
    if (agent) {
      document.title = `${agent.name} | UserAgents.Pro`;
    } else {
      document.title = 'User Agent Not Found | UserAgents.Pro';
    }
    
    return () => {
      document.title = 'UserAgents.Pro';
    };
  }, [id]);
  
  const copyToClipboard = () => {
    if (!userAgent) return;
    
    navigator.clipboard.writeText(userAgent.value);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  if (!userAgent) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-28 pb-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">User Agent Not Found</h1>
            <Link to="/" className="text-blue-500 hover:underline">
              Return to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const categoryColors = {
    desktop: 'bg-blue-50 text-blue-700',
    mobile: 'bg-emerald-50 text-emerald-700',
    tablet: 'bg-purple-50 text-purple-700',
    bot: 'bg-orange-50 text-orange-700'
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to User Agents
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <span className={cn(
              "text-xs font-medium px-2.5 py-0.5 rounded-full",
              categoryColors[userAgent.category]
            )}>
              {userAgent.category.charAt(0).toUpperCase() + userAgent.category.slice(1)}
            </span>
            <span className="text-sm text-gray-500">
              Last updated: {userAgent.lastUpdated}
            </span>
            <span className="text-sm font-medium text-blue-600 ml-auto">
              {userAgent.popularity.toFixed(1)}% popularity
            </span>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">{userAgent.name}</h1>
          
          <div className="glass-card rounded-xl overflow-hidden mb-8">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
              <span className="text-sm font-medium text-gray-700">User Agent String</span>
              <button 
                onClick={copyToClipboard}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                {copied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className="p-5 bg-white">
              <code className="text-sm text-gray-800 block overflow-x-auto whitespace-normal break-all">
                {userAgent.value}
              </code>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-card rounded-xl p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Browser</h3>
              <p className="text-lg font-semibold">{userAgent.browser}</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Operating System</h3>
              <p className="text-lg font-semibold">{userAgent.os}</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Device Type</h3>
              <p className="text-lg font-semibold">{userAgent.device}</p>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {userAgent.description}
            </p>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Similar User Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userAgents
              .filter(ua => ua.id !== userAgent.id && ua.category === userAgent.category)
              .slice(0, 2)
              .map(ua => (
                <Link 
                  key={ua.id}
                  to={`/user-agent/${ua.id}`}
                  className="glass-card rounded-xl p-4 transition-all hover:shadow-md"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{ua.name}</h3>
                    <span className={cn(
                      "text-xs font-medium px-2 py-0.5 rounded-full",
                      categoryColors[ua.category]
                    )}>
                      {ua.browser}
                    </span>
                  </div>
                  <code className="text-xs text-gray-600 block overflow-hidden whitespace-nowrap text-ellipsis">
                    {ua.value}
                  </code>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserAgentDetail;
