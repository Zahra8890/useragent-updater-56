
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import usePageTitle from '@/hooks/usePageTitle';

const Contact = () => {
  usePageTitle('Contact Us');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, this would send data to a server
      console.log('Form submitted:', formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
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
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Fill out the form below 
              and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name"
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject"
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message"
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={5} 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">admin@useragents.pro</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">
                    123 Web Developer Way<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Support Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 5pm PST<br />
                    We aim to respond to all inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
