function CreditCard(props) {
  const cardImg = props.type == "Visa" ? "visa.png" : "master.png";
  const bgColor = props.bgColor;
  const textColor = props.color;
  const cardStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div style={cardStyle} className="card-item">
      <img src={"./src/assets/images/" + cardImg} />
      <div className="card-number"><span>.... .... ....</span>{props.number.slice(-4)}</div>
      <p>
        <span>Expires {("00" + props.expirationMonth.toString()).slice(-2)}/{props.expirationYear.toString().slice(-2)}</span>
        <span>{props.bank}</span>
      </p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;