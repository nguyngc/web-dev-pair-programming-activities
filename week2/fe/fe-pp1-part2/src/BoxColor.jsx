function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function BoxColor(props) {
  const hexValue = rgbToHex(props.r, props.g, props.b);
  const boxStyle = {
    backgroundColor: hexValue,
    border: 'solid 1px black',
    padding: '30px 0px',
    marginBottom: '20px',
    width: '600px',
    fontSize: '24px',
    textAlign: 'center',
  };

  return (
    <div style={boxStyle}>
      <div>
        rgb({props.r}, {props.g}, {props.b})<br />
        {hexValue}
      </div>
    </div>
  );
}

export default BoxColor;