function IdCard(props) {
  return (
    <div className="card-item">
      <div className="card-item-img"><img src={props.picture} alt={props.firstName} /></div>
      <ul className="card-item-content">
        <li><strong>First name: </strong>{props.firstName}</li>
        <li><strong>Last name: </strong>{props.lastName}</li>
        <li><strong>Gender: </strong>{props.gender}</li>
        <li><strong>Height: </strong>{props.height / 100}m</li>
        <li><strong>Birth: </strong>{props.birth.toDateString()}</li>
      </ul>
    </div>
  );
}

export default IdCard;