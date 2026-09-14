import '../styles/home.css';
import { Link } from 'react-router-dom';

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

          <Link to={item.link} className="Education-button">
            {item.button}
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Education;