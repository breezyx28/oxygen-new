type SplittedImagesProps = {
  img1: string;
  img2: string;
  imgCaption: string | React.ReactNode;
};

export const SplittedImages = ({
  img1,
  img2,
  imgCaption,
}: SplittedImagesProps) => (
  <div className="hero relative h-[520px] w-full rounded-[32px] flex gap-8 items-center justify-center">
    <div className="relative w-[40%] h-full flex flex-col justify-end text-start">
      <img
        src={
          img1 ??
          "/assets/images/backgrounds/products/messegaging-hero-background-1.png"
        }
        className="absolute w-full h-full rounded-[32px] object-cover z-10"
      />
      <div className="p-[38px] z-20">
        {typeof imgCaption === "string" ? (
          <h3 className="text-white text-5xl font-bold">{imgCaption}</h3>
        ) : (
          imgCaption
        )}
      </div>
    </div>
    <img
      src={
        img2 ??
        "/assets/images/backgrounds/products/messegaging-hero-background-2.png"
      }
      className="w-[60%] h-full rounded-[32px] object-cover"
    />
  </div>
);

export const SplittedImagesLTR = ({
  img1,
  img2,
  imgCaption,
}: SplittedImagesProps) => (
  <div className="hero relative h-[520px] w-full rounded-[32px] flex gap-8 items-center justify-center">
    <img
      src={
        img2 ??
        "/assets/images/backgrounds/products/messegaging-hero-background-2.png"
      }
      className="w-[60%] h-full rounded-[32px] object-cover"
    />
    <div className="relative w-[40%] h-full flex flex-col justify-end text-start">
      <img
        src={
          img1 ??
          "/assets/images/backgrounds/products/messegaging-hero-background-1.png"
        }
        className="absolute w-full h-full rounded-[32px] object-cover z-10"
      />
      <div className="p-[38px] z-20">
        {typeof imgCaption === "string" ? (
          <h3 className="text-white text-5xl font-bold">{imgCaption}</h3>
        ) : (
          imgCaption
        )}
      </div>
    </div>
  </div>
);
