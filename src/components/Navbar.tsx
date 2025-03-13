
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

interface Page {
  id: string;
  title: string;
  slug: string;
  position: 'top' | 'bottom';
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [navItems, setNavItems] = useState([
    { id: '1', title: 'Home', slug: '/', position: 'top' },
    { id: '2', title: 'User Agents', slug: '/user-agents', position: 'top' },
    { id: '3', title: 'Advice', slug: '/advice', position: 'top' },
  ]);
  
  useEffect(() => {
    // Load navigation items from localStorage if available
    const savedPages = localStorage.getItem('sitePages');
    if (savedPages) {
      const parsedPages = JSON.parse(savedPages);
      // Get only top navigation items
      const topNavItems = parsedPages.filter((page: Page) => page.position === 'top');
      if (topNavItems.length > 0) {
        setNavItems(topNavItems.map((page: Page) => ({
          id: page.id,
          title: page.title,
          slug: page.slug
        })));
      }
    }
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 backdrop-blur-lg transition-all duration-300",
        scrolled 
          ? "bg-white/80 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">UA</span>
          </div>
          <span className="font-medium text-lg">UserAgentDaily</span>
        </Link>
        
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.id}
              to={item.slug}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                location.pathname === item.slug
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu placeholder - could be expanded in the future */}
          <button className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
