import React from 'react';
import Router from 'react-router';
import { AppBar, LeftNav, MenuItem, Styles, FontIcon, Avatar } from 'material-ui';
import LoginIcon from './../components/LoginIcon';

let { Colors, Spacing, Typography } = Styles;
let { RouteHandler } = Router;
let ThemeManager = new Styles.ThemeManager();

let leftMenuItems = [
    { route: 'login', text: 'Login' },
    { route: 'registration', text: 'Registration' },
    { route: 'card', text: 'Card' },
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

export default class App extends React.Component {
    constructor() {
        super();
        this._getSelectedIndex = this._getSelectedIndex.bind(this);
        this._onNavChange = this._onNavChange.bind(this);
        this._onHeaderClick = this._onHeaderClick.bind(this);
        this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
        this._onRightButtonTouchTap = this._onRightButtonTouchTap.bind(this);
    }
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }
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
    getInitialState() {
        return { user:{} };
    }
    componentDidMount() {
        $.ajax({
            url: '/sign',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({user: data.response[0]});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(err);
            }.bind(this)
        });
    }
    render() {
        let header = (
            <div style={this.getStyles()} onTouchTap={this._onHeaderClick}>
                React invitation
            </div>
        );
        //https://pp.vk.me/c623317/v623317570/15583/2xIk8Y9JsfY.jpg

        //http://cs623317.vk.me/v623317570/15583/2xIk8Y9JsfY.jpg
        return (
                <div>
                    <AppBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
                            title='React invitation'
                            iconElementRight ={<LoginIcon /> }
                            onRightButtonTouchTap={this._onRightButtonTouchTap}/>
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
                        header={<div style={this.getStyles()}>
                            Signed in as apys
                        </div>}
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
            if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
        }
    }
    _onNavChange(e, key, payload) {
        this.context.router.transitionTo(payload.route);
    }
    _onHeaderClick() {
        this.context.router.transitionTo('root');
        this.refs.leftNav.close();
    }
}

App.contextTypes = {
    router: React.PropTypes.func
};

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};
