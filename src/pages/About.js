// inside here we just assemble the components

import React from 'react';
import Nav from "../components/Nav"
import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
 
function About () {
    return (
        <div>
            <Nav />
            <Header />
            <AboutSection />
        </div>
    )
}

export default About;