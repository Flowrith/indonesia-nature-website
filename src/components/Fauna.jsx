import "../styles/home.css";
import Informationcards from './InformationCard.jsx';
import fauna from '../data/fauna.js';

function Fauna() {
    return(
    <>
    <section className="Fauna">

        <div className="Faunaheader">
        <h1 className="Fauna-title">
          <span >EDUCATION </span> 
          <span>NATURE OF INDONESIA</span>
        </h1>
        <p>(FAUNA)</p>
      </div>
      
        <Informationcards data={fauna} />

    </section>
    </>
    )
}
export default Fauna;