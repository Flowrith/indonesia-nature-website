import "../styles/home.css";
import Informationcards from './InformationCard.jsx';
import flora from '../data/flora.js';

function Flora() {
    return(
    <>
    <section className="Flora" id="flora">

        <div className="Floraheader">
        <h1 className="Flora-title">
          <span >EDUCATION </span> 
          <span>NATURE OF INDONESIA</span>
        </h1>
        <p>(FLORA)</p>
      </div>
      
        <Informationcards data={flora} />

    </section>
    </>
    )
}
export default Flora;