
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CustomCodeSettings {
  head: string;
  header: string;
  footer: string;
  css: string;
  js: string;
}

const CustomCode = () => {
  const [settings, setSettings] = useState<CustomCodeSettings>({
    head: '',
    header: '',
    footer: '',
    css: '',
    js: ''
  });
  
  useEffect(() => {
    // Load settings from localStorage if they exist
    const savedSettings = localStorage.getItem('customCodeSettings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.error('Failed to parse saved custom code settings:', e);
      }
    }
  }, []);
  
  const handleChange = (section: keyof CustomCodeSettings, value: string) => {
    setSettings(prev => ({
      ...prev,
      [section]: value
    }));
  };
  
  const handleSave = () => {
    localStorage.setItem('customCodeSettings', JSON.stringify(settings));
    toast.success('Custom code settings saved');
    
    // In a real app, this would apply the custom code to the site
    // For this demo, we'll just show a success message
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Custom Code</h2>
          <p className="text-gray-600">Add custom HTML, CSS, and JavaScript to your site</p>
        </div>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
      
      <Tabs defaultValue="head">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="head">Head</TabsTrigger>
          <TabsTrigger value="header">Header</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
          <TabsTrigger value="css">Custom CSS</TabsTrigger>
          <TabsTrigger value="js">Custom JavaScript</TabsTrigger>
        </TabsList>
        
        <div className="mt-4 space-y-4">
          <TabsContent value="head">
            <p className="mb-2 text-sm text-gray-600">
              Code added here will be placed in the &lt;head&gt; section of your site.
              Useful for meta tags, analytics, and other scripts.
            </p>
            <textarea
              value={settings.head}
              onChange={(e) => handleChange('head', e.target.value)}
              className="font-mono h-[300px] w-full rounded-md border border-gray-300 p-4 text-sm"
              placeholder="<!-- Add custom head code here -->"
            />
          </TabsContent>
          
          <TabsContent value="header">
            <p className="mb-2 text-sm text-gray-600">
              Code added here will be displayed at the top of your site, just after the navigation.
            </p>
            <textarea
              value={settings.header}
              onChange={(e) => handleChange('header', e.target.value)}
              className="font-mono h-[300px] w-full rounded-md border border-gray-300 p-4 text-sm"
              placeholder="<!-- Add custom header code here -->"
            />
          </TabsContent>
          
          <TabsContent value="footer">
            <p className="mb-2 text-sm text-gray-600">
              Code added here will be displayed at the bottom of your site, just before the end of the body.
            </p>
            <textarea
              value={settings.footer}
              onChange={(e) => handleChange('footer', e.target.value)}
              className="font-mono h-[300px] w-full rounded-md border border-gray-300 p-4 text-sm"
              placeholder="<!-- Add custom footer code here -->"
            />
          </TabsContent>
          
          <TabsContent value="css">
            <p className="mb-2 text-sm text-gray-600">
              Add custom CSS styles to modify the appearance of your site.
            </p>
            <textarea
              value={settings.css}
              onChange={(e) => handleChange('css', e.target.value)}
              className="font-mono h-[300px] w-full rounded-md border border-gray-300 p-4 text-sm"
              placeholder="/* Add custom CSS here */

.custom-class {
  color: #ff0000;
}"
            />
          </TabsContent>
          
          <TabsContent value="js">
            <p className="mb-2 text-sm text-gray-600">
              Add custom JavaScript to enhance the functionality of your site.
            </p>
            <textarea
              value={settings.js}
              onChange={(e) => handleChange('js', e.target.value)}
              className="font-mono h-[300px] w-full rounded-md border border-gray-300 p-4 text-sm"
              placeholder="// Add custom JavaScript here

document.addEventListener('DOMContentLoaded', function() {
  console.log('Custom JavaScript loaded');
});"
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CustomCode;
