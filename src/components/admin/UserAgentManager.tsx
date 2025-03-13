
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { UserAgent, userAgents } from '@/utils/userAgentData';

const UserAgentManager = () => {
  const [agents, setAgents] = useState<UserAgent[]>(userAgents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAgent, setSelectedAgent] = useState<UserAgent | null>(null);
  const [formData, setFormData] = useState<Partial<UserAgent>>({
    id: '',
    name: '',
    value: '',
    browser: '',
    os: '',
    device: '',
    lastUpdated: new Date().toISOString().split('T')[0],
    popularity: 0,
    category: 'desktop',
    description: ''
  });
  
  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.browser.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.os.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSelectAgent = (agent: UserAgent) => {
    setSelectedAgent(agent);
    setFormData(agent);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'popularity' ? parseFloat(value) : value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleAddNew = () => {
    setSelectedAgent(null);
    setFormData({
      id: Date.now().toString(),
      name: '',
      value: '',
      browser: '',
      os: '',
      device: '',
      lastUpdated: new Date().toISOString().split('T')[0],
      popularity: 0,
      category: 'desktop',
      description: ''
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.value || !formData.browser || !formData.os || !formData.device) {
      toast.error('Please fill all required fields');
      return;
    }
    
    if (selectedAgent) {
      // Update existing
      const updatedAgents = agents.map(agent => 
        agent.id === selectedAgent.id ? { ...agent, ...formData as UserAgent } : agent
      );
      setAgents(updatedAgents);
      toast.success('User agent updated successfully');
    } else {
      // Add new
      const newAgent = formData as UserAgent;
      setAgents(prev => [...prev, newAgent]);
      toast.success('User agent added successfully');
    }
    
    // In a real application, this would be saved to a database
    // For this demo, we're just updating the state
    
    // Reset form
    setSelectedAgent(null);
    setFormData({
      id: '',
      name: '',
      value: '',
      browser: '',
      os: '',
      device: '',
      lastUpdated: new Date().toISOString().split('T')[0],
      popularity: 0,
      category: 'desktop',
      description: ''
    });
  };
  
  const handleDelete = () => {
    if (!selectedAgent) return;
    
    const updatedAgents = agents.filter(agent => agent.id !== selectedAgent.id);
    setAgents(updatedAgents);
    setSelectedAgent(null);
    setFormData({
      id: '',
      name: '',
      value: '',
      browser: '',
      os: '',
      device: '',
      lastUpdated: new Date().toISOString().split('T')[0],
      popularity: 0,
      category: 'desktop',
      description: ''
    });
    
    toast.success('User agent deleted successfully');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">User Agents Manager</h2>
        <Button onClick={handleAddNew}>Add New Agent</Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-4">
          <Input
            placeholder="Search agents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="h-[500px] overflow-y-auto rounded-md border border-gray-200 p-4">
            {filteredAgents.length > 0 ? (
              filteredAgents.map(agent => (
                <div
                  key={agent.id}
                  onClick={() => handleSelectAgent(agent)}
                  className={`mb-2 cursor-pointer rounded-md border p-3 transition-colors ${
                    selectedAgent?.id === agent.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">{agent.name}</div>
                  <div className="text-sm text-gray-500">{agent.browser} - {agent.os}</div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No user agents found
              </div>
            )}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-md border border-gray-200 p-4">
            <h3 className="text-lg font-medium">{selectedAgent ? 'Edit User Agent' : 'Add New User Agent'}</h3>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                  Name*
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="browser" className="mb-1 block text-sm font-medium text-gray-700">
                  Browser*
                </label>
                <Input
                  id="browser"
                  name="browser"
                  value={formData.browser || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="os" className="mb-1 block text-sm font-medium text-gray-700">
                  Operating System*
                </label>
                <Input
                  id="os"
                  name="os"
                  value={formData.os || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="device" className="mb-1 block text-sm font-medium text-gray-700">
                  Device*
                </label>
                <Input
                  id="device"
                  name="device"
                  value={formData.device || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="category" className="mb-1 block text-sm font-medium text-gray-700">
                  Category*
                </label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => handleSelectChange('category', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desktop">Desktop</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                    <SelectItem value="bot">Bot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="lastUpdated" className="mb-1 block text-sm font-medium text-gray-700">
                  Last Updated
                </label>
                <Input
                  id="lastUpdated"
                  name="lastUpdated"
                  type="date"
                  value={formData.lastUpdated || new Date().toISOString().split('T')[0]}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label htmlFor="popularity" className="mb-1 block text-sm font-medium text-gray-700">
                  Popularity (%)
                </label>
                <Input
                  id="popularity"
                  name="popularity"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={formData.popularity || 0}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="col-span-2">
                <label htmlFor="value" className="mb-1 block text-sm font-medium text-gray-700">
                  User Agent String*
                </label>
                <textarea
                  id="value"
                  name="value"
                  value={formData.value || ''}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={3}
                  required
                />
              </div>
              
              <div className="col-span-2">
                <label htmlFor="description" className="mb-1 block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description || ''}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4">
              {selectedAgent && (
                <Button type="button" variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              )}
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => setSelectedAgent(null)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {selectedAgent ? 'Update' : 'Create'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAgentManager;
