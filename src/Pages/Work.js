import React from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';
import './Work.css'

const Work = (props) => {
    return (
        <div className="Work-font">
            <div className="Page-header mobile">
                <img src="work.gif" alt="" style={{ height: '30vmax' }}></img>
                <p style={{ fontSize: '7vmax', fontWeight: 400, fontFamily: 'inherit', marginBottom: 10 }}>Work</p>
                <p style={{ fontSize: '1.75vmax' }}>
                    Here's a selection of some recent work. For more up to the minute work you can visit me on
                    <a href="https://www.github.com/atulbi" target="_blank" rel="noopener noreferrer"> github</a>.
                </p>
            </div>
            <div className="Project-page">
                <img src="kde0.png" alt="" style={{ height: '25vmax', maxWidth: '80vmin' }}></img>
                <p style={{ fontSize: '2vmax', fontFamily: "'Bree Serif', serif", margin: "10px auto" }}>Touchpad KCM</p>
                <p style={{ fontSize: '1.5vmax', fontWeight: 600 }}>
                    Open Source Contribution to KDE Plasma
                </p>
                <p style={{ fontSize: '1.75vmax' }}>
                    Improved Touchpad Support on KDE Plasma When Libinput Driver is used on X11 Session.
                </p>
                <a class="ui button" style={{ background: "#FFFFFF", padding: "2vmin 5vmin", fontFamily: "inherit", fontWeight: 600, fontSize: "1vmax" }} href="https://phabricator.kde.org/D20186" target="_blank" rel="noopener noreferrer">VIEW ON PHABRICATOR</a>
            </div>
        </div>
    )
}

export default withRouter(Work)
