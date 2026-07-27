import '../styles/home.css';

function Education({ item }) {
  return (
<section className={"Education " + item.bgClass}>

      <div className="Education-Content-Container">

        <div className="Education-content-left">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="Education-content-right">

          <h1>
            <span>WHAT IS</span>
            <span>{item.title}?</span>
          </h1>

          <p>{item.text}</p>

          <a href={item.link} className="Education-button">
            {item.button}
          </a>

        </div>

      </div>

    </section>
  );
}

export default Education;