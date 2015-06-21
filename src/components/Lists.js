import React from 'react';
import { Paper, List, ListItem, Avatar, FontIcon } from 'material-ui'
import mui from 'material-ui';
var Colors = mui.Styles.Colors;
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
            }
        };

        return style;
    },

    render() {
        var styles = this.getStyles();
        return (
            <div style={styles.mainContainer}>
                <Paper zDepth={2} style={styles.paper}>
                    <List subheader="Users">
                        <ListItem
                            leftAvatar={<Avatar
                                icon={<FontIcon className="icon-VK" />}
                                color={Colors.blue300}
                                backgroundColor={Colors.indigo900} />}
                            rightIcon={<FontIcon className="icon-VK" />}>
                            Brendan Lim
                        </ListItem>
                        <ListItem
                            leftAvatar={<Avatar
                                icon={<FontIcon className="icon-VK" />}
                                color={Colors.blue300}
                                backgroundColor={Colors.indigo900} />}
                            rightIcon={<FontIcon className="icon-VK" />}>
                            Eric Hoffman
                        </ListItem>
                        <ListItem
                            leftAvatar={<Avatar
                                icon={<FontIcon className="icon-VK" />}
                                color={Colors.blue300}
                                backgroundColor={Colors.indigo900} />}
                            rightIcon={<FontIcon className="icon-VK" />}>
                            Grace Ng
                        </ListItem>
                        <ListItem
                            leftAvatar={<Avatar
                                icon={<FontIcon className="icon-VK" />}
                                color={Colors.blue300}
                                backgroundColor={Colors.indigo900} />}
                            rightIcon={<FontIcon className="icon-VK" />}>
                            Kerem Suer
                        </ListItem>
                        <ListItem
                            leftAvatar={<Avatar
                                icon={<FontIcon className="icon-VK" />}
                                color={Colors.blue300}
                                backgroundColor={Colors.indigo900} />}
                            rightIcon={<FontIcon className="icon-VK" />}>
                            Raquel Parrado
                        </ListItem>
                    </List>
                </Paper>
            </div>
        );
    }
});