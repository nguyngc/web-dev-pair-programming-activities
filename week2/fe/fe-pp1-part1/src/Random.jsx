function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Random(props) {
    const min = props.min;
    const max = props.max;
    const randomNumber = getRandomInt(min, max);
    const itemStyle = {
        fontSize: '20px',
        padding: '0px',
        lineHeight: '0%',
    };

    return (
        <div className="card-item">
            <p style={itemStyle}>Random value between {min} and {max} =&gt; {randomNumber}</p>
        </div>
    );
}

export default Random;