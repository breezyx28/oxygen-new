const GlassCards = ({ data }: { data: [] | null }) => {
  return (
    <div className="container w-full py-[100px] grid md:grid-cols-3 grid-cols-1 gap-[20px]">
      {data?.map((item: any) => (
        <div key={item} className="hero-glass-card">
          <h6>{item?.title}</h6>
          <p>{item?.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default GlassCards;
