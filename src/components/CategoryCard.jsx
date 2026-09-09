import "../styles/card.css";
import categories from "../data/categories";
import { Link } from 'react-router-dom';

function CategoryCards() {
  return (


    <div className="categorycards">

      {categories.map((category) => (
        <div className="category-card-item" key={category.id}>

          <img src={category.image} alt={category.title} />

          <h2>{category.title}</h2>
          <p>{category.subtitle}</p>

          <Link to={category.link} className="category-card-button">
            {category.button} →
          </Link>

        </div>
      ))}

    </div>
  );
}

export default CategoryCards;