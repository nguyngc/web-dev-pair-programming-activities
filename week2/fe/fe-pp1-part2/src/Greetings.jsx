function getHelloTextByLanguage(lang) {
  switch (lang) {
    case 'fi':
      return 'Hei';
    case 'de':
      return 'Hallo';
    case 'en':
      return 'Hello';
    case 'es':
      return 'Hola';
    case 'fr':
      return 'Bonjour';
    default:
      return 'Hello';
  }
}

function Greetings(props) {
  const helloText = getHelloTextByLanguage(props.lang);

  return (
    <div className="greeting-item">{helloText} {props.children}</div>
  );
}

export default Greetings;