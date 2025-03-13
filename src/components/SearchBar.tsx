
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ 
  onSearch, 
  placeholder = "Search user agents...", 
  className 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <motion.form 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="relative group"
      >
        <div className={cn(
          "absolute inset-0 rounded-xl transition-all duration-300",
          isFocused ? "bg-blue-100/30 shadow-lg" : "bg-gray-100/50"
        )} />
        
        <div className="relative flex items-center">
          <div className="absolute left-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={cn(
              "w-full rounded-xl pl-12 pr-4 py-4 text-gray-700 bg-transparent",
              "placeholder:text-gray-400 focus:outline-none",
              "transition-all duration-300 backdrop-blur-sm",
              "border border-gray-200/50"
            )}
          />
          
          <button
            type="submit"
            className={cn(
              "absolute right-3 px-4 py-2 rounded-lg",
              "bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium",
              "transition-all duration-300",
              "shadow-sm hover:shadow"
            )}
          >
            Search
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default SearchBar;
