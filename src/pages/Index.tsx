import { Header } from '@/components/Header';
import { EmbedGenerator } from '@/components/EmbedGenerator';
import { Features } from '@/components/Features';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 space-y-20">
        <EmbedGenerator />
        <Features />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-glass bg-glass backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Built with ❤️ • EmbedGen - Embed codes for today's Internet
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
