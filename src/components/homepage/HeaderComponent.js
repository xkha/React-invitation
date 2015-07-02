import React from 'react';
import { RaisedButton, Styles} from 'material-ui';
let { Colors, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();

export default class HeaderComponent extends React.Component {
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
            }
        };
    }
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
}
// Important for theme!
HeaderComponent.childContextTypes = {
    muiTheme: React.PropTypes.object
};
