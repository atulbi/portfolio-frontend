import React from 'react';
import Options from '../../Helpers/Options';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './../Layout.css'

const LargeSidebar = (props) => {
    const flexBox = {
        display: 'flex',
        height: 'inherit',
        flexDirection: 'column',
    }
    console.log(props.children)
    return (
        <div style={flexBox}>
            <div style={{ alignSelf: 'flex-end' }}>
                {window.screen.availWidth < 600 ? props.children[0] : <div></div>}
            </div>
            <div style={{ height: '33%', alignContent: 'center' }}>
                {props.children[1]}
                <div style={{ margin: 'auto' }}>
                    {props.state.open ?
                        <ReactCSSTransitionGroup transitionName="fadeword" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                            {props.children[2]}
                        </ReactCSSTransitionGroup>
                        :
                        <ReactCSSTransitionGroup transitionName="fadeword" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                            {props.children[3]}
                        </ReactCSSTransitionGroup>
                    }
                </div>
                <Options data={props.data} state={props.state}></Options>
            </div>
        </div>
    );
}

export default LargeSidebar;