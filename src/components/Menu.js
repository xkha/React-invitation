import React from 'react';
import { MenuItem, LeftNav, RaisedButton } from 'material-ui';
import mui from 'material-ui'
var ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render() {
        let menuItems = [
            { route: 'get-started', text: 'Get Started' },
            { route: 'customization', text: 'Customization' },
            { route: 'components', text: 'Components' },
            { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
            {
                type: MenuItem.Types.LINK,
                payload: 'https://github.com/callemall/material-ui',
                text: 'GitHub'
            },
            {
                text: 'Disabled',
                disabled: true
            },
            {
                type: MenuItem.Types.LINK,
                payload: 'https://www.google.com',
                text: 'Disabled Link',
                disabled: true
            }
        ];
        return (
            <div>
                <LeftNav ref='leftNav' docked={false} menuItems={menuItems} />
                <RaisedButton label="Menu" onTouchTap={this._handleOnTouchTap} />
            </div>
        );
    },

    _handleOnTouchTap() {

    }

});
