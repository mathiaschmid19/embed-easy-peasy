import { 
  Youtube, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  FileText, 
  Video, 
  Code, 
  ExternalLink,
  Music,
  Play
} from 'lucide-react';

const platforms = [
  { name: 'YouTube', icon: Youtube, color: 'text-red-500' },
  { name: 'Vimeo', icon: Video, color: 'text-blue-500' },
  { name: 'TikTok', icon: Music, color: 'text-pink-500' },
  { name: 'Twitter/X', icon: Twitter, color: 'text-gray-800 dark:text-white' },
  { name: 'Facebook', icon: Facebook, color: 'text-blue-600' },
  { name: 'Google Drive', icon: FileText, color: 'text-blue-500' },
  { name: 'Loom', icon: Video, color: 'text-purple-500' },
  { name: 'CodePen', icon: Code, color: 'text-gray-700' },
  { name: 'Any URL', icon: ExternalLink, color: 'text-primary' }
];

export const SupportedPlatforms = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Supported Platforms
        </h2>
        <p className="text-muted-foreground text-lg">
          Generate embeds for all your favorite platforms
        </p>
      </div>
      
      <div className="relative">
        {/* Central hub */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Code className="h-8 w-8 text-white" />
          </div>
        </div>
        
        {/* Platform icons arranged in a circle */}
        <div className="relative w-full h-96 flex items-center justify-center">
          {platforms.map((platform, index) => {
            const angle = (index * 360) / platforms.length;
            const radius = 140;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={platform.name}
                className="absolute w-16 h-16 bg-card border border-glass rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <platform.icon className={`h-6 w-6 ${platform.color}`} />
              </div>
            );
          })}
        </div>
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          {platforms.map((_, index) => {
            const angle = (index * 360) / platforms.length;
            const radius = 140;
            const x1 = 50; // center percentage
            const y1 = 50; // center percentage
            const x2 = 50 + (Math.cos((angle * Math.PI) / 180) * radius * 100) / 400; // convert to percentage
            const y2 = 50 + (Math.sin((angle * Math.PI) / 180) * radius * 100) / 400; // convert to percentage
            
            return (
              <line
                key={index}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="currentColor"
                strokeWidth="1"
                className="text-muted-foreground"
              />
            );
          })}
        </svg>
      </div>
      
      {/* Platform names */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
        {platforms.map((platform) => (
          <div key={platform.name} className="space-y-2">
            <div className="flex justify-center">
              <platform.icon className={`h-5 w-5 ${platform.color}`} />
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              {platform.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};