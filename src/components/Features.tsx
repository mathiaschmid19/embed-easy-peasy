import { Card } from '@/components/ui/card';
import { Code, Zap, Shield, Palette } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Multiple Formats',
    description: 'Generate iframe, script, and custom embed codes for any URL'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant metadata extraction and embed generation'
  },
  {
    icon: Shield,
    title: 'Privacy Focused',
    description: 'No tracking, no data collection, just pure embedding'
  },
  {
    icon: Palette,
    title: 'Customizable',
    description: 'Adjust dimensions, styling, and embed behavior'
  }
];

export const Features = () => {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Why Choose EmbedGen?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The modern way to embed content from any website with beautiful, responsive embeds
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="p-6 bg-glass border-glass backdrop-blur-xl hover:shadow-glow transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};