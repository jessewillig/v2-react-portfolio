// inside here we just assemble the components

import React from 'react';
import Nav from "../components/Nav"
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
// need to add import for BackgroundImage and import for imageUrl
 
function About () {
    return (
        <div>
            <BackgroundImage image={imageUrl}>
                <Nav />
                <Header />
                <AboutSection />
            </BackgroundImage>
        </div>
    )
}

export default About;