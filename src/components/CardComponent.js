import React from 'react';
import { Paper, Card, CardHeader, Avatar, CardMedia, CardTitle, CardActions, RaisedButton, CardText, FontIcon} from 'material-ui';
import CommentBox from './../components/CommentBox';
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
            <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Paper zDepth={2} style={{margin: '20px'}}>
                    <h1 style={{marginLeft: '10px'}}> <FontIcon className="icon-volleyball"/> Training</h1>
                    <h2 style={{marginLeft: '10px'}}>
                        <FontIcon className="icon-calendar"/>
                        Today at 6 p.m. </h2>
                    <RaisedButton secondary={true} label="IN"/>
                    <RaisedButton primary={true} label="OUT"/>

                    <Paper zDepth={1} style={{float: 'left', margin: '10px'}}>
                        <h2 style={{marginLeft: '10px'}}> IN </h2>
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
                    <Paper zDepth={1} style={{float: 'left', margin: '10px'}}>
                        <h2 style={{marginLeft: '10px'}}> OUT </h2>
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
                    <Paper zDepth={1} style={{float: 'left', margin: '10px'}}>
                        <h2 style={{marginLeft: '10px'}}> UNDEFINED </h2>
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
                    <h2 style={{marginLeft: '10px'}}> Comments </h2>
                    <CommentBox url='/api/comments' pollInterval='10000' style={{margin: '10px'}}/>
                </Paper>
            </div>

        );
    }
});