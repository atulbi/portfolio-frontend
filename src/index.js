import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './index.css';

// Project Component and containers
import Layout from './Layout/Layout';
import Main from './Layout/Main/Main';
import Sidebar from './Layout/Aux/Sidebar';
import GlobalState from './context/GlobalState';
import About from './Pages/About';
import drawerContext from './context/drawer-context';
import Work from './Pages/Work';
import ScrollToTop from './Helpers/ScrollToTop';
import Experiences from './Pages/Experiences';

// Font Awesome icons
const data = [
    {
        iconClass: 'fas fa-user-graduate',
        text: 'About',
    }, {
        iconClass: 'fas fa-map-marker',
        text: 'Work',
    }, {
        iconClass: 'fas fa-mobile-alt',
        text: 'Experiences',
    }, {
        iconClass: 'fas fa-envelope-open-text',
        text: 'Skills',
    }, {
        iconClass: 'fas fa-mobile-alt',
        text: 'Contact',
    }
]

class Application extends React.Component {
    static contextType = drawerContext;

    render() {
        const iconStyle = {
            fontSize: '32px',
            padding: '5px 15px',
        }
        const imageStyle = {
            padding: "5px",
            width: '150px',
            height: 'auto'
        }
        const textStyle = {
            margin: '0.15rem auto',
            color: 'white',
            fontFamily: "'Kosugi Maru', sans-serif",
            letterSpacing: '2px',
            fontSize: '2.2rem',
            fontWeight: 'bold'
        }

        // const arrow = this.state.o
        return (
            <GlobalState>
                <Router>
                    <Layout data={data}>
                        <Sidebar>
                            <i className="fas fa-angle-right" style={iconStyle}></i>
                            <img style={imageStyle} className="ui small centered circular image" src="me.jpeg" alt="" data-tooltip="Add users to your feed" />
                            <p style={textStyle} >ATUL BISHT</p>
                            <img src="right-point.png" alt="" className={"rightPoint "} />
                        </Sidebar>
                        <Main>
                            <ScrollToTop>
                                <Route exact path="/" render={() => (<Redirect to="/about" />)} />
                                <Route exact path="/about" render={() => (<About />)}></Route>
                                <Route exact path="/work" render={() => (<Work />)}></Route>
                                <Route exact path="/experiences" render={() => (<Experiences/>)} ></Route>
                                <Route exact path="/skills" ></Route>
                                <Route exact path="/contact" ></Route>
                            </ScrollToTop>
                        </Main>
                    </Layout>
                </Router>
            </GlobalState>
        );
    }
}

ReactDOM.render(<Application />, document.getElementById('root'));