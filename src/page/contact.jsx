import '../styles/contact.css';
import Contactimage from '../assets/contact-image.png';

function Contact(){
    return(
        
        <section className='contact' id="contact">
        <div className='content-container'>
            <div className='contact-content-left'>
            <h1>
            <span>PROTECT INDONESIA </span>
            FLORA & FAUNA
            </h1>
            <p>Every contribution helps conserve
            Indonesia's unique plants and animals.</p>
            </div>

            <div className='contact-content-right'>
            <h2>SUPPORT!</h2>
            <p>Your support helps protect endangered
            wildlife and preserve Indonesia's rich
            biodiversity for future generations.</p>
            <a href="" className='Contact-button'>
                Donate Now 
                <span>→</span>
            </a>
            </div>
        </div>
        <div className='contact-content-bottom'>
            <img src= {Contactimage} alt="Tiger" />
            <div className="percentage">
                <div className="percentage-inside">
               <h1>Total Donation Collected</h1>
               <h2>Rp. 2.500.234.409</h2>
               <div className="bar">
                <div className="filled-bar">
                </div>
               </div>
               <div className="donation-detail">
                <div className="donation-detail-left">
                    <h4>2.980 Investors</h4>
               </div>
                <div className="donation-detail-right">
                    <h4>70%</h4>
                </div>
               </div>
                </div>
               </div>
        </div>
        </section>
    )
}

export default Contact;