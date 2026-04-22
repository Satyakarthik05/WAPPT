import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  className?: string;
  src?: string;
}

export function VideoPlaceholder({ title = "Video Placeholder", className = "", src }: VideoPlaceholderProps) {
  if (src) {
    return (
      <div className={`relative bg-black rounded-lg overflow-hidden ${className}`}>
        <video
          src={src}
          className="w-full h-full object-contain"
          controls
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    );
  }

  return (
    <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Play className="w-10 h-10 text-white" fill="white" />
          </div>
          <p className="text-white/80 text-sm">{title}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}
