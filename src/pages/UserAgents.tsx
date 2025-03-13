
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { userAgents } from '@/utils/userAgentData';
import SearchBar from '@/components/SearchBar';
import UserAgentCard from '@/components/UserAgentCard';

type CategoryMapping = {
  [key: string]: {
    title: string;
    description: string;
    os?: string[];
    device?: string;
  }
};

const UserAgents = () => {
  const { category } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAgents, setFilteredAgents] = useState(userAgents);
  
  const categoryMap: CategoryMapping = {
    desktop: {
      title: "Desktop User Agents",
      description: "User agents for desktop browsers across various operating systems",
      device: "Desktop"
    },
    mobile: {
      title: "Mobile User Agents",
      description: "User agents for mobile devices and smartphones",
      device: "Mobile"
    },
    tablet: {
      title: "Tablet User Agents",
      description: "User agents specific to tablet devices",
      device: "Tablet"
    },
    ios: {
      title: "iOS User Agents",
      description: "User agents for iPhones, iPads and other Apple iOS devices",
      os: ["iOS"]
    },
    android: {
      title: "Android User Agents",
      description: "User agents for Android phones, tablets and other devices",
      os: ["Android"]
    },
    windows: {
      title: "Windows User Agents",
      description: "User agents for Windows operating systems",
      os: ["Windows"]
    },
    macos: {
      title: "macOS User Agents",
      description: "User agents for Apple macOS operating systems",
      os: ["macOS"]
    },
    linux: {
      title: "Linux User Agents",
      description: "User agents for Linux-based operating systems",
      os: ["Linux"]
    },
    bot: {
      title: "Bot User Agents",
      description: "User agents for web crawlers, bots, and automated systems",
      device: "Bot"
    }
  };

  const categoryInfo = category && categoryMap[category] 
    ? categoryMap[category] 
    : { 
        title: "All User Agents", 
        description: "Complete database of user agents for various browsers, devices, and operating systems" 
      };

  useEffect(() => {
    let result = userAgents;
    
    // Filter by category
    if (category && categoryMap[category]) {
      result = userAgents.filter(ua => {
        if (categoryMap[category].device && ua.device === categoryMap[category].device) {
          return true;
        }
        if (categoryMap[category].os && categoryMap[category].os.some(os => ua.os.includes(os))) {
          return true;
        }
        return false;
      });
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(ua => 
        ua.name.toLowerCase().includes(query) ||
        ua.browser.toLowerCase().includes(query) ||
        ua.os.toLowerCase().includes(query) ||
        ua.value.toLowerCase().includes(query)
      );
    }
    
    setFilteredAgents(result);
  }, [category, searchQuery]);

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
            User Agents Database
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryInfo.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {categoryInfo.description}
          </p>
        </motion.div>
        
        <div className="mb-10">
          <SearchBar 
            onSearch={(query) => setSearchQuery(query)} 
            placeholder="Search user agents by name, browser, OS..."
          />
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Link
            to="/user-agents"
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              !category
                ? "bg-blue-50 text-blue-700"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            )}
          >
            All
          </Link>
          {Object.entries(categoryMap).map(([key, value]) => (
            <Link
              key={key}
              to={`/user-agents/${key}`}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                category === key
                  ? "bg-blue-50 text-blue-700"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              )}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.length > 0 ? (
            filteredAgents.map((userAgent, index) => (
              <UserAgentCard key={userAgent.id} userAgent={userAgent} index={index} />
            ))
          ) : (
            <div className="col-span-3 text-center py-16">
              <h3 className="text-xl font-medium text-gray-700 mb-4">No user agents found</h3>
              <p className="text-gray-500">
                Try adjusting your search query or category selection
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAgents;
