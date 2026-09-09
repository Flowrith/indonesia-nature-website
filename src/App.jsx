import Navbar from "./components/Navbar.jsx";
import Home from "./page/home.jsx";
import About from "../src/page/about.jsx";
import AboutData from "../src/data/about.js";
import Contact from "../src/page/contact.jsx";
import Footer from "./page/footer.jsx";

import Flora from "./components/Flora.jsx";
import Fauna from "./components/Fauna.jsx";


import { Routes, Route } from "react-router-dom";

function App(){
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About item={AboutData[0]} />
              <Contact />
            </>
          }
        />

        <Route path="/flora" element={<Flora />} />
        <Route path="/fauna" element={<Fauna />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;