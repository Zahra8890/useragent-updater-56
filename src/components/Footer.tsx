
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Page {
  id: string;
  title: string;
  slug: string;
  position: 'top' | 'bottom';
}

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState([
    { id: '4', title: 'About Us', slug: '/about' },
    { id: '5', title: 'Contact Us', slug: '/contact' },
    { id: '6', title: 'Privacy Policy', slug: '/privacy' },
  ]);

  useEffect(() => {
    // Load navigation items from localStorage if available
    const savedPages = localStorage.getItem('sitePages');
    if (savedPages) {
      const parsedPages = JSON.parse(savedPages);
      // Get only bottom navigation items
      const bottomNavItems = parsedPages.filter((page: Page) => page.position === 'bottom');
      if (bottomNavItems.length > 0) {
        setFooterLinks(bottomNavItems.map((page: Page) => ({
          id: page.id,
          title: page.title,
          slug: page.slug
        })));
      }
    }
  }, []);

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">UA</span>
              </div>
              <span className="font-medium text-lg">UserAgents.Pro</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 max-w-md">
              The comprehensive resource for web developers to understand and work with user agent strings.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.id}
                to={link.slug}
                className="text-gray-600 hover:text-blue-600 text-sm font-medium"
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/admin"
              className="text-gray-600 hover:text-blue-600 text-sm font-medium"
            >
              Admin
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} UserAgents.Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
