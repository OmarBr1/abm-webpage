import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Valeurs from "./components/Valeurs";
import Missions from "./components/Missions";
import Profession from "./components/Profession";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Valeurs />
      <Missions />
      <Profession />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
