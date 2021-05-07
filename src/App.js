import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNav from "./components/Nav/MobileNav";

function App() {
  return (
    <Router>
      <Route exact path='/' component={About} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route exact path="/skills" component={Skills} />
      <MobileNav />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App;
