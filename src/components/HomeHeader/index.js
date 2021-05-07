import React from "react";
import "./style.css";

function HomeHeader () {
    return (
        <div className="uk-container">
            <div className="uk-text-center">
                <div id="title-container">
                    <h1 className="uk-heading-medium" id="my-name" style={{ margin: 0 }}>Jesse Willig</h1>
                    <h5 className="uk-text-lighter subtitle" id="my-sub">Full-Stack Web Developer & Software Engineer</h5>
                </div>
            </div>
        </div>
    )
};

export default HomeHeader;