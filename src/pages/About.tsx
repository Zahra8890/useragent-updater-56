
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              UserAgentDaily is dedicated to providing comprehensive information about user agents, 
              helping web developers understand and work with browser fingerprinting data.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Our mission is to simplify the complex world of user agents and provide developers with the tools 
              and knowledge they need to create robust, cross-browser compatible websites and applications.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Comprehensive database of user agent strings across devices and browsers</li>
              <li>Expert advice and articles on best practices for handling user agents</li>
              <li>Up-to-date information on browser trends and technologies</li>
              <li>Resources for testing and debugging cross-browser issues</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
            <p className="text-gray-700 mb-4">
              UserAgentDaily is maintained by a team of experienced web developers, browser compatibility 
              experts, and web standards advocates who are passionate about improving the web development 
              experience.
            </p>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
