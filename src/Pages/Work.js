import React from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';
import './Work.css';
import globalContext from './../context/drawer-context';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';


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
            <globalContext.Consumer>
                {
                    (data) => (
                        <React.Fragment>
                            <Dimmer active={data.projects.length === 0}>
                                <Loader></Loader>
                            </Dimmer>
                            {
                                data.projects.map((thisProject, index) => (
                                    <React.Fragment key={index}>
                                        <div className="Project-page" style={{ background: thisProject.backgroundColor, color: thisProject.textColor }} key={index}>
                                            <img src={thisProject.projectImage} alt="" style={{ height: '25vmax', maxWidth: '80vmin' }}></img>
                                            <p style={{ fontSize: '2vmax', fontFamily: "'Bree Serif', serif", margin: "10px auto" }}>{thisProject.heading}</p>
                                            <p style={{ fontSize: '1.5vmax', fontWeight: 600 }}>
                                                {thisProject.typeOfProject}
                                            </p>
                                            <p style={{ fontSize: '1.75vmax' }}>
                                                {thisProject.description}
                                            </p>
                                            <a className="ui button" style={{ background: thisProject.buttonColor, padding: "2vmin 5vmin", fontFamily: "inherit", fontWeight: 600, fontSize: "1vmax" }} href={thisProject.buttonLink} target="_blank" rel="noopener noreferrer">{thisProject.buttonText}</a>
                                        </div>
                                    </React.Fragment>
                                ))
                            }
                        </React.Fragment>
                    )
                }
            </globalContext.Consumer>

        </div>
    )
}

export default withRouter(Work)
