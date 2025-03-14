import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Plus, Pencil, Trash2, Save } from 'lucide-react';

interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  position: 'top' | 'bottom';
  isSystem?: boolean;
}

const PageEditor = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [currentPage, setCurrentPage] = useState<Page | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load saved pages from localStorage or use default system pages
    const savedPages = localStorage.getItem('sitePages');
    if (savedPages) {
      setPages(JSON.parse(savedPages));
    } else {
      // Default system pages
      const defaultPages: Page[] = [
        { id: '1', title: 'Home', slug: '/', content: 'Home page content', position: 'top', isSystem: true },
        { id: '2', title: 'User Agents', slug: '/user-agents', content: 'User Agents page content', position: 'top', isSystem: true },
        { id: '3', title: 'Advice', slug: '/advice', content: 'Advice page content', position: 'top', isSystem: true },
        { id: '4', title: 'My Agents', slug: '/my-agents', content: 'My Agents page content', position: 'top', isSystem: true },
        { id: '5', title: 'About Us', slug: '/about', content: 'About us page content', position: 'bottom' },
        { id: '6', title: 'Contact Us', slug: '/contact', content: 'Contact us page content', position: 'bottom' },
        { id: '7', title: 'Privacy Policy', slug: '/privacy', content: 'Privacy policy content', position: 'bottom' },
      ];
      setPages(defaultPages);
      localStorage.setItem('sitePages', JSON.stringify(defaultPages));
    }
  }, []);

  const handleAddPage = () => {
    const newPage: Page = {
      id: Date.now().toString(),
      title: 'New Page',
      slug: '/new-page',
      content: 'New page content',
      position: 'bottom'
    };
    setCurrentPage(newPage);
    setIsEditing(true);
  };

  const handleEditPage = (page: Page) => {
    setCurrentPage({ ...page });
    setIsEditing(true);
  };

  const handleDeletePage = (pageId: string) => {
    const pageToDelete = pages.find(p => p.id === pageId);
    if (pageToDelete?.isSystem) {
      toast.error("System pages cannot be deleted");
      return;
    }
    
    const updatedPages = pages.filter(page => page.id !== pageId);
    setPages(updatedPages);
    localStorage.setItem('sitePages', JSON.stringify(updatedPages));
    toast.success("Page deleted successfully");
    
    if (currentPage?.id === pageId) {
      setCurrentPage(null);
      setIsEditing(false);
    }
  };

  const handleSavePage = () => {
    if (!currentPage) return;
    
    // Basic validation
    if (!currentPage.title.trim() || !currentPage.slug.trim()) {
      toast.error("Title and URL path are required");
      return;
    }
    
    // Format slug if needed
    let slug = currentPage.slug.trim();
    if (!slug.startsWith('/')) {
      slug = '/' + slug;
    }
    
    const updatedPage = { ...currentPage, slug };
    const isNew = !pages.some(page => page.id === currentPage.id);
    
    let updatedPages;
    if (isNew) {
      updatedPages = [...pages, updatedPage];
    } else {
      updatedPages = pages.map(page => 
        page.id === currentPage.id ? updatedPage : page
      );
    }
    
    setPages(updatedPages);
    localStorage.setItem('sitePages', JSON.stringify(updatedPages));
    setIsEditing(false);
    setCurrentPage(null);
    toast.success(isNew ? "Page created successfully" : "Page updated successfully");
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentPage(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Page Editor</h2>
        <Button onClick={handleAddPage} size="sm">
          <Plus className="h-4 w-4 mr-1" /> Add Page
        </Button>
      </div>
      
      {isEditing && currentPage ? (
        <Card>
          <CardHeader>
            <CardTitle>{currentPage.id ? 'Edit Page' : 'Add New Page'}</CardTitle>
            <CardDescription>
              {currentPage.isSystem 
                ? "This is a system page. Some properties cannot be changed." 
                : "Create or modify your website pages"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Page Title</Label>
              <Input 
                id="title" 
                value={currentPage.title} 
                onChange={(e) => setCurrentPage({...currentPage, title: e.target.value})}
                readOnly={currentPage.isSystem}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="slug">URL Path</Label>
              <Input 
                id="slug" 
                value={currentPage.slug} 
                onChange={(e) => setCurrentPage({...currentPage, slug: e.target.value})}
                readOnly={currentPage.isSystem}
                placeholder="e.g., /about-us"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="position">Navigation Position</Label>
              <Select 
                value={currentPage.position} 
                onValueChange={(value: 'top' | 'bottom') => setCurrentPage({...currentPage, position: value})}
                disabled={currentPage.isSystem}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="top">Top Navigation</SelectItem>
                  <SelectItem value="bottom">Bottom Navigation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Page Content</Label>
              <Textarea 
                id="content" 
                value={currentPage.content} 
                onChange={(e) => setCurrentPage({...currentPage, content: e.target.value})}
                rows={8}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleCancelEdit}>Cancel</Button>
            <Button onClick={handleSavePage}>
              <Save className="h-4 w-4 mr-1" /> Save Page
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-4">
          <h3 className="font-medium">Top Navigation Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.filter(page => page.position === 'top').map(page => (
              <Card key={page.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{page.title}</CardTitle>
                  <CardDescription className="text-xs truncate">Path: {page.slug}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-2">
                  <div className="flex space-x-2 ml-auto">
                    <Button variant="outline" size="sm" onClick={() => handleEditPage(page)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => handleDeletePage(page.id)}
                      disabled={page.isSystem}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <h3 className="font-medium pt-4">Bottom Navigation Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.filter(page => page.position === 'bottom').map(page => (
              <Card key={page.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{page.title}</CardTitle>
                  <CardDescription className="text-xs truncate">Path: {page.slug}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-2">
                  <div className="flex space-x-2 ml-auto">
                    <Button variant="outline" size="sm" onClick={() => handleEditPage(page)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => handleDeletePage(page.id)}
                      disabled={page.isSystem}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageEditor;
