import React from 'react';
import './About.css';
import globalContext from './../context/drawer-context';

const About = (props) => {
    return (
        <div className="right-container">
            <h1 style={{ fontSize: '11vmin', fontWeight: 600, fontFamily: 'inherit' }}>Hello World</h1>
            <h1 style={{ fontSize: '7vmin', fontFamily: 'inherit' }}>I am Atul Bisht</h1>
            {/* <br/> */}
            <h1 style={{ fontSize: '8vmin', fontFamily: 'inherit', letterSpacing: 5 }}>ABOUT</h1>
            <div className="heading-text">
                <p>
                    I am a final year undergraduate and currently pursuing a major in Computer Science and Engineering from ABES Engineering College,
                    Ghaziabad, India. I love solving problems based on Data Structures, Algorithms and Mathematics.
                    I participate in Competitive Programming platforms like Codechef, Codeforces.
                </p>
                <p>
                    I occasionally contribute to Open Source Organizations like KDE. I am maintaining Touchpad Config Module on KDE Plasma Desktop Environment
                    (Popular Alternative to GNOME on Ubuntu) from April 2019. Here, I learned how to work with large codebases and applications with millions of user.
                </p>
                <p>
                    I love developing Web Applications. I've done multiple projects with MERN stack including this portfolio. 
                    Refer to Work section for more of my work.
                </p>

            </div>
            <h1 style={{ fontSize: '8vmin', fontFamily: 'inherit', letterSpacing: 2 }}>What I Can Do</h1>
            <div className="what-i-can-do-grid">
                <div className="item0">
                    <img className="img-of-grid" src="design.gif" alt=""></img>
                </div>
                <div className="item1">
                    <p className="header-grid">Develop What You Need</p>
                    <p className="text-of-grid">
                        I'm a developer, so I know how to create your application to run across multiple devices and architectures using the latest technologies available.                    </p>
                </div>
                <div className="item2">
                    <p className="header-grid" >Design What You Want</p>
                    <p className="text-of-grid">
                        I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.
                    </p>
                </div>
                <div className="item3"><img className="img-of-grid" src="responsive_website.gif" alt=""></img></div>
            </div>
            <h1 style={{ fontSize: '8vmin', fontFamily: 'inherit', letterSpacing: 2 }}>What I've been up to</h1>
            <globalContext.Consumer>
                {
                    (data) => (
                        <React.Fragment>
                            {
                                data.achievements.map((data, index) => (
                                    <div className="ui vertical segment" key={index}>
                                        <p className="text-of-grid" style={{ color: "#424242" }}>{data.line}</p>
                                    </div>
                                ))
                            }
                        </React.Fragment>
                    )
                }
            </globalContext.Consumer>
            {/* {achievemet.map((data, index) => (
                <div className="ui vertical segment" key={index}>
                    <p className="text-of-grid" style={{ color: "#424242" }}>{data}</p>
                </div>
            ))} */}
        </div>
    )
}

export default About