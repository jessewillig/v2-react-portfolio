import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

function MobileNav() {
    return (
        <div>
        <nav id="menu-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <ul className="uk-list uk-hidden@m">
                    <li><Link to="/about" className="nav-item mobile-nav-item">About</Link></li>
                    <li><Link to="/portfolio" className="nav-item mobile-nav-item">Portfolio</Link></li>
                    <li><Link to="/skills" className="nav-item mobile-nav-item">Skills</Link></li>
                    <li><Link to="/contact" className="nav-item mobile-nav-item">Contact</Link></li>
                </ul>
                <a className="uk-visible@m" href="#menu-canvas" uk-toggle="target: #menu-canvas"><span className="menu-icon" uk-icon="icanon: menu; ratio: 1.5"></span></a>
            </div>
        </nav>
        </div>
    )
};

export default MobileNav;

