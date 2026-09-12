import Navbar from "./components/Navbar.jsx";
import Home from "./page/home.jsx";
import About from "../src/page/about.jsx";
import AboutData from "../src/data/about.js";
import Contact from "../src/page/contact.jsx";
import Footer from "./page/footer.jsx";

import Flora from "./components/Flora.jsx";
import Fauna from "./components/Fauna.jsx";

import Faunaeducation from "./components/Education.jsx";
import FaunaeducationData from "./data/FaunaEducation.js";
import Floraeducation from "./components/Education.jsx";
import FloraeducationData from "./data/FloraEducation.js";


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

            <Route path="/komodo-dragon" element={<Faunaeducation item={FaunaeducationData[0]} />} />

            <Route path="/sumatran-tiger" element={<Faunaeducation item={FaunaeducationData[1]} />} />

            <Route path="/jalak-bali" element={<Faunaeducation item={FaunaeducationData[2]} />} />
            
            <Route path="/rafflesia" element={<Floraeducation item={FloraeducationData[0]} />} />

            <Route path="/titanarum" element={<Floraeducation item={FloraeducationData[1]} />} />

             <Route path="/moonorchid" element={<Floraeducation item={FloraeducationData[2]} />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;