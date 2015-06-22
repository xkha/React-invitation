import React from 'react';
import { Paper, Card, CardHeader, Avatar, CardMedia, CardTitle, CardActions, RaisedButton, CardText, FontIcon, Toggle } from 'material-ui';
import mui from 'material-ui';
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


    render() {
        return (
            <div>
                <Toggle
                    name="toggleName1"
                    value="toggleValue1"
                    label="Participate"
                style={{width: '200px', padding: '20px 10px 10px 50px'}}/>
            <Paper zDepth={2} style={{float: 'left', margin: '10px'}}>
                <h2 style={{marginLeft:'10px'}}> Users </h2>
                <h3 style={{marginLeft:'10px'}}> In: </h3>
                <Card style={{width: '150px', float: 'left', margin: '5px'}}>
                    <CardHeader
                        title="apys"
                        subtitle="Comment"
                        avatar={<Avatar
                            icon={<FontIcon className="icon-user" />}/>}/>
                </Card>
                <Card style={{width: '150px', float: 'left', margin: '5px'}}>
                    <CardHeader
                        title="xkha"
                        subtitle="Comment"
                        avatar={<Avatar
                            icon={<FontIcon className="icon-user" />}/>}/>
                </Card>
                <Card style={{width: '150px', float: 'left', margin: '5px'}}>
                    <CardHeader
                        title="apys"
                        subtitle="Comment"
                        avatar={<Avatar
                            icon={<FontIcon className="icon-user" />}/>}/>
                </Card>
                <Card style={{width: '150px', float: 'left', margin: '5px'}}>
                    <CardHeader
                        title="xkha"
                        subtitle="Comment"
                        avatar={<Avatar
                            icon={<FontIcon className="icon-user" />}/>}/>
                </Card>
                <Card style={{width: '150px', float: 'left', margin: '5px'}}>
                    <CardHeader
                        title="apys"
                        subtitle="Comment"
                        avatar={<Avatar
                            icon={<FontIcon className="icon-user" />}/>}/>
                </Card>
                <Card style={{width: '150px', float: 'left', margin: '5px'}}>
                    <CardHeader
                        title="xkha"
                        subtitle="Comment"
                        avatar={<Avatar
                            icon={<FontIcon className="icon-user" />}/>}/>
                </Card>

            </Paper>
                </div>

        );
    }
});