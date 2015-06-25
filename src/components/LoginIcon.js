import React from 'react';
import { Avatar, FontIcon, SvgIcon, Styles } from 'material-ui';
let { Colors, Typography } = Styles;

export default React.createClass({
    getStyles() {
        return {
            root: {
                fontWeight: Typography.fontWeightMedium,
                boxSizing: 'border-box',
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
            }
        };
    },
    render() {
        var styles = this.getStyles();
        return (
            <div style={styles.root}>
                <Avatar
                    src='https://pp.vk.me/c623317/v623317570/15583/2xIk8Y9JsfY.jpg'
                    style={styles.avatar}
                    onTouchTap={this._rightMenuHandler}/>
                <div style={styles.text}>
                    <span style={styles.title}></span>
                </div>
            </div>
        );
    },
    _rightMenuHandler() {
        this.props.onTouchTap();
    }
});