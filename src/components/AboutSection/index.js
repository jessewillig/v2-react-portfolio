import React from "react";
import "./style.css";
import Header from "../Header";
import headShot from "../../images/jesse.jpg";

function AboutSection () {
    return (
        <div className="uk-container">
            <div className="uk-text-center">
                <div id="about-me-container">
                    <div id="about-me">
                        <Header title="About Me" />
                        <img src={headShot} alt="jesse" />
                        <p className="uk-text-justify about-me-desc">
                            Hi! I'm Jesse, I'm a full-stack web developer and designer. I spent
                            the last 8+ years of my career in customer service and the financial field. During my time in those industries I have learned how to creatively solve problems, organizing/prioritizing and strong written/oral communication skills
                            that have made me successful in every job I've had.
                            It's my passion for problem solving that drove me to pursue a new career in Software Engineering and I'm excited to put these skills to work as part of a fast-paced and quality-driven team.
                        <br /><br />
                            Currently, I'm finishing up a Full-Stack Software Engineer bootcamp through the University of
                            Washington, where I am learning to convert my analytical skills to
                            building impactful user experiences on
                            web applications. I hope to transition into Software Engineering as a full time career, and am open to any
                            and all opportunities. I am excited to put my current and newly developed web developer skills to work as part of a team!
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSection;