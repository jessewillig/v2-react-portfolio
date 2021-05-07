// inside here we just assemble the components

import React from 'react';
import Nav from "../components/Nav"
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import BackgroundImage from "../components/BackgroundImage";
import imageUrl from "../images/backgroundImage.jpg";
 
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