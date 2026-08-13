import Navbar from "./components/Navbar.jsx";
import Home from "./page/home.jsx";
import About from "../src/page/about.jsx";
import AboutData from "../src/data/about.js";
import Contact from "../src/page/contact.jsx";
import Footer from "./page/footer.jsx";

function App(){
  return (
    <>
      <Navbar />

      <Home />

      <About item={AboutData[0]}/>

      <Contact />

      <Footer />

    </>
  );
}

export default App;