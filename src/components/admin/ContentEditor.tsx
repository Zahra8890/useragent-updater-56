
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { AdviceArticle, adviceArticles } from '@/utils/userAgentData';

const ContentEditor = () => {
  const [articles, setArticles] = useState<AdviceArticle[]>(adviceArticles);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<AdviceArticle | null>(null);
  const [formData, setFormData] = useState<Partial<AdviceArticle>>({
    id: '',
    title: '',
    summary: '',
    content: '',
    publishDate: new Date().toISOString().split('T')[0],
    category: '',
    readTime: ''
  });
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSelectArticle = (article: AdviceArticle) => {
    setSelectedArticle(article);
    setFormData(article);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleAddNew = () => {
    setSelectedArticle(null);
    setFormData({
      id: Date.now().toString(),
      title: '',
      summary: '',
      content: '',
      publishDate: new Date().toISOString().split('T')[0],
      category: '',
      readTime: '5 min'
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.summary || !formData.content || !formData.category) {
      toast.error('Please fill all required fields');
      return;
    }
    
    if (selectedArticle) {
      // Update existing
      const updatedArticles = articles.map(article => 
        article.id === selectedArticle.id ? { ...article, ...formData as AdviceArticle } : article
      );
      setArticles(updatedArticles);
      toast.success('Article updated successfully');
    } else {
      // Add new
      const newArticle = formData as AdviceArticle;
      setArticles(prev => [...prev, newArticle]);
      toast.success('Article added successfully');
    }
    
    // Reset form
    setSelectedArticle(null);
    setFormData({
      id: '',
      title: '',
      summary: '',
      content: '',
      publishDate: new Date().toISOString().split('T')[0],
      category: '',
      readTime: '5 min'
    });
  };
  
  const handleDelete = () => {
    if (!selectedArticle) return;
    
    const updatedArticles = articles.filter(article => article.id !== selectedArticle.id);
    setArticles(updatedArticles);
    setSelectedArticle(null);
    setFormData({
      id: '',
      title: '',
      summary: '',
      content: '',
      publishDate: new Date().toISOString().split('T')[0],
      category: '',
      readTime: '5 min'
    });
    
    toast.success('Article deleted successfully');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Content Editor</h2>
        <Button onClick={handleAddNew}>Add New Article</Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-4">
          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="h-[600px] overflow-y-auto rounded-md border border-gray-200 p-4">
            {filteredArticles.length > 0 ? (
              filteredArticles.map(article => (
                <div
                  key={article.id}
                  onClick={() => handleSelectArticle(article)}
                  className={`mb-2 cursor-pointer rounded-md border p-3 transition-colors ${
                    selectedArticle?.id === article.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">{article.title}</div>
                  <div className="text-sm text-gray-500">{article.category} - {article.publishDate}</div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No articles found
              </div>
            )}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-md border border-gray-200 p-4">
            <h3 className="text-lg font-medium">{selectedArticle ? 'Edit Article' : 'Add New Article'}</h3>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="title" className="mb-1 block text-sm font-medium text-gray-700">
                  Title*
                </label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="category" className="mb-1 block text-sm font-medium text-gray-700">
                  Category*
                </label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="readTime" className="mb-1 block text-sm font-medium text-gray-700">
                  Read Time
                </label>
                <Input
                  id="readTime"
                  name="readTime"
                  value={formData.readTime || ''}
                  onChange={handleInputChange}
                  placeholder="e.g. 5 min"
                />
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="summary" className="mb-1 block text-sm font-medium text-gray-700">
                  Summary*
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  value={formData.summary || ''}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={2}
                  required
                />
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="content" className="mb-1 block text-sm font-medium text-gray-700">
                  Content* (Markdown supported)
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content || ''}
                  onChange={handleInputChange}
                  className="font-mono w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={15}
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4">
              {selectedArticle && (
                <Button type="button" variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              )}
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => setSelectedArticle(null)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {selectedArticle ? 'Update' : 'Create'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
