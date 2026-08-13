import '../styles/footer.css';
import BiggerLogo from '../assets/bigger-logo.png';

function Footer() {
    return(
        
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                <div className="footer-logo">
                <img src={BiggerLogo} alt="Logo" className="footer-logo-image" />
                <h1>NATURE</h1>
                </div>
                    <p>
                    <span>Every contribution helps</span>
                    protect Indonesia's unique biodiversity.
                    </p>
                </div>
                <div className="footer-content-right">
                    <h1>EXPLORE</h1>
                    <ul className="footer-links">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                    <ul>
                    <li>📧 hello@natureofindonesia.com</li>
                    <li>📍 Indonesia</li>
                    <li>☎️ +62 xxx-xxxx-xxxx</li>
                </ul>
                </div>

            </div>
        </footer>

    )
}
export default Footer;