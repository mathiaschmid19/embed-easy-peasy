import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Star } from 'lucide-react';

export const Header = () => {
  return (
    <header className="w-full border-b border-glass bg-glass backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">EmbedGen</h1>
              <p className="text-xs text-muted-foreground">Embed codes for today's Internet</p>
            </div>
            <Badge variant="secondary" className="ml-2">
              Clone
            </Badge>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <Star className="h-4 w-4" />
              Star
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};