import Hero from "../components/Hero.jsx";
import Category from "../components/Category.jsx";
import Fauna from "../components/Fauna.jsx";
import Flora from "../components/Flora.jsx";
import Faunaeducation from "../components/Education.jsx";
import FaunaeducationData from "../data/FaunaEducation.js";
import Floraeducation from "../components/Education.jsx";
import FloraeducationData from "../data/FloraEducation.js";
function Home() {
    return (
        <>
            <Hero />

            <Category />

            <Fauna />

            <Flora />

            <Faunaeducation item={FaunaeducationData[0]} />

            <Faunaeducation item={FaunaeducationData[1]} />

            <Faunaeducation item={FaunaeducationData[0]} />
            
            <Floraeducation item={FloraeducationData[0]} />

            <Floraeducation item={FloraeducationData[1]} />

             <Floraeducation item={FloraeducationData[2]} />
        </>
    );
}

export default Home;
