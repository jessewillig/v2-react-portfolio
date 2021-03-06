import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNav from "./components/Nav/MobileNav.js";
import ResumeModal from "./components/ResumeModal";

function App() {
  return (
    <Router>
        <Route exact path='/' component={About} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/skills" component={Skills} />
        <MobileNav />
        <ResumeModal/>
        <Contact />
        <Footer />
    </Router>
  )
}

export default App;
