import React from 'react';
import { withRouter } from 'react-router-dom';
import './Work.css';
import './Experiences.css';
import './About.css';
import globalContext from './../context/drawer-context';

const educationData = [{
    school: "ABES Engineering College",
    type: "BTech",
    duration: "2016 - Present",
    description: ["I am 4th year student pursuing my major in Computer Science and Engineering."]
}, {
    school: "Vanasthali Public School",
    type: "12th",
    duration: "2016",
    description: ["I did my higher secondary education from CBSE board with major subjects as Physics, Chemistry and Maths."]
}, {
    school: "Vanasthali Public School",
    type: "10th",
    duration: "2014",
    description: ["I pursued my secretary education from CBSE."]
}]

const Experiences = (props) => {
    // eslint-disable-next-line no-useless-concat
    const name = "experiences.gif" + "?a=" + Math.random();
    return (
        <div className="Exp-font">
            <div className="Page-header Color-change mobile" style={{ textAlign: 'center' }}>
                <img src={name} alt="" style={{ height: '30vmax' }}></img>
                <p style={{ fontSize: '7vmax', fontWeight: 400, fontFamily: 'inherit', marginBottom: 10 }}>Experiences</p>
                <p style={{ fontSize: '1.75vmax' }}>
                    " Notice the small things. The rewards are inversely proportional. "
                </p>
            </div>
            <div className="Tab-box">
                <div className="Tab-box-left" style={{fontSize: '6vmin'}}>
                    <p>Careers</p>
                </div>
                <div className="Tab-box-right">
                    <globalContext.Consumer>
                        {
                            (data) => (
                                <React.Fragment>
                                    {
                                        data.jobs.map((company, index) => (
                                            <div className="ui vertical segment" key={index}>
                                                <p className="header-grid"><span style={{fontFamily: "'Bree Serif', serif"}}>{company.company}</span> | {company.typeOfJob} | {company.duration}</p>
                                                {company.description.map((line, index) => (
                                                    <p className="text-of-grid" style={{marginBottom: '3px'}} key={index}>
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>
                                        ))
                                    }
                                </React.Fragment>
                            )
                        }
                    </globalContext.Consumer>
                </div>
                <div className="Tab-box-left" style={{fontSize: '6vmin'}}>
                    <p>Education</p>
                </div>
                <div className="Tab-box-right">
                    {
                        educationData.map((school, index) => (
                            <div className="ui vertical segment" key={index}>
                                <p className="header-grid"><span style={{fontFamily: "'Bree Serif', serif"}}>{school.school}</span> | {school.type} | {school.duration}</p>
                                {school.description.map((line, index) => (
                                    <p className="text-of-grid" style={{marginBottom: '3px'}} key={index}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default withRouter(Experiences);
