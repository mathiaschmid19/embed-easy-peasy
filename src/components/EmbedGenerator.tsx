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
    
    // TikTok URLs
    if (inputUrl.includes('tiktok.com/')) {
      const videoId = inputUrl.split('@')[1]?.split('/video/')[1]?.split('?')[0];
      if (videoId) {
        return `<blockquote class="tiktok-embed" cite="${inputUrl}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;" >
<section></section>
</blockquote>
<script async src="https://www.tiktok.com/embed.js"></script>`;
      }
    }
    
    // Twitter/X URLs
    if (inputUrl.includes('twitter.com/') || inputUrl.includes('x.com/')) {
      return `<blockquote class="twitter-tweet"><a href="${inputUrl}"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    }
    
    // Facebook URLs
    if (inputUrl.includes('facebook.com/') || inputUrl.includes('fb.watch/')) {
      const encodedUrl = encodeURIComponent(inputUrl);
      return `<iframe src="https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=true&width=500" width="100%" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`;
    }
    
    // Google Drive URLs (documents, spreadsheets, presentations)
    if (inputUrl.includes('drive.google.com/')) {
      let embedUrl = inputUrl;
      
      // Convert sharing URL to embed URL
      if (inputUrl.includes('/file/d/')) {
        const fileId = inputUrl.split('/file/d/')[1].split('/')[0];
        embedUrl = `https://drive.google.com/file/d/${fileId}/preview?usp=embed_googleplus`;
      } else if (inputUrl.includes('docs.google.com/document/d/')) {
        const docId = inputUrl.split('/document/d/')[1].split('/')[0];
        embedUrl = `https://docs.google.com/document/d/${docId}/preview?usp=embed_googleplus`;
      } else if (inputUrl.includes('docs.google.com/spreadsheets/d/')) {
        const sheetId = inputUrl.split('/spreadsheets/d/')[1].split('/')[0];
        embedUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/preview?usp=embed_googleplus`;
      } else if (inputUrl.includes('docs.google.com/presentation/d/')) {
        const presentationId = inputUrl.split('/presentation/d/')[1].split('/')[0];
        embedUrl = `https://docs.google.com/presentation/d/${presentationId}/preview?usp=embed_googleplus`;
      }
      
      return `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 129.4118%;"><iframe src="${embedUrl}" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen></iframe></div>`;
    }
    
    // Loom URLs
    if (inputUrl.includes('loom.com/')) {
      const videoId = inputUrl.split('loom.com/share/')[1]?.split('?')[0];
      if (videoId) {
        return `<iframe src="https://www.loom.com/embed/${videoId}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>`;
      }
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
    
    if (inputUrl.includes('tiktok.com')) {
      return `<script async src="https://www.tiktok.com/embed.js"></script>`;
    }
    
    if (inputUrl.includes('twitter.com') || inputUrl.includes('x.com')) {
      return `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    }
    
    if (inputUrl.includes('facebook.com') || inputUrl.includes('fb.watch')) {
      return `<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"></script>`;
    }
    
    if (inputUrl.includes('drive.google.com') || inputUrl.includes('docs.google.com')) {
      return `<script async src="https://embedgen.example.com/gdrive.js" data-url="${inputUrl}"></script>`;
    }
    
    if (inputUrl.includes('loom.com')) {
      return `<script async src="https://embedgen.example.com/loom.js" data-url="${inputUrl}"></script>`;
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
    <div className="w-full max-w-6xl mx-auto space-y-8">
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
                  className="w-full aspect-video bg-secondary/20"
                  dangerouslySetInnerHTML={{ __html: generateIframeCode() }}
                />
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
                  <div className="relative group">
                    <div className="bg-secondary rounded-lg border overflow-hidden">
                      <div className="flex items-center justify-between p-3 border-b bg-muted/50">
                        <span className="text-xs font-medium text-muted-foreground">HTML Iframe Embed</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(generateIframeCode(), 'Iframe')}
                          className="h-7 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </Button>
                      </div>
                      <div className="p-4">
                        <code className="text-sm block leading-relaxed whitespace-pre-wrap break-all font-mono">
                          {generateIframeCode()}
                        </code>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-xs text-muted-foreground">
                      Standard iframe embed that works everywhere. Responsive width with fixed height.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="script" className="space-y-4">
                  <div className="relative group">
                    <div className="bg-secondary rounded-lg border overflow-hidden">
                      <div className="flex items-center justify-between p-3 border-b bg-muted/50">
                        <span className="text-xs font-medium text-muted-foreground">JavaScript Embed</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(generateScriptCode(), 'Script')}
                          className="h-7 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </Button>
                      </div>
                      <div className="p-4">
                        <code className="text-sm block leading-relaxed whitespace-pre-wrap break-all font-mono">
                          {generateScriptCode()}
                        </code>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-xs text-muted-foreground">
                      Smart embed with responsive design and automatic optimization.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};