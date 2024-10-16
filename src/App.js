import NavBar from "./components/NavBar";
import "./App.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Experience from "./components/Experience";
// import 'animate.css';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      {/* <Newsletter /> */}
    </>
  );
}

export default App;
