import './App.css';
import Logo from "./assets/Logo.png";

function App(){
  return (
    <>
    <nav className = "navbar">
      <img src={Logo} alt="Logo" width="50" height="50"/>
      <h1>NATURE</h1>
      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>

    <section className="Hero" id="home">
      <div className="hero-content">
      <h1 className="hero-title">
          <span>NATURE</span>
          <span>OF INDONESIA</span>
      </h1>
      <p>
        Discover the Beauty of Indonesia's Flora and Fauna.
      </p>
      </div>
      <a className="hero-button">
        FEEL THE EXPLORE →
    </a>
    </section>
    </>
  );
}

export default App;