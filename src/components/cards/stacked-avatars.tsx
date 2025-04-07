import { twMerge } from "tailwind-merge";

type StackedAvatarsProps = {
  imgs: string[];
  imgsStyle?: string;
};

const StackedAvatars = ({ imgs, imgsStyle }: StackedAvatarsProps) => {
  const maxZIndex = imgs.length + 1;
  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            className={twMerge(
              "w-12 h-12 rounded-full border-2 border-black object-cover",
              `relative ml-[-1.75rem] first:ml-0`, // Negative margin for overlap
              imgsStyle
            )}
            style={{ zIndex: maxZIndex - index }}
            alt={`Avatar ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StackedAvatars;
