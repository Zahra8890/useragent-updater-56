
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Plus } from 'lucide-react';

interface Source {
  id: string;
  url: string;
}

interface Schedule {
  enabled: boolean;
  frequency: 'daily' | 'weekly' | 'monthly';
  time: string;
  day?: string;
  date?: string;
}

interface AutoUpdateSettings {
  sources: Source[];
  enabled: boolean;
  schedule: Schedule;
  lastRun: string | null;
  nextRun: string | null;
}

const AutoUpdate = () => {
  const [settings, setSettings] = useState<AutoUpdateSettings>({
    sources: [{ id: '1', url: '' }],
    enabled: false,
    schedule: {
      enabled: false,
      frequency: 'daily',
      time: '00:00',
    },
    lastRun: null,
    nextRun: null
  });
  
  const handleAddSource = () => {
    setSettings(prev => ({
      ...prev,
      sources: [...prev.sources, { id: Date.now().toString(), url: '' }]
    }));
  };
  
  const handleRemoveSource = (id: string) => {
    if (settings.sources.length === 1) {
      toast.error('You must have at least one source');
      return;
    }
    
    setSettings(prev => ({
      ...prev,
      sources: prev.sources.filter(source => source.id !== id)
    }));
  };
  
  const handleSourceChange = (id: string, url: string) => {
    setSettings(prev => ({
      ...prev,
      sources: prev.sources.map(source => 
        source.id === id ? { ...source, url } : source
      )
    }));
  };
  
  const handleEnableChange = (enabled: boolean) => {
    setSettings(prev => ({
      ...prev,
      enabled
    }));
  };
  
  const handleScheduleChange = (field: keyof Schedule, value: any) => {
    setSettings(prev => ({
      ...prev,
      schedule: {
        ...prev.schedule,
        [field]: value
      }
    }));
  };
  
  const handleSave = () => {
    // Validate sources
    const emptySourcesExist = settings.enabled && settings.sources.some(source => !source.url);
    if (emptySourcesExist) {
      toast.error('Please enter URLs for all sources');
      return;
    }
    
    // Calculate next run time based on schedule
    let nextRun: Date | null = null;
    if (settings.enabled && settings.schedule.enabled) {
      nextRun = new Date();
      const [hours, minutes] = settings.schedule.time.split(':').map(Number);
      nextRun.setHours(hours, minutes, 0, 0);
      
      if (nextRun < new Date()) {
        nextRun.setDate(nextRun.getDate() + 1);
      }
    }
    
    const updatedSettings = {
      ...settings,
      nextRun: nextRun ? nextRun.toISOString() : null
    };
    
    // In a real app, this would save to a database and set up a cron job
    // For this demo, we'll just save to localStorage
    localStorage.setItem('autoUpdateSettings', JSON.stringify(updatedSettings));
    setSettings(updatedSettings);
    toast.success('Auto update settings saved');
  };
  
  const handleRunNow = () => {
    if (settings.sources.every(source => !source.url)) {
      toast.error('Please enter at least one source URL and save settings first');
      return;
    }
    
    toast.info('Auto update started');
    
    // Simulate a fetch operation
    setTimeout(() => {
      const now = new Date().toISOString();
      setSettings(prev => ({
        ...prev,
        lastRun: now
      }));
      toast.success('User agents updated successfully');
    }, 2000);
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Auto Update Settings</h2>
        <p className="text-gray-600">Configure automatic updates for user agents</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch 
            checked={settings.enabled} 
            onCheckedChange={handleEnableChange}
            id="auto-update-toggle"
          />
          <label 
            htmlFor="auto-update-toggle" 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Enable automatic updates
          </label>
        </div>
      </div>
      
      <div className="space-y-4 rounded-md border border-gray-200 p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">
              Source URLs
            </label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={handleAddSource}
              disabled={!settings.enabled}
              className="flex items-center text-sm"
            >
              <Plus className="mr-1 h-4 w-4" />
              Add Source
            </Button>
          </div>
          
          {settings.sources.map((source, index) => (
            <div key={source.id} className="flex gap-2 items-center">
              <Input
                value={source.url}
                onChange={(e) => handleSourceChange(source.id, e.target.value)}
                placeholder={`Source URL ${index + 1}`}
                disabled={!settings.enabled}
                className="flex-1"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveSource(source.id)}
                disabled={!settings.enabled || settings.sources.length === 1}
                className="h-10 w-10 shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <p className="mt-1 text-xs text-gray-500">
            Enter the URLs of websites to extract user agents from
          </p>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Schedule</h3>
            <div className="flex items-center space-x-2">
              <Switch 
                checked={settings.schedule.enabled} 
                onCheckedChange={(enabled) => handleScheduleChange('enabled', enabled)}
                id="schedule-toggle"
                disabled={!settings.enabled}
              />
              <label 
                htmlFor="schedule-toggle" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enable schedule
              </label>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Frequency
              </label>
              <Select 
                value={settings.schedule.frequency} 
                onValueChange={(value: 'daily' | 'weekly' | 'monthly') => handleScheduleChange('frequency', value)}
                disabled={!settings.enabled || !settings.schedule.enabled}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="updateTime" className="mb-1 block text-sm font-medium text-gray-700">
                Time
              </label>
              <Input
                id="updateTime"
                type="time"
                value={settings.schedule.time}
                onChange={(e) => handleScheduleChange('time', e.target.value)}
                disabled={!settings.enabled || !settings.schedule.enabled}
              />
            </div>
            
            {settings.schedule.frequency === 'weekly' && (
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Day of Week
                </label>
                <Select 
                  value={settings.schedule.day || 'monday'} 
                  onValueChange={(value) => handleScheduleChange('day', value)}
                  disabled={!settings.enabled || !settings.schedule.enabled}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monday">Monday</SelectItem>
                    <SelectItem value="tuesday">Tuesday</SelectItem>
                    <SelectItem value="wednesday">Wednesday</SelectItem>
                    <SelectItem value="thursday">Thursday</SelectItem>
                    <SelectItem value="friday">Friday</SelectItem>
                    <SelectItem value="saturday">Saturday</SelectItem>
                    <SelectItem value="sunday">Sunday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            {settings.schedule.frequency === 'monthly' && (
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Day of Month
                </label>
                <Select 
                  value={settings.schedule.date || '1'} 
                  onValueChange={(value) => handleScheduleChange('date', value)}
                  disabled={!settings.enabled || !settings.schedule.enabled}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 31 }, (_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Status</h3>
              <div className="mt-2 space-y-1 text-sm">
                <p>Last run: {settings.lastRun ? new Date(settings.lastRun).toLocaleString() : 'Never'}</p>
                <p>Next run: {settings.nextRun ? new Date(settings.nextRun).toLocaleString() : 'Not scheduled'}</p>
              </div>
            </div>
            <Button 
              onClick={handleRunNow}
              disabled={!settings.enabled || settings.sources.every(s => !s.url)}
            >
              Update Now
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button onClick={handleSave}>Save Settings</Button>
      </div>
    </div>
  );
};

export default AutoUpdate;
