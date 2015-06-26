import React from 'react';
import { Styles, FontIcon } from 'material-ui';

let ThemeManager = new Styles.ThemeManager();
let { Colors, Spacing, Typography } = Styles;

export default class FooterElement extends React.Component {
    // Important for theme!
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }
    getStyles() {
        return {
            root: {
                padding: '74px 24px',
                boxSizing: 'border-box',
                textAlign: 'center',
                backgroundColor: 'rgb(33, 33, 33)'
            },
            text: {
                maxWidth: '335px',
                margin: '0px auto',
                padding: '0px',
                color: 'rgba(255,255,255,0.54)',
                display: 'block',
                textAlign: 'center',
                fontSize: '13px',
                lineHeight: '20px',
                fontFamily: 'Roboto'
            },
            a: {
                color: 'rgb(255,255,255)'
            },
            github: {
                position: 'relative',
                fontSize: '24px',
                display: 'inline-block',
                transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
                color: 'rgba(255,255,255,0.87)',
                fill: 'rgba(0,0,0,0.87)'
            }
        }
    }
    render() {
        var styles = this.getStyles();
        return (
            <div style={styles.root}>
                <p style={styles.text}> Authored by <a style={styles.a} href="https://github.com/xkha">xkha</a> and <a
                    style={styles.a} href="https://github.com/Latrisha">apys</a>
                </p>
                <a href="https://github.com/xkha/React-invitation">
                    <FontIcon className="muidocs-icon-custom-github" style={styles.github}/>
                </a>
            </div>
        );
    }
}

// Important for theme!
FooterElement.childContextTypes = {
    muiTheme: React.PropTypes.object
};