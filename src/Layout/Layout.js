import React from 'react';
import './Layout.css';
import LargeSidebar from './Sidebar/LargeSidebar';


import drawerContext from './../context/drawer-context';

class Layout extends React.Component {

    static contextType = drawerContext;
    static deviceTypeMobile;
    css = ['left']
    right = ['right']

    componentWillMount() {
        this.deviceTypeMobile = window.screen.width <= 700 ? 1 : 0;
        if (this.deviceTypeMobile) {
            this.css.push("mobile-width");
        }
    }

    componentDidMount() {
        if (!this.deviceTypeMobile) {
            this.context.switchDrawer();
        }
    }

    hand = () => {
        if (!this.deviceTypeMobile) {
            return;
        }
        this.context.switchDrawer();
        if (this.css.includes('mobile-hover-exit')) {
            this.css.pop();
        }
        this.css.push('mobile-hover');
        this.right.push('mobile-right-translate')
    }

    handexit = () => {
        if (!this.deviceTypeMobile) {
            return;
        }
        this.css.pop();
        this.css.push('mobile-hover-exit');
        this.right.pop();
        this.context.switchDrawer();
    }

    render() {

        const sidebar = React.Children.toArray(this.props.children);
        // console.log(sidebar)

        // const show = this.state.open || window.screen.availWidth >= 6000 ? sidebar[1] : sidebar[0];
        let show = sidebar[0];
        let right = (
            <div className={this.right.join(" ")} >
                {sidebar[1]}
            </div>
        );
        console.log(right);
        return (
            <div className={'grid mobile-grid'}>
                <div onMouseEnter={this.hand} onMouseLeave={this.handexit} className={this.css.join(' ')}>
                    <LargeSidebar data={this.props.data}>
                        {show.props.children}
                    </LargeSidebar>
                </div>
                {right}
            </div>
        );
    }
}

export default Layout;