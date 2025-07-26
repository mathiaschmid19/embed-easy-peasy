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
    
    // Handle different URL types
    const inputUrl = metadata.url;
    
    // YouTube URLs
    if (inputUrl.includes('youtube.com/watch') || inputUrl.includes('youtu.be/')) {
      const videoId = inputUrl.includes('youtu.be/') 
        ? inputUrl.split('youtu.be/')[1].split('?')[0]
        : inputUrl.split('v=')[1]?.split('&')[0];
      
      if (videoId) {
        return `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }
    }
    
    // Vimeo URLs
    if (inputUrl.includes('vimeo.com/')) {
      const videoId = inputUrl.split('vimeo.com/')[1].split('?')[0];
      if (videoId) {
        return `<iframe src="https://player.vimeo.com/video/${videoId}" width="100%" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
      }
    }
    
    // Twitter/X URLs
    if (inputUrl.includes('twitter.com/') || inputUrl.includes('x.com/')) {
      return `<blockquote class="twitter-tweet"><a href="${inputUrl}"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    }
    
    // CodePen URLs
    if (inputUrl.includes('codepen.io/')) {
      const parts = inputUrl.split('/');
      const user = parts[3];
      const slug = parts[5];
      if (user && slug) {
        return `<iframe height="400" style="width: 100%;" scrolling="no" title="CodePen Embed" src="https://codepen.io/${user}/embed/${slug}?height=400&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>`;
      }
    }
    
    // Generic iframe for other URLs
    return `<iframe src="${inputUrl}" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>`;
  };

  const generateScriptCode = () => {
    if (!metadata) return '';
    
    // Generate smart embed script based on URL type
    const inputUrl = metadata.url;
    
    if (inputUrl.includes('youtube.com') || inputUrl.includes('youtu.be')) {
      return `<script async src="https://embedgen.example.com/youtube.js" data-url="${inputUrl}"></script>`;
    }
    
    if (inputUrl.includes('vimeo.com')) {
      return `<script async src="https://embedgen.example.com/vimeo.js" data-url="${inputUrl}"></script>`;
    }
    
    if (inputUrl.includes('twitter.com') || inputUrl.includes('x.com')) {
      return `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    }
    
    return `<script async src="https://embedgen.example.com/widget.js" data-url="${inputUrl}"></script>`;
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
                <h3 className="text-xl font-semibold">Live Preview</h3>
              </div>
              
              {/* Live Embed Preview */}
              <div className="border border-glass rounded-lg overflow-hidden bg-card">
                <div 
                  className="w-full h-80 bg-secondary/20"
                  dangerouslySetInnerHTML={{ __html: generateIframeCode() }}
                />
              </div>
              
              {/* Metadata Info */}
              <div className="border border-glass rounded-lg p-4 bg-card/50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{metadata.favicon}</span>
                  <Badge variant="secondary">{metadata.siteName}</Badge>
                </div>
                <h4 className="font-semibold text-lg line-clamp-2 mb-2">{metadata.title}</h4>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-3">{metadata.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ExternalLink className="h-4 w-4" />
                  {metadata.url}
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