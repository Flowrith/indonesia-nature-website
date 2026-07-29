import '../styles/about.css';

function About({ item }) {
  return (
<section className={"About " + item.bgClass} id="about">

      <div className="About-Content-Container">

        <div className="About-content-left">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="About-content-right">

          <h1>
            <span>{item.title}?</span>
          </h1>

          <p>{item.text}</p>

          <a href={item.link} className="About-button">
            {item.button}
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;