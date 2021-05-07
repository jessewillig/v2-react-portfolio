import React from "react";
import "./style.css";

function Contact() {
    return (
        <div id="contact-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <h3 id="contact-title">Contact Me</h3>
                <ul className="uk-list">
                    <li>
                        <a uk-icon="icon: mail" className="contact-icon contact-link-icon"
                            href="mailto:jessewillig@outlook.com"></a>
                        <a className="contact-link contact-li uk-text-middle"
                            href="mailto:jessewillig@outlook.com">jessewillig@outlook.com</a>
                    </li>
                    <li>
                        <span className="contact-icon" uk-icon="icon: receiver"></span>
                        <span className="contact-li uk-text-middle">208.771.3143</span>
                    </li>
                    <li>
                        <span uk-icon="icon: home" className="contact-icon"></span>
                        <span className="contact-li uk-text-bottom">Coeur d'Alene, ID 83815</span>
                    </li>
                    <li>
                        <a uk-icon="icon: github" href="https://github.com/jessewillig"
                            className="contact-icon contact-link-icon" target="_blank"></a>
                        <a className="contact-link contact-li uk-text-middle" href="https://github.com/jessewillig"
                            target="_blank">jwillig-alt</a>
                    </li>
                    <li>
                        <a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/jessewillig/"
                            className="contact-icon contact-link-icon" target="_blank"></a>
                        <a className="contact-link contact-li uk-text-bottom" href="https://www.linkedin.com/in/jessewillig/"
                            target="_blank">Jesse Willig</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Contact;