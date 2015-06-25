/**
 * Created by apys on 25.06.2015.
 */
import React from 'react';
var Router = require('react-router');
import mui from 'material-ui';
import { RaisedButton, Paper, ClearFix, IconButton, Styles} from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();


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

    getStyles() {
        return {
            root: {
                backgroundColor: Colors.cyan500,
                overflow: 'hidden'
            },
            svgLogo: {
                marginLeft: (window.innerWidth * 0.5) - 150 + 'px',
                width: '300px'
            },
            tagline: {
                margin: '16px auto 0 auto',
                textAlign: 'center',
                maxWidth: '575px'
            },
            label: {
                color: ThemeManager.palette.primary1Color
            },
            githubStyle: {
                margin: '16px 32px 0px 8px'
            },
            demoStyle: {
                margin: '16px 32px 0px 32px'
            },
            h1: {
                color: Colors.darkWhite,
                fontWeight: Typography.fontWeightLight,
                fontSize: '56'
            },
            h2: {
                //.mui-font-style-title
                fontSize: '20px',
                lineHeight: '28px',
                paddingTop: '19px',
                marginBottom: '13px',
                letterSpacing: '0'
            },
            nowrap: {
                whiteSpace: 'nowrap'
            },
            taglineWhenLarge: {
                marginTop: '32px'
            },
            h1WhenLarge: {
                fontSize: '56px'
            },
            h2WhenLarge: {
                //.mui-font-style-headline;
                fontSize: '24px',
                lineHeight: '32px',
                paddingTop: '16px',
                marginBottom: '12px'
            },

            rootNext: {
                backgroundColor: Colors.grey200
            },
            content: {
                maxWidth: '700px',
                padding: 0,
                margin: '0 auto',
                fontWeight: Typography.fontWeightLight,
                fontSize: '20px',
                lineHeight: '28px',
                paddingTop: '19px',
                marginBottom: '13px',
                letterSpacing: '0',
                color: Typography.textDarkBlack
            },
            someSection: {
                maxWidth: '906px'
            },
            rooter: {
                backgroundColor: Colors.grey200,
                textAlign: 'center'
            },
            h3: {
                margin: '0',
                padding: '0',
                fontWeight: Typography.fontWeightLight,
                fontSize: '22'
            },
            button: {
                marginTop: 32
            }
        }

    },


    render() {
        var styles = this.getStyles();

        return (
            <div>
                <div style={styles.root}>
                    <img style={styles.svgLogo} src="/src/styles/images/invite.png" />
                    <div style={styles.tagline}>
                        <h1 style={styles.h1}>React Invitation</h1>
                        <h2 style={styles.h2}>
                            A Set of React Components
                            <span style={styles.nowrap}>
                                that Implement</span>
                            <span style={styles.nowrap}>
                                Google&apos;s Material Design</span>
                        </h2>
                        <RaisedButton
                            className="demo-button"
                            label="Demo"
                            style={styles.demoStyle}
                            labelStyle={styles.label}/>
                        <RaisedButton
                            className="github-button"
                            label="GitHub"
                            linkButton={true}
                            href="https://github.com/callemall/material-ui"
                            style={styles.githubStyle}
                            labelStyle={styles.label}/>
                    </div>
                </div>
            </div>


        );
    }
});