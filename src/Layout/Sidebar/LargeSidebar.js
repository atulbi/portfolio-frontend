import React from 'react';
import Options from '../../Helpers/Options';

import './../Layout.css';
import drawerContext from './../../context/drawer-context';

const LargeSidebar = (props) => {
    const flexBox = {
        display: 'flex',
        height: 'inherit',
        flexDirection: 'column',
    }
    console.log(props.children)
    return (
        <drawerContext.Consumer>
            {
                (context) => (
                    <div style={flexBox}>
                        <div style={{ alignSelf: 'flex-end' }}>
                            {window.screen.availWidth < 600 ? props.children[0] : <div style={{ height: 30 }}></div>}
                        </div>
                        <div style={{ minHeight: '30%', alignContent: 'center' }}>
                            {props.children[1]}
                            <div style={{ margin: 'auto' }}>
                                {context.open ?
                                    props.children[2]
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                        <Options data={props.data}></Options>
                        <div style={{ flexGrow: 2, display: 'flex', alignItems: 'flex-end', maxHeight:'inherit'}}>
                            <img src={props.children[3].props.src} alt="" className={props.children[3].props.className + (context.open ? "bigBitmoji" : "")} />
                        </div>
                    </div>
                )
            }        
        </drawerContext.Consumer>
    );
}

export default LargeSidebar;