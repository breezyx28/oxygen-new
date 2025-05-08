type SectionLayoutContainerProps = {
  children: React.ReactNode;
};

const SectionLayoutContainer = ({ children }: SectionLayoutContainerProps) => {
  return (
    <section>
      <div className="container-container container-narrow">{children}</div>
    </section>
  );
};

export default SectionLayoutContainer;
