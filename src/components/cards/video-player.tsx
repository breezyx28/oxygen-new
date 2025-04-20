import { Play } from "lucide-react";
import { twMerge } from "tailwind-merge";

type TVideoPlayer = {
  src: string;
  poster?: string;
  className?: string;
};

const VideoPlayer = ({ src, poster, className }: TVideoPlayer) => {
  return (
    <div className={twMerge("relative w-full", className)}>
      <div className="relative w-full h-full z-10">
        <div className="play-btn absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-full p-5 bg-primary-100 w-[fit-content]">
            <div className="rounded-full p-3 bg-primary-600 w-[fit-content]">
              <Play className="text-white" />
            </div>
          </div>
        </div>
        <video src={src} poster={poster} className="w-full h-full" />
      </div>
    </div>
  );
};

export default VideoPlayer;
