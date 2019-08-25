import React, { useState } from 'react';
import './options.css';
import './../Layout/Layout.css';
import drawerContext from './../context/drawer-context';
import { NavLink, withRouter } from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Options = (props) => {
    let [selectedKey, setSelectedKey] = useState(0);
    const iconStyle = {
        fontSize: 'inherit',
        textAlign: 'right',
        margin: '0.75rem 0px',
    }
    const textStyle = {
        textAlign: 'left',
        margin: '5px 0px',
        textStyle: "'Kosugi Maru', sans-serif",
        letterSpacing: '2px',
    }

    return (
        <drawerContext.Consumer>
            {
                (context) => (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 3
                    }}>
                        {props.data.map((element, index) => {
                            return (
                                <NavLink to={element.text.toLowerCase()}
                                    className={"disableAnchor mybtn " + (selectedKey === index ? "selected" : "")}
                                    key={index} onClick={(e) => { e.stopPropagation();setSelectedKey(index);}}   
                                >
                                    <div className="" style={{ display: 'flex' }}>
                                        <i className={element.iconClass + ' subIcon'} style={iconStyle} ></i>
                                        {context.open ?
                                            <div className="" style={{ flexGrow: 1, alignSelf: 'center' }}>
                                                <p style={textStyle} className="textSize">
                                                    {element.text}
                                                </p>
                                            </div> :
                                            <div></div>
                                        }
                                    </div>
                                </NavLink>
                            )
                        }
                        )}
                    </div>
                )
            }
        </drawerContext.Consumer>
    )
}

export default withRouter(Options);