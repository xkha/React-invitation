import React from 'react';
import Router from 'react-router';

import { AppBar, LeftNav, MenuItem, Styles } from 'material-ui';
import LoginIcon from './LoginIcon';
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
                <RouteHandler/>
            </div>
        )
    },
    _onLeftIconButtonTouchTap() {
        this.refs.leftNav.toggle();
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