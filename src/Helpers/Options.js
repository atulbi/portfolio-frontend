import React from 'react';
import './options.css';
import './../Layout/Layout.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Options = (props) => {

    const iconStyle = {
        fontSize: '20px',
        flexGrow: '1',
        textAlign: 'right',
        padding: '5px 15px',
        margin: '5px 0px'
    }
    const textStyle = {
        flexGrow: '3',
        // flexShrink: '1',
        textAlign: 'left',

        margin: '5px 0px',
        textStyle: "'Kosugi Maru', sans-serif",
        letterSpacing: '2px',
    }

    return (
        <div style={{
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'row'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: '1',
            }}>
                {props.data.map((element, index) => {
                    return (
                        <i className={element.iconClass + ' '} style={iconStyle} key={index}></i>
                    )
                }
                )}
            </div>
            {
                props.state.open
                    ?
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: '1',
                    }}>
                        {props.data.map((element, index) => {
                            return (
                                <p style={textStyle} className="textSize" key={index}>
                                    {element.text}
                                </p>
                            )
                        })}
                    </div> :
                    <div></div>
            }
        </div >
    )
}

export default Options;