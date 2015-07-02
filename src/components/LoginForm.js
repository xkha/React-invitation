import React from 'react';
import { Paper, TextField, RaisedButton, FloatingActionButton } from 'material-ui';
import Auth from '../store/auth';
import reactMixin from 'react-mixin';
import Theme from '../mixins/Theme';

export default class LoginForm extends React.Component {
    constructor() {
        super();
        this.loginHandleSubmit = this.loginHandleSubmit.bind(this);
    }
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
    }
    render() {
        var styles = this.getStyles();
        return (
            <div style={styles.mainContainer} className="loginForm clearfix">
                <Paper zDepth={2} style={styles.paper}>
                    <form onSubmit={this.loginHandleSubmit} className="standard-login">
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
    loginHandleSubmit(e) {
        e.preventDefault();
        let username = this.refs.username.getValue();
        let password = this.refs.password.getValue();
        if (!username || !password) {
            return;
        }
        let auth = new Auth();
        auth.login(username, password, () => {
            this.context.router.goBack();
        });
    }
}

reactMixin(LoginForm.prototype, Theme);

// Important for theme!
LoginForm.childContextTypes = {
    muiTheme: React.PropTypes.object
};
// Important for route!
LoginForm.contextTypes = {
    router: React.PropTypes.func
};
