import { BrowserRouter as Router } from "react-router-dom";
import NavbarComponent from "./Components/Navbar";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Visionary from "./Components/Visionary";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Banner />
      <Skills />
      <Visionary />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
