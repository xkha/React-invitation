import React from 'react';
let Router = require('react-router');
import { Styles } from 'material-ui';
import HeaderComponent from './HeaderComponent';

let ThemeManager = new Styles.ThemeManager();
let { Colors, Spacing, Typography } = Styles;

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
        var styles = this.getStyles();
        return (
            <HeaderComponent/>
        );
    }
});