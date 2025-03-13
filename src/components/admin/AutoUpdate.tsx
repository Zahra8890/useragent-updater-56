
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Schedule {
  enabled: boolean;
  frequency: 'daily' | 'weekly' | 'monthly';
  time: string;
  day?: string;
  date?: string;
}

interface AutoUpdateSettings {
  sourceUrl: string;
  enabled: boolean;
  schedule: Schedule;
  lastRun: string | null;
  nextRun: string | null;
}

const AutoUpdate = () => {
  const [settings, setSettings] = useState<AutoUpdateSettings>({
    sourceUrl: '',
    enabled: false,
    schedule: {
      enabled: false,
      frequency: 'daily',
      time: '00:00',
    },
    lastRun: null,
    nextRun: null
  });
  
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({
      ...prev,
      sourceUrl: e.target.value
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
    if (!settings.sourceUrl && settings.enabled) {
      toast.error('Please enter a source URL');
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
    if (!settings.sourceUrl) {
      toast.error('Please enter a source URL and save settings first');
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
        <div>
          <label htmlFor="sourceUrl" className="mb-1 block text-sm font-medium text-gray-700">
            Source URL
          </label>
          <Input
            id="sourceUrl"
            value={settings.sourceUrl}
            onChange={handleUrlChange}
            placeholder="https://example.com/user-agents.json"
            disabled={!settings.enabled}
          />
          <p className="mt-1 text-xs text-gray-500">
            Enter the URL of the website to extract user agents from
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
              variant="outline"
              onClick={handleRunNow}
              disabled={!settings.enabled || !settings.sourceUrl}
            >
              Run Now
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
