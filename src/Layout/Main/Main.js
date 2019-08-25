import React, { useContext } from 'react';
import globalContext from './../../context/drawer-context';
import { Dimmer, Loader } from 'semantic-ui-react';

const Main = (props) => {
    const context = useContext(globalContext);
    return (
        <React.Fragment>
            <Dimmer active={context.loading} >
                <Loader />
            </Dimmer>
            {props.children}
        </React.Fragment>
    )
}

export default Main;