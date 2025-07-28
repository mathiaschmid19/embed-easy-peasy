import { Globe } from 'lucide-react';

// Custom brand icon components with proper colors
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF0000">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const VimeoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1AB7EA">
    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 0 0 4.192-3.729C5.978 2.4 7.333 1.718 8.222 1.718c2.104 0 3.391 1.242 3.873 3.727.519 2.667.878 4.327 1.075 4.98.586 2.693 1.239 4.039 1.955 4.039.558 0 1.398-.878 2.52-2.634 1.122-1.757 1.740-3.091 1.740-4.005 0-1.815-.718-2.726-2.155-2.726-.77 0-1.575.180-2.419.539 1.607-5.326 4.678-7.919 9.244-7.785 3.38.105 4.969 2.311 4.722 6.562z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black dark:fill-white">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black dark:fill-white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const GoogleDriveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#1e88e5" d="M38.59,39c-0.535,0.93-0.298,1.68-1.195,2.197C36.498,41.715,35.465,42,34.39,42H13.61 c-1.074,0-2.106-0.285-3.004-0.802C9.708,40.681,9.945,39.93,9.41,39l7.67-9h13.84L38.59,39z"></path><path fill="#fbc02d" d="M27.463,6.999c1.073-0.002,2.104-0.716,3.001-0.198c0.897,0.519,1.66,1.27,2.197,2.201l10.39,17.996 c0.537,0.93,0.807,1.967,0.808,3.002c0.001,1.037-1.267,2.073-1.806,3.001l-11.127-3.005l-6.924-11.993L27.463,6.999z"></path><path fill="#e53935" d="M43.86,30c0,1.04-0.27,2.07-0.81,3l-3.67,6.35c-0.53,0.78-1.21,1.4-1.99,1.85L30.92,30H43.86z"></path><path fill="#4caf50" d="M5.947,33.001c-0.538-0.928-1.806-1.964-1.806-3c0.001-1.036,0.27-2.073,0.808-3.004l10.39-17.996 c0.537-0.93,1.3-1.682,2.196-2.2c0.897-0.519,1.929,0.195,3.002,0.197l3.459,11.009l-6.922,11.989L5.947,33.001z"></path><path fill="#1565c0" d="M17.08,30l-6.47,11.2c-0.78-0.45-1.46-1.07-1.99-1.85L4.95,33c-0.54-0.93-0.81-1.96-0.81-3H17.08z"></path><path fill="#2e7d32" d="M30.46,6.8L24,18L17.53,6.8c0.78-0.45,1.66-0.73,2.6-0.79L27.46,6C28.54,6,29.57,6.28,30.46,6.8z"></path>
</svg>
);

const LoomIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#625DF5">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-6.222 3.592a.4.4 0 0 1-.6-.346V6.594a.4.4 0 0 1 .6-.346l6.222 3.592a.4.4 0 0 1 0 .692z"/>
  </svg>
);

const CodePenIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black dark:fill-white">
    <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V14.46zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v1.426L2.89 15.69l3.618-2.417zm6.537 2.99l4.474-2.98 3.618 2.414-8.092 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V6.347l8.086 5.39-3.612 2.415z"/>
  </svg>
);

const platforms = [
  { name: 'YouTube', icon: YouTubeIcon, color: '', bgColor: 'bg-transparent' },
  { name: 'Vimeo', icon: VimeoIcon, color: '', bgColor: 'bg-transparent' },
  { name: 'TikTok', icon: TikTokIcon, color: '', bgColor: 'bg-transparent' },
  { name: 'Twitter/X', icon: TwitterIcon, color: '', bgColor: 'bg-transparent' },
  { name: 'Facebook', icon: FacebookIcon, color: '', bgColor: 'bg-transparent' },
  { name: 'Google Drive', icon: GoogleDriveIcon, color: '', bgColor: 'bg-transparent' },
  { name: 'Loom', icon: LoomIcon, color: '', bgColor: 'bg-transparent' },
  { name: 'CodePen', icon: CodePenIcon, color: '', bgColor: 'bg-transparent' },
  { name: 'Any URL', icon: Globe, color: 'text-primary', bgColor: 'bg-transparent' }
];

export const SupportedPlatforms = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Supported Platforms
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Generate embeds for all your favorite platforms with just one click
        </p>
      </div>
      
      {/* Platform names with improved layout */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 text-center mt-8">
        {platforms.map((platform) => (
          <div key={platform.name} className="group space-y-3 p-4 rounded-xl hover:bg-secondary/30 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="flex justify-center">
              <div className={`w-12 h-12 rounded-xl ${platform.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <platform.icon className={platform.color} />
              </div>
            </div>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {platform.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};