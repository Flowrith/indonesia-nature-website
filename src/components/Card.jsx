import "../styles/card.css";
import categories from "../data/categories";

function CategoryCards() {
  return (
    <div className="categorycards">

      {categories.map((category) => (
        <div className="card-item" key={category.id}>

          <img src={category.image} alt={category.title} />

          <h2>{category.title}</h2>
          <p>{category.subtitle}</p>

        <a href={category.link} className="card-button">
          {category.button} →
        </a>
        </div>
      ))}

    </div>
  );
}

export default CategoryCards;