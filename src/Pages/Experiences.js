import React from 'react';
import { withRouter } from 'react-router-dom';
import './Work.css';
import './Experiences.css';

const Experiences = (props) => {
    const name = "experiences.gif" + "?a="+ Math.random();
    console.log(name);
    return (
        <div className="Exp-font">
            <div className="Page-header Color-change" style={{textAlign:'center'}}>
                <img src={name} alt="" style={{ height: '30vmax' }}></img>
                <p style={{ fontSize: '7vmax', fontWeight: 400, fontFamily: 'inherit', marginBottom: 10 }}>Experiences</p>
                <p style={{ fontSize: '1.75vmax' }}>
                    " Notice the small things. The rewards are inversely proportional. "
                </p>
            </div>
        </div>

    )
}

export default withRouter(Experiences);
