import React from 'react';
import Router from 'react-router';
import { AppBar, LeftNav, MenuItem, Styles, FontIcon, Avatar } from 'material-ui';
import LoginIcon from './LoginIcon';
let { Colors, Spacing, Typography } = Styles;
let { RouteHandler } = Router;
import Auth from '../store/auth';
import Authentication from '../mixins/Authentication'

import reactMixin from 'react-mixin';
import Theme from '../mixins/Theme';

let leftMenuItems = [
    { route: 'login', text: 'Login' },
    { route: 'registration', text: 'Registration' },
    { route: 'card', text: 'Card' },
    { route: 'home', text: 'Home' },
    {
        type: MenuItem.Types.LINK,
        payload: 'https://github.com/xkha/React-invitation',
        text: 'GitHub'
    }
];

let rightMenuItems = [
    { route: 'profile', text: 'Profile' },
    { route: 'logout', text: 'Logout' },
];

let auth = new Auth();

export default class App extends React.Component {
    constructor() {
        super();
        this._getSelectedIndex = this._getSelectedIndex.bind(this);
        this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
        this._onRightButtonTouchTap = this._onRightButtonTouchTap.bind(this);
        this._onNavChange = this._onNavChange.bind(this);
        this._onHeaderClick = this._onHeaderClick.bind(this);
    }

    willTransitionTo(transition) {
        console.log('Transition - ' + transition);
    }

    getStyles() {
        return {
            cursor: 'pointer',
            fontSize: '24px',
            color: Typography.textFullWhite,
            lineHeight: Spacing.desktopKeylineIncrement + 'px',
            fontWeight: Typography.fontWeightLight,
            backgroundColor: Colors.cyan500,
            paddingLeft: Spacing.desktopGutter,
            paddingTop: '0px',
            marginBottom: '8px'
        };
    }
    render() {
        let header = (
            <div style={this.getStyles()} onTouchTap={this._onHeaderClick}>
                React invitation
            </div>
        );
        let loggedIn = auth.loggedIn();
        return (
                <div>
                    <AppBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
                            iconElementRight={loggedIn ? (<LoginIcon onTouchTap={this._onRightButtonTouchTap}/>) : null }/>
                    <LeftNav
                        ref="leftNav"
                        docked={false}
                        isInitiallyOpen={false}
                        header={header}
                        menuItems={leftMenuItems}
                        selectedIndex={this._getSelectedIndex()}
                        onChange={this._onNavChange} />
                    <LeftNav ref="rightNav" docked={false}
                        menuItems={rightMenuItems}
                        selectedIndex={this._getSelectedIndex()}
                        onChange={this._onNavChange}
                        openRight={true}/>
                    <RouteHandler/>
                </div>
            );
    }
    _onLeftIconButtonTouchTap() {
        this.refs.leftNav.toggle();
    }
    _onRightButtonTouchTap() {
        this.refs.rightNav.toggle();
    }
    _getSelectedIndex() {
        let currentItem;
        let menuItems = leftMenuItems.concat(rightMenuItems);
        for (let i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.context.router.isActive(currentItem.route))
                return i;
        }
    }
    _onNavChange(e, key, payload) {
        switch(payload.route) {
            case "login":
                if(auth.loggedIn())
                    this.context.router.transitionTo('root');
                else
                    this.context.router.transitionTo(payload.route);
                break;
            case "logout":
                auth.logout(() => {
                    this.forceUpdate();
                    this.context.router.transitionTo('root');
                });
                break;
            case "card":
                if(!auth.loggedIn())
                    this.context.router.transitionTo('login');
                else
                    this.context.router.transitionTo(payload.route);
                break;
            default:
                this.context.router.transitionTo(payload.route);
                break;
        }
    }
    _onHeaderClick() {
        this.context.router.transitionTo('root');
        this.refs.leftNav.close();
    }
}

reactMixin(App.prototype, Theme);

// Important for theme!
App.childContextTypes = {
    muiTheme: React.PropTypes.object
};
// Important for route!
App.contextTypes = {
    router: React.PropTypes.func
};
