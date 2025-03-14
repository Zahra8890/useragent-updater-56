
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import usePageTitle from '@/hooks/usePageTitle';

const Privacy = () => {
  usePageTitle('Privacy Policy');
  
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p className="mb-4">
              At UserAgents.Pro, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Information you provide to us, such as names, email addresses, and other contact details when you contact us.</li>
              <li>Technical data, including internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li>Usage data, which includes information about how you use our website and services.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Provide, improve, and develop our website and services.</li>
              <li>Communicate with you, including responding to your inquiries.</li>
              <li>Analyze how visitors use our website to improve the user experience.</li>
              <li>Protect our website, services, and users from fraudulent or illegal activity.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
            <p className="mb-4">
              Our website uses cookies to distinguish you from other users of our website. This helps us provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p className="mb-4">
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mb-4">
              Email: admin@useragnts.pro<br />
              Address: 123 Web Developer Way, San Francisco, CA 94107, United States
            </p>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
