/**
 * Created by apys on 19.06.2015.
 */
import React from 'react';
import { Paper, TextField, RaisedButton, FontIcon, FloatingActionButton } from 'material-ui'
import $ from 'jquery';


import mui from 'material-ui'
var ThemeManager = new mui.Styles.ThemeManager();

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
        var style = {

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

        return style;
    },

    render() {
        var styles = this.getStyles();
        return (
            <div style={styles.mainContainer}>
                <div className="login-form">
                    <Paper zDepth={2} style={styles.paper}>
                        <div className = "standard-login">
                            <h2>Login</h2>
                            <TextField
                                hintText="Login"
                                floatingLabelText="Enter your login" />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Enter your password"
                                type="password"/>
                            <RaisedButton linkButton={false} secondary={true} label="Login" style={styles.button} />
                            <RaisedButton linkButton={false} primary={true} label="Registration" className="registration-button" style={styles.button} />
                        </div>
                        <div className="SNLogin">
                            <h2>Or login using</h2>
                            <FloatingActionButton iconClassName="icon-VK icon" secondary={true} style={styles.button} className="VK-button" />
                            <FloatingActionButton iconClassName="icon-google-plus icon" secondary={true} style={styles.button} className="google-button" />
                            <FloatingActionButton iconClassName="icon-facebook icon" secondary={true} style={styles.button} className="facebook-button" />
                            <FloatingActionButton iconClassName="icon-ericpol icon" secondary={true} style={styles.button} className="ericpol-button" />

                        </div>
                    </Paper>
                </div>
                <Paper zDepth={2} style={styles.paper}>
                    <div className="registration-form" >
                        <h2>Registration</h2>
                        <TextField
                            hintText="Login"
                            floatingLabelText="Enter your login" style={styles.textField}/>
                        <TextField
                            hintText="E-mail"
                            floatingLabelText="Enter your e-mail address" />
                        <TextField
                            hintText="Name"
                            floatingLabelText="Enter your name" style={styles.textField}/>
                        <TextField
                            hintText="Surname"
                            floatingLabelText="Enter your surname" />
                        <TextField
                            hintText="Password"
                            floatingLabelText="Enter your password" style={styles.textField}
                            type="password"/>
                        <TextField
                            hintText="Reenter your password"
                            floatingLabelText="Reenter your password"
                            type="password"/>
                        <RaisedButton linkButton={false} primary={true} label="Registration" className="registration-button" style={styles.button} />
                    </div>

                </Paper>
            </div>


        );
    }
});