import React from 'react';
import { Styles } from 'material-ui';
import CategoriesCards from './CategoriesCards';
let { Colors, Spacing, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();

export default class Categories extends React.Component {
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
                <div style={styles.root}>
                    <div style={styles.categories} className="clearfix">
                        <CategoriesCards heading="Sports" img="http://material-ui.com/images/get-started.svg"/>
                        <CategoriesCards heading="Parties" img="http://material-ui.com/images/css-framework.svg"/>
                        <CategoriesCards heading="Other" img="http://material-ui.com/images/components.svg"/>
                    </div>
                </div>
        );
    }
}

// Important for theme!
Categories.childContextTypes = {
    muiTheme: React.PropTypes.object
};