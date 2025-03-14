
import { useEffect } from 'react';

/**
 * Hook to set the document title with a standard format
 * @param title - The page-specific part of the title
 * @param withSuffix - Whether to append the site name (default: true)
 */
export const usePageTitle = (title: string, withSuffix: boolean = true) => {
  useEffect(() => {
    // Set document title with optional suffix
    document.title = withSuffix ? `${title} | UserAgents.Pro` : title;
    
    // Cleanup function to reset title when component unmounts
    return () => {
      // This is optional since the next page will set its own title
    };
  }, [title, withSuffix]);
};

export default usePageTitle;
