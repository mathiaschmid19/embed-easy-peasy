import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Star } from 'lucide-react';
// Add import
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/mathiaschmid19/embed-easy-peasy', '_blank');
  };

  const handleStarClick = () => {
    window.open('https://github.com/mathiaschmid19/embed-easy-peasy', '_blank');
  };

  return (
    <header className="w-full border-b border-glass bg-glass backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-sm">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 12a2.5 2.5 0 0 1 2.5-2.5h1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M14.5 12a2.5 2.5 0 0 1-2.5 2.5h-1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-logo font-semibold">LinkFrame</h1>
              <p className="text-xs text-muted-foreground font-body">Embed codes for today's Internet</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleStarClick}
              className="gap-2 border-glass bg-glass hover:bg-primary/10 hover:border-primary/20 hover:text-primary dark:hover:bg-secondary/50 dark:hover:border-glass dark:hover:text-foreground transition-colors font-body"
            >
              <Star className="h-4 w-4" />
              Star
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleGitHubClick}
              className="gap-2 bg-gradient-primary hover:opacity-90 transition-opacity font-body"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};