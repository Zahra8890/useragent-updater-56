
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Download, Check, X, AlertCircle } from 'lucide-react';

type PluginStatus = "active" | "inactive";

interface Plugin {
  id: string;
  name: string;
  description: string;
  version: string;
  status: PluginStatus;
}

const PluginManager = () => {
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading plugins
    const timer = setTimeout(() => {
      const demoPlugins: Plugin[] = [
        {
          id: 'social-share',
          name: 'Social Share Buttons',
          description: 'Adds customizable social sharing buttons to your user agent pages',
          version: '1.2.0',
          status: 'active'
        },
        {
          id: 'advanced-analytics',
          name: 'Advanced Analytics',
          description: 'Enhanced analytics and tracking for user agent usage',
          version: '2.1.3',
          status: 'active'
        },
        {
          id: 'device-icons',
          name: 'Device Icons Pack',
          description: 'Adds high-quality device and browser icons to user agents',
          version: '1.0.5',
          status: 'inactive'
        },
        {
          id: 'comparison-tool',
          name: 'User Agent Comparison',
          description: 'Allows visitors to compare multiple user agents side by side',
          version: '0.9.1',
          status: 'inactive'
        }
      ];
      
      setPlugins(demoPlugins);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const togglePlugin = (id: string) => {
    setPlugins(prev => prev.map(plugin => 
      plugin.id === id ? 
        { ...plugin, status: plugin.status === 'active' ? 'inactive' : 'active' } : 
        plugin
    ));
    
    const plugin = plugins.find(p => p.id === id);
    if (plugin) {
      toast.success(`${plugin.name} ${plugin.status === 'active' ? 'deactivated' : 'activated'}`);
    }
  };
  
  const filteredPlugins = plugins.filter(plugin => 
    plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plugin.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const installPlugin = () => {
    toast.error('Feature not implemented in this demo');
  };
  
  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Plugin Manager</h2>
          <p className="text-gray-600">Manage and install plugins to extend functionality</p>
        </div>
        <Button onClick={installPlugin} className="flex items-center gap-2">
          <Download size={16} />
          Install Plugin
        </Button>
      </div>
      
      <div className="mb-6">
        <Input
          placeholder="Search plugins..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>
      
      <div className="space-y-4">
        {filteredPlugins.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
            <AlertCircle className="mx-auto mb-4 h-8 w-8 text-gray-400" />
            <h3 className="mb-1 text-lg font-medium">No plugins found</h3>
            <p className="text-gray-500">Try adjusting your search or install new plugins</p>
          </div>
        ) : (
          filteredPlugins.map(plugin => (
            <div 
              key={plugin.id}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between"
            >
              <div className="mb-4 md:mb-0">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="font-medium">{plugin.name}</h3>
                  <Badge variant={plugin.status === 'active' ? "default" : "secondary"} className={plugin.status === 'active' ? "bg-green-100 text-green-800" : ""}>
                    {plugin.status === 'active' ? 
                      <Check className="mr-1 h-3 w-3" /> : 
                      <X className="mr-1 h-3 w-3" />
                    }
                    {plugin.status === 'active' ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{plugin.description}</p>
                <p className="mt-1 text-xs text-gray-500">Version: {plugin.version}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Switch 
                    checked={plugin.status === 'active'}
                    onCheckedChange={() => togglePlugin(plugin.id)}
                    id={`switch-${plugin.id}`}
                  />
                  <label 
                    htmlFor={`switch-${plugin.id}`}
                    className="text-sm font-medium"
                  >
                    {plugin.status === 'active' ? 'Enabled' : 'Disabled'}
                  </label>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => toast.error('Feature not implemented in this demo')}
                >
                  Settings
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PluginManager;
