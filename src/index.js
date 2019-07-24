import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Project Component and containers
import Layout from './Layout/Layout';
import Main from './Layout/Main/Main';
import Sidebar from './Layout/Aux/Sidebar';

// Font Awesome icons
const data = [
    {
        iconClass: 'fas fa-user-graduate',
        text: 'ABES Engineering College',
    }, {
        iconClass: 'fas fa-map-marker',
        text: '3/1361 ,Vasundhara, Ghaziabad ,U.P. ,India',
    }, {
        iconClass: 'fas fa-envelope-open-text',
        text: 'atulbisht26@gmail.com',
    }, {
        iconClass: 'fas fa-mobile-alt',
        text: '+91 8800822609',
    }
]

class Application extends React.Component {


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
            color: 'white',
            fontFamily: "'Kosugi Maru', sans-serif",
            letterSpacing: '2px',
        }

        // const arrow = this.state.o

        return (
            <Layout data={data}>
                <Sidebar>
                    <i className="fas fa-angle-right" style={iconStyle}></i>
                    <img style={imageStyle} className="ui small centered circular image" src="me.jpeg" alt="" data-tooltip="Add users to your feed" />
                    <h1 style={textStyle} >ATUL BISHT</h1>
                    <img src="right-point.png" alt="" style={{height: 100}}/>
                </Sidebar>
                <Main>
                    <p>Excepteur culpa eu adipisicing enim ipsum duis. Anim nulla aliqua fugiat pariatur. Excepteur eu ea excepteur dolor fugiat occaecat aliqua culpa velit deserunt nisi tempor ad.Enim amet dolore aute laborum ad consectetur non quis ex nostrud sit proident. Eu sint elit cillum exercitation adipisicing ullamco reprehenderit amet. Ipsum et esse aliquip incididunt. Ad esse minim occaecat eiusmod nulla qui adipisicing nisi adipisicing. Id in fugiat dolore dolor amet proident mollit.Occaecat adipisicing fugiat enim reprehenderit irure dolore mollit reprehenderit in dolore proident anim. Enim nisi nostrud duis adipisicing minim deserunt ipsum. Veniam ullamco eiusmod adipisicing officia culpa laborum.</p>
                </Main>

            </Layout>
        );
    }
}

ReactDOM.render(<Application />, document.getElementById('root'));