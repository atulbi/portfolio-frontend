import React, { useState, useEffect } from 'react';
import Options from '../../Helpers/Options';

import './../Layout.css';
import drawerContext from './../../context/drawer-context';

const textStyle = {
    margin: '0.15rem auto',
    fontFamily: "'Kosugi Maru', sans-serif",
    fontSize: '2.2rem',
    fontWeight: 'bold'
}

const DelayComponent = (props) => {
    const [show, setshow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setshow(true);
        }, props.wait)
    }, [props.wait])
    return show ? props.children : <p style={textStyle} >AB</p>;
}

const LargeSidebar = (props) => {
    const flexBox = {
        display: 'flex',
        height: 'inherit',
        flexDirection: 'column',
    }

    return (
        <drawerContext.Consumer>
            {
                (context) => (
                    <div style={flexBox}>
                        <div style={{ alignSelf: 'flex-end' }}>
                            {window.screen.availWidth < 600 ? React.cloneElement(props.children[0], { className: context.open ? "fas fa-angle-left" : "fas fa-angle-right" }) : <div style={{ height: 30 }}></div>}
                        </div>
                        <div style={{ minHeight: '240px', alignContent: 'center' }}>
                            {props.children[1]}
                            <div style={{ margin: 'auto' }}>
                                {
                                    context.open ?
                                        <DelayComponent wait={40} >{props.children[2]}</DelayComponent>
                                        : <p style={textStyle} >AB</p>
                                }
                            </div>
                        </div>
                        <Options data={props.data}></Options>
                        <div style={{ flexGrow: 2, display: 'flex', alignItems: 'flex-end', maxHeight: 'inherit' }}>
                            <img src={props.children[3].props.src} alt="" className={props.children[3].props.className + (context.open ? "bigBitmoji" : "")} />
                        </div>
                    </div>
                )
            }
        </drawerContext.Consumer>
    );
}

export default LargeSidebar;