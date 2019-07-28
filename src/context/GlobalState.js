import React, { Component } from 'react';
import AuthContext from './drawer-context';

class GlobalState extends Component {
    state = {
        open: false
    }
    switchDrawer = () => {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    }

    render() {
        return (
            <AuthContext.Provider value={{
                open: this.state.open,
                switchDrawer: this.switchDrawer
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default GlobalState;