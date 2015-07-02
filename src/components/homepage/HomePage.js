import React from 'react';
import { Styles } from 'material-ui';
import HeaderComponent from './HeaderComponent';
import Categories from './Categories';
import FooterElement from './FooterElement';
let { Colors, Spacing, Typography } = Styles;

export default class HomePage extends React.Component {
    render() {
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
