import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
    <nav className="uk-navbar-container uk-navbar navbar" >
    <div className="uk-navbar-right">
        <ul className="uk-navbar-nav  uk-visible@m">
            <li><Link to="/about" className="nav-item"> About</Link></li>
            <li><Link to="/portfolio" className="nav-item"> Portfolio</Link></li>
            <li><Link to="/skills" className="nav-item"> Skills</Link></li>
        </ul>
        <a className="uk-hidden@m" href="#menu-canvas" uk-toggle="target: #menu-canvas"><span className="menu-icon" uk-icon="icanon: menu; ratio: 1.5"></span></a>
    </div>
  
</nav>  
</div>
    )
};

export default Nav;

