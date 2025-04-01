const GlassCards = () => {
  return (
    <div className="container w-full py-[100px] grid md:grid-cols-3 grid-cols-1 gap-[20px]">
      {[1, 2, 3].map((item: any) => (
        <div key={item} className="hero-glass-card">
          <h6>GROW CUSTOMER LIFETIME VALUE</h6>
          <p>
            Engage customers anywhere, anytime, across any channel with
            personalized, context-driven support.
          </p>
        </div>
      ))}
    </div>
  );
};

export default GlassCards;
