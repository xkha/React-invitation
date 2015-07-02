import React from 'react';
import { Paper, TextField, RaisedButton, FontIcon, FloatingActionButton } from 'material-ui'
import reactMixin from 'react-mixin';
import Theme from '../mixins/Theme';

export default class Registration extends React.Component {
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
            <div style={styles.mainContainer} className="registration-form clearfix">
                <Paper zDepth={2} style={styles.paper}>
                    <div className="registration-form">
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
}

reactMixin(Registration.prototype, Theme);

// Important for theme!
Registration.childContextTypes = {
    muiTheme: React.PropTypes.object
};
// Important for route!
Registration.contextTypes = {
    router: React.PropTypes.func
};