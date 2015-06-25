import React from 'react';
import { Paper, TextField, RaisedButton, FloatingActionButton, Styles } from 'material-ui';
let ThemeManager = new Styles.ThemeManager();
let request = require('superagent');

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
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
            mainContainer: {
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '630px'
            },
            paper: {
                width: '630px',
                float: 'left',
                marginBottom: '50px'
            },
            button: {
                margin: '5px'
            },
            textField: {
                margin: '0 50px 0 0'
            }
        };
    },
    _loginHandleSubmit(e) {
        e.preventDefault();
        var username = this.refs.username.getValue();
        var password = this.refs.password.getValue();
        if (!username || !password) {
            return;
        }
        $.ajax({
            url: '/login',
            dataType: 'json',
            type: 'POST',
            data: {'username': username, 'password': password },
            success: function(data) {
                this.context.router.transitionTo('root');
            }.bind(this)
        });
    },
    render() {
        var styles = this.getStyles();
        return (
            <div style={styles.mainContainer} className="loginForm clearfix">
                <Paper zDepth={2} style={styles.paper}>
                    <form onSubmit={this._loginHandleSubmit} className="standard-login">
                        <h2>Login</h2>
                        <TextField
                            ref="username"
                            hintText="Username"
                            floatingLabelText="Enter your username" />
                        <TextField
                            ref="password"
                            hintText="Password"
                            floatingLabelText="Enter your password"
                            type="password"/>
                        <RaisedButton
                            linkButton={false}
                            secondary={true}
                            label="Login"
                            style={styles.button}/>
                        <RaisedButton
                            linkButton={false}
                            primary={true}
                            label="Registration"
                            className="registration-button"
                            style={styles.button} />
                    </form>
                    <div className="SNLogin">
                        <FloatingActionButton
                            linkButton={true}
                            href="https://oauth.vk.com/authorize?client_id=4963858&scope=email,photos&redirect_uri=http://localhost:3000/vk&response_type=code&v=5.34&state=auth&https=1"
                            iconClassName="icon-vk icon"
                            secondary={true}
                            style={styles.button}
                            className="vk-button" />
                        <FloatingActionButton iconClassName="icon-google-plus icon" secondary={true} style={styles.button} className="google-button" />
                        <FloatingActionButton iconClassName="icon-facebook icon" secondary={true} style={styles.button} className="facebook-button" />
                        <FloatingActionButton iconClassName="icon-ericpol icon" secondary={true} style={styles.button} className="ericpol-button" />
                    </div>
                </Paper>
            </div>
        );
    }
});