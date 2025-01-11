import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Service from "./components/Service/Service";

function App() {
  return (
    <BrowserRouter basename="/protfilo">
      <div>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
