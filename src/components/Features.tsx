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
    description: 'Tailor embed appearance to match your brand perfectly'
  }
];

export const Features = () => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">Why Choose LinkFrame?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The most powerful and developer-friendly embed generator on the web
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 border-glass bg-glass hover:bg-secondary/20 transition-colors group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};