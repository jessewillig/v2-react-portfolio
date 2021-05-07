import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import SkillCard from "../components/SkillCard";
import { frontEnd, backEnd, languages } from "../utils/skills";
// need to add import for BackgroundImage and import for imageUrl

function Skills () {
    return (
        <div>
            {/* <BackgroundImage image={imageUrl} > */}
            <Nav />
            <Header padding={70} title="Technical Skills" />
            <CardContainer>
                <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true" id="skills-section">
                    <SkillCard
                        skills={frontEnd}
                        title="Client Side"
                        icon="desktop"
                        name="client"
                        animate="slide-left"
                    />
                    <SkillCard
                        skills={backEnd}
                        title="Server Side"
                        icon="server"
                        name="server"
                        animate="slide-up"
                    />
                    <SkillCard
                        skills={languages}
                        title="Design"
                        icon="paint-bucket"
                        name="design"
                        animate="slide-right"
                    />
                </div>
            </CardContainer>
        {/* </BackgroundImage> */}
        </div>
    )
};

export default Skills;