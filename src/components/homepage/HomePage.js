import React from 'react';
import { Styles } from 'material-ui';
import HeaderComponent from './HeaderComponent';
import Categories from './Categories';
import FooterElement from './FooterElement';
let { Colors, Spacing, Typography } = Styles;

export default class HomePage extends React.Component {
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
                <FooterElement/>
            </div>
        );
    }
}

// Important for theme!
HomePage.childContextTypes = {
    muiTheme: React.PropTypes.object
};