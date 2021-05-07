// inside here we just assemble the components

import React from 'react';
import Nav from "../components/Nav"
import HomeHeader from "../components/HomeHeader";
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
                <HomeHeader />
                <AboutSection />
            </BackgroundImage>
        </div>
    )
}

export default About;