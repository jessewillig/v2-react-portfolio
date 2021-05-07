import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import SkillCard from "../components/SkillCard";
import { frontEnd, backEnd, languages } from "../utils/skills";
import BackgroundImage from "../components/BackgroundImage";
import imageUrl from "../images/backgroundImage.jpg";

function Skills (props) {
    return (
        <div>
            <BackgroundImage image={imageUrl} >
            <Nav />
            <Header padding={70} title="Technical Skills" />
            <CardContainer>
                <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true" id="skills-section">
                    <SkillCard
                        skills={frontEnd}
                        title="Front End"
                        icon="desktop"
                        name="frontEnd"
                        animate="slide-left"
                    />
                    <SkillCard
                        skills={backEnd}
                        title="Back End"
                        icon="server"
                        name="backEnd"
                        animate="slide-up"
                    />
                    <SkillCard
                        skills={languages}
                        title="Languages"
                        icon="paint-bucket"
                        name="languages"
                        animate="slide-right"
                    />
                </div>
            </CardContainer>
        </BackgroundImage>
        </div>
    )
};

export default Skills;