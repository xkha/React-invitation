import React from 'react';
import { Styles } from 'material-ui';
import HeaderComponent from './HeaderComponent';
import Categories from './Categories';

let ThemeManager = new Styles.ThemeManager();
let { Colors, Spacing, Typography } = Styles;

export default class HomePage extends React.Component {
    // Important for theme!
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }
    getStyles() {
        return {
            root: {
                padding: '74px 24px'
            },
            categories: {
                maxWidth: '912px',
                margin: '0px auto 0px auto'
            }
        }
    }
    render() {
        var styles = this.getStyles();
        return (
            <div>
                <HeaderComponent/>
                <Categories/>
            </div>
        );
    }
}

// Important for theme!
HomePage.childContextTypes = {
    muiTheme: React.PropTypes.object
};