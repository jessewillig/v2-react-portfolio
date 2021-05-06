// inside here we just assemble the components

import React from 'react';
import MobileNav from '../components/MobileNav';
import Nav from "../components/Nav"
// import // AboutSection TEXT

 
function About () {
    return (
        <div>
            <Nav />
        <MobileNav />
        {/* // <AboutSection /> */}
        </div>
    )
}

export default About;