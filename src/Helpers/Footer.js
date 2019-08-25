import React from 'react';
import './Footer.css';
import { Icon } from 'semantic-ui-react';
const Footer = () => {
    return (
        <div className="Footer">
            <div className="iconFlex">
                <a style={{ marginRight: "5vmin" }} href={"https://github.com/atulbi"} target="_blank" rel="noopener noreferrer"><i className="fab fa-github inc"></i></a>
                <a style={{ marginRight: "5vmin" }} href={"https://www.linkedin.com/in/atulbi/"} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in inc"></i></a>
                <a style={{ marginRight: "0" }} href={"https://www.facebook.com/atulbi26"} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f inc"></i></a>
            </div>
            <p>Made with <Icon className="fas fa-heart"></Icon > by Atul Bisht</p>
        </div>
    )
}

export default Footer
