import React from 'react';
import Router from 'react-router';

import { AppBar, LeftNav, MenuItem, Styles, FontIcon, Avatar } from 'material-ui';
let { Colors, Spacing, Typography } = Styles;

import mui from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();

var RouteHandler = Router.RouteHandler;

let menuItems = [
    { route: 'login', text: 'Login' },
    { route: 'registration', text: 'Registration' },
    {
        type: MenuItem.Types.LINK,
        payload: 'https://github.com/xkha/React-invitation',
        text: 'GitHub'
    }
];

let rightMenuItems = [
    { route: 'profile', text: 'Profile' },
    { route: 'logout', text: 'Logout' }
];

var App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    getStyles() {
        return {
            cursor: 'pointer',
            //.mui-font-style-headline
            fontSize: '24px',
            color: Typography.textFullWhite,
            lineHeight: Spacing.desktopKeylineIncrement + 'px',
            fontWeight: Typography.fontWeightLight,
            backgroundColor: Colors.cyan500,
            paddingLeft: Spacing.desktopGutter,
            paddingTop: '0px',
            marginBottom: '8px'
        };
    },
    render() {
        let header = (
            <div style={this.getStyles()} onTouchTap={this._onHeaderClick}>
                React invitation
            </div>
        );
        return (
            <div>
                <AppBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
                        title='React invitation'
                        iconElementRight ={<LoginIcon/>}/>
                <LeftNav
                    ref="leftNav"
                    docked={false}
                    isInitiallyOpen={false}
                    header={header}
                    menuItems={menuItems}
                    selectedIndex={this._getSelectedIndex()}
                    onChange={this._onLeftNavChange} />
                        iconElementRight={<Avatar style={{cursor: 'pointer'}} onTouchTap={this._onRightButtonTouchTap}>A</Avatar>}/>
                <LeftNav ref='rightNav' docked={false}
                    menuItems={rightMenuItems}
                    header={<div style={this.getStyles()}>
                        Signed in as apys
                    </div>}
                    selectedIndex={this._getSelectedIndex()}
                    onChange={this._onRightNavChange}
                    openRight={true}/>
                <RouteHandler/>
            </div>
        )
    },
    _onLeftIconButtonTouchTap() {
        this.refs.leftNav.toggle();
    },
    _onRightButtonTouchTap() {
        this.refs.rightNav.toggle();
    },
    _getSelectedIndex() {
        let currentItem;
        for (let i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
        }
    },
    _onLeftNavChange(e, key, payload) {
        this.context.router.transitionTo(payload.route);
    },
    _onHeaderClick() {
        this.context.router.transitionTo('root');
        this.refs.leftNav.close();
    }
});

App.contextTypes = {
    router: React.PropTypes.func
};

module.exports = App;