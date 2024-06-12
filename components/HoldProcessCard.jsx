const HoldProcessCard = ({ children, text }) => {
  return (
    <div className="hold-process__card">
      <div>{children}</div>
      <p className="hold-process__card__text">{text}</p>
    </div>
  );
};

export default HoldProcessCard;
