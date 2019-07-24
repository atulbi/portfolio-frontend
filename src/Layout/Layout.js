import React from 'react';
import './Layout.css';
import LargeSidebar from './Sidebar/LargeSidebar';

class Layout extends React.Component {

    state = {
        open: false,
    }

    css = ['left', 'mobile-width']
    right = ['right']

    hand = () => {

        this.setState({
            open: true,
        })
        if (this.css.includes('mobile-hover-exit')) {
            this.css.pop();
        }
        this.css.push('mobile-hover');
        this.right.push('mobile-right-translate')
    }

    handexit = () => {
        this.css.pop();
        this.css.push('mobile-hover-exit');
        this.right.pop();
        this.setState({
            open: false,
        });
    }

    render() {

        const sidebar = React.Children.toArray(this.props.children);
        // console.log(sidebar)

        // const show = this.state.open || window.screen.availWidth >= 6000 ? sidebar[1] : sidebar[0];
        let show = sidebar[0];
        // console.log(show);
        return (
            <div className={'grid mobile-grid'}>
                <div onMouseEnter={this.hand} onMouseLeave={this.handexit} className={this.css.join(' ')} state={this.state}>
                    <LargeSidebar data={this.props.data} state={this.state}>
                        {show.props.children}
                    </LargeSidebar>
                </div>
                <div className={this.right.join(" ")} >
                    {sidebar[1]}
                </div>
            </div>
        );
    }
}

export default Layout;