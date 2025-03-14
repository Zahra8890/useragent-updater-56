
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Package, RefreshCw, X } from 'lucide-react';

interface Plugin {
  id: string;
  name: string;
  description: string;
  version: string;
  status: 'active' | 'inactive';
}

const PluginManager = () => {
  const [plugins, setPlugins] = useState<Plugin[]>(() => {
    const savedPlugins = localStorage.getItem('wordpressPlugins');
    return savedPlugins ? JSON.parse(savedPlugins) : [];
  });
  
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.name.endsWith('.zip')) {
        setUploadingFile(file);
      } else {
        toast.error('Please select a valid WordPress plugin (.zip file)');
      }
    }
  };
  
  const handleUpload = () => {
    if (!uploadingFile) {
      toast.error('Please select a plugin file first');
      return;
    }
    
    setIsUploading(true);
    
    // Simulate upload and installation process
    setTimeout(() => {
      // Generate a unique ID for the plugin
      const pluginId = Date.now().toString();
      
      // Extract plugin name from filename (removing .zip extension)
      const pluginName = uploadingFile.name.replace('.zip', '');
      
      const newPlugin: Plugin = {
        id: pluginId,
        name: pluginName,
        description: 'Custom WordPress plugin',
        version: '1.0.0',
        status: 'inactive'
      };
      
      const updatedPlugins = [...plugins, newPlugin];
      setPlugins(updatedPlugins);
      localStorage.setItem('wordpressPlugins', JSON.stringify(updatedPlugins));
      
      setUploadingFile(null);
      setIsUploading(false);
      toast.success(`Plugin "${pluginName}" installed successfully!`);
    }, 2000);
  };
  
  const togglePluginStatus = (pluginId: string) => {
    const updatedPlugins = plugins.map(plugin => {
      if (plugin.id === pluginId) {
        return {
          ...plugin,
          status: plugin.status === 'active' ? 'inactive' : 'active'
        };
      }
      return plugin;
    });
    
    setPlugins(updatedPlugins);
    localStorage.setItem('wordpressPlugins', JSON.stringify(updatedPlugins));
    
    const plugin = updatedPlugins.find(p => p.id === pluginId);
    if (plugin) {
      const action = plugin.status === 'active' ? 'activated' : 'deactivated';
      toast.success(`Plugin "${plugin.name}" ${action} successfully!`);
    }
  };
  
  const deletePlugin = (pluginId: string) => {
    const plugin = plugins.find(p => p.id === pluginId);
    const updatedPlugins = plugins.filter(plugin => plugin.id !== pluginId);
    
    setPlugins(updatedPlugins);
    localStorage.setItem('wordpressPlugins', JSON.stringify(updatedPlugins));
    
    if (plugin) {
      toast.success(`Plugin "${plugin.name}" removed successfully!`);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">WordPress Plugin Manager</h2>
          <p className="text-gray-600">Install and manage WordPress plugins</p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Upload New Plugin</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="plugin-file">Select Plugin (.zip)</Label>
              <div className="flex gap-3">
                <Input
                  id="plugin-file"
                  type="file"
                  accept=".zip"
                  onChange={handleFileChange}
                  className="flex-1"
                />
                <Button 
                  onClick={handleUpload} 
                  disabled={!uploadingFile || isUploading}
                >
                  {isUploading ? (
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Upload className="h-4 w-4 mr-2" />
                  )}
                  {isUploading ? 'Installing...' : 'Install'}
                </Button>
              </div>
              {uploadingFile && (
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  Selected: {uploadingFile.name}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => setUploadingFile(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Installed Plugins</h3>
        {plugins.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No plugins installed yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plugins.map(plugin => (
              <Card key={plugin.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{plugin.name}</h4>
                      <p className="text-sm text-gray-500">{plugin.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">Version {plugin.version}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          plugin.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {plugin.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant={plugin.status === 'active' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => togglePluginStatus(plugin.id)}
                      >
                        {plugin.status === 'active' ? 'Deactivate' : 'Activate'}
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => deletePlugin(plugin.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PluginManager;
