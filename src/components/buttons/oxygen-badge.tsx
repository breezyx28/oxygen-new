const OxygenBadge = ({ text }: { text?: string }) => {
  return <h3 className="oxygen-badge">{text ?? "Meet Oxygen"}</h3>;
};

export default OxygenBadge;
