import '../styles/home.css';
import '../assets/hero-background.png';

function Hero() {
    return(
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
      <a className="hero-button" href="#CategorySelection">
        FEEL THE EXPLORE →
      </a>
    </section>
    )
}
export default Hero;