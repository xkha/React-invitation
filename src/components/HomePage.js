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
                overflow: 'hidden',
                margin: '0 auto',
                boxSizing: 'border-box',
                padding: '72px 24px'
            },
            svgLogo: {
                marginLeft: (window.innerWidth * 0.5) - 174 + 'px'
            },
            tagline: {

                textAlign: 'center',
                maxWidth: '575px',
                marginTop: '32px',
                margin: '0 auto'
            },
            label: {
                color: ThemeManager.palette.primary1Color
            },
            githubStyle: {
                margin: '16px 32px 0px 32px'
            },
            demoStyle: {
                margin: '16px 32px 0px 32px'
            },
            h1: {
                color: Colors.darkWhite,
                fontWeight: Typography.fontWeightLight,
                fontSize: '56px',
                fontFamily: 'Roboto',
                lineHeight: '20px',
                wordSpacing: '0px',
                margin: '0px auto 0px auto'
            },
            h2: {
                //.mui-font-style-title
                letterSpacing: '0',
                //.mui-font-style-headline;
                fontSize: '24px',
                lineHeight: '32px',
                paddingTop: '16px',
                marginBottom: '12px',
                marginTop: '0px',
                color: 'rgba(255, 255, 255, 0.870588)',
                fontWeight: 300,
                fontFamily: 'Roboto'

            },
            nowrap: {
                whiteSpace: 'nowrap'
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
                            A project for invitations to any events. <span style={styles.nowrap}>
                            Developing with</span> <span style={styles.nowrap}>
                            Facebook&apos;s React, MongoDB and Google&apos;s Material Design</span>
                        </h2>
                        <div>
                            <RaisedButton label="GitHub"
                                style={styles.githubStyle}
                                labelStyle={styles.label}
                                linkButton={true}
                                href="https://github.com/xkha/React-invitation"/>

                        </div>

                    </div>
                </div>
            </div>


        );
    }
});