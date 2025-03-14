
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import AdminLogin from '@/components/admin/AdminLogin';
import GeneralSettings from '@/components/admin/GeneralSettings';
import UserAgentManager from '@/components/admin/UserAgentManager';
import ContentEditor from '@/components/admin/ContentEditor';
import CustomCode from '@/components/admin/CustomCode';
import AutoUpdate from '@/components/admin/AutoUpdate';
import PageEditor from '@/components/admin/PageEditor';
import PluginManager from '@/components/admin/PluginManager';
import usePageTitle from '@/hooks/usePageTitle';

const Admin = () => {
  usePageTitle('Admin Dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth) {
      try {
        const authData = JSON.parse(adminAuth);
        if (authData.authenticated && authData.expiry > Date.now()) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('adminAuth');
        }
      } catch (e) {
        localStorage.removeItem('adminAuth');
      }
    }
    setIsLoading(false);
  }, []);
  
  const handleLogin = (username: string, password: string) => {
    // Basic authentication (in a real app, this would be a backend call)
    if (username === 'admin' && password === 'admin') {
      const authData = {
        authenticated: true,
        username: 'admin',
        expiry: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      };
      localStorage.setItem('adminAuth', JSON.stringify(authData));
      setIsAuthenticated(true);
      toast.success('Login successful');
    } else {
      toast.error('Invalid username or password');
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };
  
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthenticated ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your website content and settings</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/')}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                View Site
              </button>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          </div>
          
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <Tabs defaultValue="general">
              <TabsList className="mb-6 grid w-full grid-cols-7 gap-4">
                <TabsTrigger value="general">General Settings</TabsTrigger>
                <TabsTrigger value="pages">Page Editor</TabsTrigger>
                <TabsTrigger value="user-agents">User Agents</TabsTrigger>
                <TabsTrigger value="content">Content Editor</TabsTrigger>
                <TabsTrigger value="custom-code">Custom Code</TabsTrigger>
                <TabsTrigger value="plugins">Plugins</TabsTrigger>
                <TabsTrigger value="auto-update">Auto Update</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <GeneralSettings />
              </TabsContent>
              
              <TabsContent value="pages">
                <PageEditor />
              </TabsContent>
              
              <TabsContent value="user-agents">
                <UserAgentManager />
              </TabsContent>
              
              <TabsContent value="content">
                <ContentEditor />
              </TabsContent>
              
              <TabsContent value="custom-code">
                <CustomCode />
              </TabsContent>
              
              <TabsContent value="plugins">
                <PluginManager />
              </TabsContent>
              
              <TabsContent value="auto-update">
                <AutoUpdate />
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Admin;
