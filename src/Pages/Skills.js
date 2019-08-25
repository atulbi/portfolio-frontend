import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';
import './Work.css';
import './Skills.css';
import { Icon } from 'semantic-ui-react';
import globalContext from './../context/drawer-context';


const Rating = (props) => {
    let item = [];
    for (let i = 0; i < 5; i++) {
        if (i < props.rate) {
            item.push(<Icon className={props.active} as="i" name="star" size="tiny" />);
        } else {
            item.push(<Icon className={props.active} style={{ opacity: 0.2 }} as="i" name="star" size="tiny" />)
        }
    }
    return item;
}


const Skills = (props) => {
    const res = useContext(globalContext);
    return (
        <div className="Work-font">
            <div className="mobile Skills-Page-Header ">
                <img src="skills.gif" alt="" style={{ height: '30vmax' }}></img>
                <p style={{ fontSize: '7vmax', fontWeight: 400, fontFamily: 'inherit', marginBottom: 10 }}>Skills</p>
                <p style={{ fontSize: '1.75vmax' }}>
                    “Life without knowledge is death in disguise.”
                </p>
                <div class="ui divider"></div>
            </div>
            <React.Fragment>
                <div className="skill-page" style={{ background: "#F3EFE0", color: "#00B5AD" }}>
                    <div className="skill-type-header" >Fundamentals</div>
                    <hr className="hr" />
                    <div className="skill-box">
                        {res.ability.fundamentals.map((item, index) => (
                            <div key={index} className="skill-flex-element">
                                <div style={{ flexGrow: 1, textAlign: "start" }}>{item.data}</div>
                                <div style={{ alignSelf: "center" }}>
                                    {
                                        <Rating rate={item.rating} active="fun_active" />
                                    }
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="skill-page" style={{ background: "#F8C687", color: "#579BFB" }}>
                    <div className="skill-type-header" >Skills</div>
                    <hr className="hr" style={{ borderColor: "rgb(80, 39, 0)" }} />
                    <div className="skill-box">
                        {res.ability.skills.map((item, index) => (
                            <div key={index} className="skill-flex-element">
                                <div style={{ flexGrow: 1, textAlign: "start", color: "rgb(80, 39, 0)" }}>{item.data}</div>
                                <div style={{ alignSelf: "center" }}>
                                    {
                                        <Rating rate={item.rating} active="skill_active" />
                                    }
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="skill-page" style={{ background: "#03DAC6", color: "#424242" }}>
                    <div className="skill-type-header" >Tools</div>
                    <hr className="hr" style={{ borderColor: "#263238" }} />
                    <div className="skill-box">
                        {res.ability.tools.map((item, index) => (
                            <div key={index} className="skill-flex-element">
                                <div style={{ flexGrow: 1, textAlign: "start", color: "#263238" }}>{item.data}</div>
                                <div style={{ alignSelf: "center" }}>
                                    {
                                        <Rating rate={item.rating} active="tool_active" />
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skill-page" style={{ background: "#FAFAFA", color: "#222222" }}>
                    <div className="skill-type-header" >Additional Skills</div>
                    <hr className="hr" style={{ borderColor: "#222222" }} />
                    <div className="skill-box">
                        {res.ability.additionals.map((item, index) => (
                            <div key={index} className="skill-flex-element">
                                <div style={{ flexGrow: 1, textAlign: "start", color: "#222222" }}>{item.data}</div>
                                <div style={{ alignSelf: "center", minWidth: "25%" }}>
                                    {
                                        <Rating rate={item.rating} active="tool_active" />
                                    }
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default withRouter(Skills);