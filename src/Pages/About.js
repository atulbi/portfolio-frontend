import React from 'react';
import './About.css';

const achievemet = [
    "Achieved Highest Rating of 2024 (5 Star ) on codechef.",
    "Global 105 rank in Codechef May Challenge 2018 Division 1.",
    "Solved over 400+ problems on online judges such as Codechef, Codeforces, Hackerearth.",
    "5th Team Rank in \"Battle of Brains\" Coding contest held on Codechef by ABES Engineering College"
]

const About = (props) => {
    return (
        <div className="right-container">
            <h1 style={{ fontSize: '11vmin', fontWeight: 600, fontFamily: 'inherit' }}>Hello World</h1>
            <h1 style={{ fontSize: '7vmin', fontFamily: 'inherit' }}>I am Atul Bisht</h1>
            {/* <br/> */}
            <h1 style={{ fontSize: '8vmin', fontFamily: 'inherit', letterSpacing: 5 }}>ABOUT</h1>
            <p className="heading-text">
                Morten Rand-Hendriksen is a senior staff author at lynda.com at LinkedIn and the Director of Pink & Yellow Media Inc. – a digital media company based in Burnaby, BC.
   This blog was created as a learning-through-teaching experiment and now functions as a web development and design blog focusing mainly on Expression Web, CSS and WordPress customization.
   Morten is also the co-creator of several startups, a co-organizer of the Vancouver WordPress Meetup Group and WordCamp Vancouver, and the creator of the 12×12 Vancouver Photo Marathon.
   You can stalk him on Twitter @mor10 and like Pink & Yellow Media on Facebook.
             </p>
            <h1 style={{ fontSize: '8vmin', fontFamily: 'inherit', letterSpacing: 2 }}>What I Can Do</h1>
            <div className="what-i-can-do-grid">
                <div className="item0">
                    <img className="img-of-grid" src="design.gif" alt=""></img>
                </div>
                <div className="item1">
                    <p className="header-grid">Develop What You Need</p>
                    <p className="text-of-grid">
                        I'm a developer, so I know how to create your website to run across devices using the latest technologies available.                    </p>
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
            {achievemet.map((data, index) => (
                <div className="ui vertical segment" key={index}>
                    <p className="text-of-grid" style={{color: "#424242"}}>{data}</p>
                </div>
            ))}
        </div>
    )
}

export default About