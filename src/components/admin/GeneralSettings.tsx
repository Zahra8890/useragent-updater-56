
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface SiteSettings {
  siteName: string;
  siteDescription: string;
  adminUsername: string;
  adminEmail: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const GeneralSettings = () => {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: 'User Agent Database',
    siteDescription: 'Daily updated user agents for web development',
    adminUsername: 'admin',
    adminEmail: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  useEffect(() => {
    // Load settings from localStorage if they exist
    const savedSettings = localStorage.getItem('siteSettings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(prev => ({
          ...prev,
          siteName: parsedSettings.siteName || prev.siteName,
          siteDescription: parsedSettings.siteDescription || prev.siteDescription,
          adminUsername: parsedSettings.adminUsername || prev.adminUsername,
          adminEmail: parsedSettings.adminEmail || prev.adminEmail
        }));
      } catch (e) {
        console.error('Failed to parse saved settings:', e);
      }
    }
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save general settings to localStorage
    const savedSettings = {
      siteName: settings.siteName,
      siteDescription: settings.siteDescription,
      adminUsername: settings.adminUsername,
      adminEmail: settings.adminEmail
    };
    
    localStorage.setItem('siteSettings', JSON.stringify(savedSettings));
    toast.success('Settings saved successfully');
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate current password
    const authData = localStorage.getItem('adminAuth');
    if (!authData) {
      toast.error('Authentication data not found');
      return;
    }
    
    // Validate new password
    if (settings.newPassword !== settings.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    
    if (settings.newPassword.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }
    
    // In a real app, this would update backend authentication
    // For this demo, we'll just pretend the password was updated
    toast.success('Password updated successfully');
    
    // Reset password fields
    setSettings(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }));
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Site Information</h2>
        <p className="text-gray-600">Update your website details</p>
        
        <form onSubmit={handleGeneralSubmit} className="mt-4 space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="siteName" className="mb-1 block text-sm font-medium text-gray-700">
                Site Name
              </label>
              <Input
                id="siteName"
                name="siteName"
                value={settings.siteName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="siteDescription" className="mb-1 block text-sm font-medium text-gray-700">
                Site Description
              </label>
              <Input
                id="siteDescription"
                name="siteDescription"
                value={settings.siteDescription}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="adminUsername" className="mb-1 block text-sm font-medium text-gray-700">
                Admin Username
              </label>
              <Input
                id="adminUsername"
                name="adminUsername"
                value={settings.adminUsername}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="adminEmail" className="mb-1 block text-sm font-medium text-gray-700">
                Admin Email
              </label>
              <Input
                id="adminEmail"
                name="adminEmail"
                type="email"
                value={settings.adminEmail}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>
          </div>
          
          <Button type="submit">Save Changes</Button>
        </form>
      </div>
      
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold">Change Password</h2>
        <p className="text-gray-600">Update your admin password</p>
        
        <form onSubmit={handlePasswordSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="currentPassword" className="mb-1 block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <Input
              id="currentPassword"
              name="currentPassword"
              type="password"
              value={settings.currentPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="newPassword" className="mb-1 block text-sm font-medium text-gray-700">
                New Password
              </label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                value={settings.newPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={settings.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <Button type="submit">Update Password</Button>
        </form>
      </div>
    </div>
  );
};

export default GeneralSettings;
