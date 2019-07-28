import React from 'react';
import { withRouter } from 'react-router-dom';
import './Work.css';
import './Experiences.css';
import './About.css'

const data = [{
    company: "Beadcore Infotech Private Limited",
    type: "Internship",
    duration: "June 2019 - Present",
    description: ["My daily tasks include writing and cross-compiling code for Neural Processing Unit in C++.",
        "I tested performance of multiple machine learning model on NPU's."]
},
{
    company: "Beadcore Infotech Private Limited",
    type: "Internship",
    duration: "June 2019 - Present",
    description: ["My daily tasks include writing and cross-compiling code for Neural Processing Unit in C++.",
        "I tested performance of multiple machine learning model on NPU's."]
}]

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
    const name = "experiences.gif" + "?a=" + Math.random();
    console.log(name);
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
                    {
                        data.map((company, index) => (
                            <div className="ui vertical segment" key={index}>
                                <p className="header-grid"><span style={{fontFamily: "'Bree Serif', serif"}}>{company.company}</span> | {company.type} | {company.duration}</p>
                                {company.description.map((line, index) => (
                                    <p className="text-of-grid" style={{marginBottom: '3px'}}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        ))
                    }
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
                                    <p className="text-of-grid" style={{marginBottom: '3px'}}>
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
