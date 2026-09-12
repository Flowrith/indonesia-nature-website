import "../styles/card.css";
import { Link } from 'react-router-dom';

function InformationCards({ data }) {
  return (
    <div className="informationcards">
      {data.map((item) => (
        <div className="information-card-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>
            {item.subtitle}
          </p>

          <Link to={item.link} className="information-card-button">
            {item.button} →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default InformationCards;