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
                minWidth: '100px',
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
                float: 'left'
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
                <Avatar style={styles.avatar} icon={<FontIcon className="icon-user"/>}/>
                <div style={styles.textStyle}>
                    <span style={styles.title}>xkha</span>
                    <a style={styles.subtitle} href="/signout">Logout</a>
                </div>
            </div>
        );
    }
});