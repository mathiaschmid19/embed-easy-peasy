import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Copy, ExternalLink, Code, Eye } from 'lucide-react';

interface UrlMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName: string;
  favicon: string;
}

export const EmbedGenerator = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [metadata, setMetadata] = useState<UrlMetadata | null>(null);

  const fetchMetadata = async (inputUrl: string): Promise<UrlMetadata> => {
    // Simulate API call - in real implementation, this would call a backend service
    // that fetches Open Graph and other metadata
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      title: 'Sample Website Title',
      description: 'This is a sample description of the website content that would be embedded.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      url: inputUrl,
      siteName: 'Sample Site',
      favicon: '🌐'
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    try {
      const data = await fetchMetadata(url);
      setMetadata(data);
      toast({
        title: "Success!",
        description: "Embed data generated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch URL metadata",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateIframeCode = () => {
    if (!metadata) return '';
    return `<iframe src="${metadata.url}" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
  };

  const generateScriptCode = () => {
    if (!metadata) return '';
    return `<script async src="https://embed.example.com/widget.js" data-url="${metadata.url}"></script>`;
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} code copied to clipboard`,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* URL Input Form */}
      <Card className="p-8 bg-glass border-glass backdrop-blur-xl shadow-glow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Embed Generator
            </h1>
            <p className="text-muted-foreground text-lg">
              Generate beautiful embed codes for any URL
            </p>
          </div>
          
          <div className="flex gap-4">
            <Input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-12 text-lg border-glass bg-glass backdrop-blur-sm"
              required
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="h-12 px-8 bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </Button>
          </div>
        </form>
      </Card>

      {/* Results */}
      {metadata && (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Preview */}
          <Card className="p-6 bg-glass border-glass backdrop-blur-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Preview</h3>
              </div>
              
              <div className="border border-glass rounded-lg overflow-hidden bg-card">
                {metadata.image && (
                  <img 
                    src={metadata.image} 
                    alt={metadata.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{metadata.favicon}</span>
                    <Badge variant="secondary">{metadata.siteName}</Badge>
                  </div>
                  <h4 className="font-semibold text-lg line-clamp-2">{metadata.title}</h4>
                  <p className="text-muted-foreground line-clamp-3">{metadata.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ExternalLink className="h-4 w-4" />
                    {metadata.url}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Embed Codes */}
          <Card className="p-6 bg-glass border-glass backdrop-blur-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Embed Codes</h3>
              </div>

              <Tabs defaultValue="iframe" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="iframe">Iframe</TabsTrigger>
                  <TabsTrigger value="script">Script</TabsTrigger>
                </TabsList>
                
                <TabsContent value="iframe" className="space-y-4">
                  <div className="relative">
                    <pre className="bg-secondary p-4 rounded-lg text-sm overflow-x-auto border">
                      <code>{generateIframeCode()}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => copyToClipboard(generateIframeCode(), 'Iframe')}
                      className="absolute top-2 right-2"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Standard iframe embed - works everywhere
                  </p>
                </TabsContent>
                
                <TabsContent value="script" className="space-y-4">
                  <div className="relative">
                    <pre className="bg-secondary p-4 rounded-lg text-sm overflow-x-auto border">
                      <code>{generateScriptCode()}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => copyToClipboard(generateScriptCode(), 'Script')}
                      className="absolute top-2 right-2"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Smart embed with responsive design
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};