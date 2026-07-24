    import '../styles/navbar.css';
    import Logo from "../assets/Logo.png";
    function Navbar() {
        return(

    <nav className = "navbar">
      <img src={Logo} alt="Logo" width="50" height="50"/>
      <h1>NATURE</h1>
      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
)
}
export default Navbar;