import '../styles/home.css';
import CategoryCards from "./Card";
function Category() {
    return(

<>

    <section className="category-selection" id="CategorySelection">
      <div className="categoryheader">
        <h1 className="category-title">
          <span>WELCOME TO </span> 
          <span>NATURE OF INDONESIA</span>
        </h1>
        <p>(YOU WILL GET EDUCATION ABOUT FLORA & FAUNA)</p>
      </div>
        
        <CategoryCards />

    </section>
</>
    )
}

export default Category;