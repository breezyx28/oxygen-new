type SectionLayoutProps = {
  img: string;
  children: React.ReactNode;
};

const SectionLayout = ({ img, children }: SectionLayoutProps) => {
  return (
    <section className="w-full relative">
      <div className="w-full relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={img}
            className="w-full h-full object-cover min-h-[800px] md:min-h-0"
            alt="Background"
          />
        </div>

        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
