import logo from '../images/planet-logo.jpg';

export default function () {
  return (
    <header id="header">
      <img className="planet-logo" src={logo}></img>
      <h1>NC Planets</h1>
      <h2>To Infinity and Beyond</h2>
    </header>
  );
}
