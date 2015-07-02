import React from 'react';
import { Paper, Card, CardHeader, Avatar, CardMedia, CardTitle, CardActions, RaisedButton, CardText, FontIcon } from 'material-ui';
import CommentBox from './comments/CommentBox';

export default class CardComponent extends React.Component {

    getStyles() {
        return {
            mainContainer: {
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
                minWidth: '330px'
            },
            parentPaper: {
                margin: '20px'
            },
            headersMargin: {
                marginLeft: '10px'
            },
            childPaper: {
                float: 'left',
                margin: '10px'
            },
            card: {
                width: '150px',
                float: 'left',
                margin: '5px'
            },
            button: {
                marginLeft: '10px',
                marginRight: '5px'
            }
        }

    }

    render() {
        var style = this.getStyles();
        return (
            <div style={style.mainContainer}>
                <Paper zDepth={2} style={style.parentPaper}>
                    <h1 style={style.headersMargin}> <FontIcon className="icon-volleyball"/> Training</h1>
                    <h2 style={style.headersMargin}>
                        <FontIcon className="icon-calendar"/>
                        Today at 6 p.m. </h2>
                    <RaisedButton secondary={true} label="IN" style={style.button}/>
                    <RaisedButton primary={true} label="OUT" style={style.button}/>

                    <Paper zDepth={1} style={style.childPaper}>
                        <h2 style={style.headersMargin}> IN </h2>
                        <Card style={style.card}>
                            <CardHeader
                                title="apys"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="xkha"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="apys"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="xkha"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="apys"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="xkha"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>

                    </Paper>
                    <Paper zDepth={1} style={style.childPaper}>
                        <h2 style={style.headersMargin}> OUT </h2>
                        <Card style={style.card}>
                            <CardHeader
                                title="apys"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="xkha"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="apys"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="xkha"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="apys"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="xkha"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>

                    </Paper>
                    <Paper zDepth={1} style={style.childPaper}>
                        <h2 style={style.headersMargin}> UNDEFINED </h2>
                        <Card style={style.card}>
                            <CardHeader
                                title="apys"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="xkha"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="apys"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="xkha"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="apys"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>
                        <Card style={style.card}>
                            <CardHeader
                                title="xkha"
                                subtitle="Comment"
                                avatar={<Avatar
                                    icon={<FontIcon className="icon-user" />}/>}/>
                        </Card>

                    </Paper>
                    <h2 style={style.headersMargin}> Comments </h2>
                    <CommentBox url='/api/comments' pollInterval='10000'/>
                </Paper>
            </div>
        );
    }
}
