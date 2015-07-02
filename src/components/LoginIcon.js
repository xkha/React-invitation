import React from 'react';
import reactMixin from 'react-mixin';
import Theme from '../mixins/Theme';
import { Avatar, FontIcon, SvgIcon, ListItem, Styles } from 'material-ui';
let { Colors, Typography } = Styles;
import Auth from '../store/auth';

export default class LoginIcon extends React.Component {
    constructor() {
        super();
        this._rightMenuHandler = this._rightMenuHandler.bind(this);
    }
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
    }
    render() {
        let styles = this.getStyles();
        let auth = new Auth();
        let username = auth.username();
        return (
            <div style={styles.root}>
                <Avatar
                    src='https://pp.vk.me/c623317/v623317570/15583/2xIk8Y9JsfY.jpg'
                    style={styles.avatar}
                    onTouchTap={this._rightMenuHandler}/>
                <div style={styles.text}>
                    <span style={styles.title}>{username}</span>
                </div>
            </div>
        );
    }
    _rightMenuHandler() {
        this.props.onTouchTap();
    }
}

reactMixin(LoginIcon.prototype, Theme);

// Important for theme!
LoginIcon.childContextTypes = {
    muiTheme: React.PropTypes.object
};