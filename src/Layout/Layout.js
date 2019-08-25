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

    hand = (e) => {
        // console.log(e);
        e.stopPropagation();
        if (!this.deviceTypeMobile || this.context.open) {
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
        if (!this.deviceTypeMobile || !this.context.open) {
            return;
        }
        this.css.pop();
        this.css.push('mobile-hover-exit');
        this.right.pop();
        this.context.switchDrawer();
    }

    render() {

        const sidebar = React.Children.toArray(this.props.children);

        let show = sidebar[0];
        let right = (
            <div className={this.right.join(" ")} >
                {sidebar[1]}
            </div>
        );
        return (
            <div className={'grid mobile-grid'}>
                <div onClick={this.hand} onMouseLeave={this.handexit} className={this.css.join(' ')}>
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