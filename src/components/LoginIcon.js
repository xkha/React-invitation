import React from 'react';
import {Avatar, FontIcon, SvgIcon } from 'material-ui';
import mui from 'material-ui';
var Colors = mui.Styles.Colors;
var Typography = mui.Styles.Typography;
var ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({
    getStyles() {
        var style = {

            root: {
                fontWeight: Typography.fontWeightMedium,
                boxSizing: 'border-box',
                minWidth: '110px',
                marginRight: '20px',
                marginTop: '5px'

            },
            text: {
                display: 'inline-block',
                verticalAlign: 'top',
                float: 'left'
            },
            avatar: {
                marginRight:16,
                display: 'inline-block',
                float: 'left',
                cursor: 'pointer'
            },
            title: {
                color: Colors.white,
                display: 'block',
                fontSize: 15
            },
            subtitle: {
                color: Colors.lightBlack,
                display: 'block',
                fontSize: 14
            }
        };

        return style;
    },
    render() {
        var styles = this.getStyles();
        return (
            <div style={styles.root}>
                <Avatar src='https://pp.vk.me/c623317/v623317570/15583/2xIk8Y9JsfY.jpg' style={styles.avatar} />
                <div style={styles.text}>
                    <span style={styles.title}>xkha</span>
                    <a style={styles.subtitle} href="/logout">Logout</a>
                </div>
            </div>
        );
    }
});