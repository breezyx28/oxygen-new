import { twMerge } from "tailwind-merge";

type CTASection1Props = {
  text: string;
  button?: React.ReactNode;
  className?: string;
};
export default function CTASection1({
  text,
  button,
  className,
}: CTASection1Props) {
  return (
    <section
      id="cta-card"
      className={
        "container-container md:min-h-[100dvh] min-h-screen h-full w-full flex flex-col items-center justify-center"
      }
    >
      <div className="relative w-full md:h-[448px] h-full flex flex-col justify-center items-center">
        <img
          src="/assets/images/backgrounds/pricing-help-cta.webp"
          className="absolute w-full md:h-auto h-full top-0 left-0 z-10 object-cover md:rounded-none rounded-[32px]"
        />
        <div
          className={twMerge(
            "relative h-full flex flex-col items-center text-center justify-center md:py-[72px] py-[44px] md:px-[105px] px-[50px] z-20",
            className
          )}
        >
          <h3 className="text-white md:text-[52px] text-[34px] font-[600] leading-[1.2]">
            {text}
          </h3>

          <div className="md:w-auto w-full flex md:flex-row flex-col gap-4 mt-[32px] ">
            {button}
          </div>
        </div>
      </div>
    </section>
  );
}
