
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import UserAgentCard from '@/components/UserAgentCard';
import AdviceSection from '@/components/AdviceSection';
import Footer from '@/components/Footer';
import { userAgents } from '@/utils/userAgentData';

const Index = () => {
  const [searchResults, setSearchResults] = useState(userAgents.slice(0, 6));
  
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'UserAgents.Pro | Latest User Agent Strings';
  }, []);
  
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(userAgents.slice(0, 6));
      return;
    }
    
    const results = userAgents.filter(ua => 
      ua.name.toLowerCase().includes(query.toLowerCase()) ||
      ua.value.toLowerCase().includes(query.toLowerCase()) ||
      ua.browser.toLowerCase().includes(query.toLowerCase()) ||
      ua.os.toLowerCase().includes(query.toLowerCase()) ||
      ua.device.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
                Daily Updated
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stay Current with Latest <span className="text-gradient">User Agents</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Access the most up-to-date user agent strings for all major browsers and devices, updated daily for web developers and testers.
              </p>
            </motion.div>
            
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>
      
      {/* Recent User Agents Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Recent User Agents
            </h2>
            <p className="text-gray-600">
              Browse the most recent and widely used user agent strings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.length > 0 ? (
              searchResults.map((ua, index) => (
                <UserAgentCard key={ua.id} userAgent={ua} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500">No user agents found matching your search</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Advice Section */}
      <AdviceSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
