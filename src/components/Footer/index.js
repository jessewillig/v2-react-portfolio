import React from 'react';
import './style.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
            <footer className="uk-text-center uk-text-middle footer">
                <span className="name-footer"> © Jesse Willig</span> <br />
                <a uk-icon="icon: github" href="https://github.com/jessewillig" className="contact-icon contact-link-icon" target="_blank"></a>
                <a uk-icon="icon: mail" className="contact-icon contact-link-icon" href="mailto:jessewillig@outlook.com"></a>
                <a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/jessewillig/" target="_blank" className="contact-icon contact-link-icon"></a>
                {/* <a uk-icon="icon: file-text" href="" target="_blank" className="contact-icon contact-link-icon"></a> */}
            </footer>
            </div>
        )
    }
    
};

export default Footer;

