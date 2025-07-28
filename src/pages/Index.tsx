import { Header } from '@/components/Header';
import { EmbedGenerator } from '@/components/EmbedGenerator';
import { Features } from '@/components/Features';
import { SupportedPlatforms } from '@/components/SupportedPlatforms';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 space-y-24">
        <EmbedGenerator />
        <Features />
        <SupportedPlatforms />
      </main>
      
      <footer className="border-t border-glass bg-glass/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>Built with ❤️ • LinkFrame - Embed codes for today's Internet</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
