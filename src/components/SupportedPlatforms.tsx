import { Youtube, MessageCircle, Facebook, Twitter, FileText, Video, Code, ExternalLink, Music, Play } from 'lucide-react';
const platforms = [{
  name: 'YouTube',
  icon: Youtube,
  color: 'text-red-500'
}, {
  name: 'Vimeo',
  icon: Video,
  color: 'text-blue-500'
}, {
  name: 'TikTok',
  icon: Music,
  color: 'text-pink-500'
}, {
  name: 'Twitter/X',
  icon: Twitter,
  color: 'text-gray-800 dark:text-white'
}, {
  name: 'Facebook',
  icon: Facebook,
  color: 'text-blue-600'
}, {
  name: 'Google Drive',
  icon: FileText,
  color: 'text-blue-500'
}, {
  name: 'Loom',
  icon: Video,
  color: 'text-purple-500'
}, {
  name: 'CodePen',
  icon: Code,
  color: 'text-gray-700'
}, {
  name: 'Any URL',
  icon: ExternalLink,
  color: 'text-primary'
}];
export const SupportedPlatforms = () => {
  return <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Supported Platforms
        </h2>
        <p className="text-muted-foreground text-lg">
          Generate embeds for all your favorite platforms
        </p>
      </div>
      
      
      
      {/* Platform names */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
        {platforms.map(platform => <div key={platform.name} className="space-y-2">
            <div className="flex justify-center">
              <platform.icon className={`h-5 w-5 ${platform.color}`} />
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              {platform.name}
            </span>
          </div>)}
      </div>
    </div>;
};