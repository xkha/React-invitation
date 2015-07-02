import React from 'react';
import { Paper, List, ListItem, Avatar, FontIcon, Styles } from 'material-ui';
let { Colors } = Styles;

export default class Lists extends React.Component {

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
            }
        };
    }

    render() {
        var styles = this.getStyles();
        return (
            <div style={styles.mainContainer}>
                <Paper zDepth={2} style={styles.paper}>
                    <List subheader="Users">
                        <ListItem
                            leftAvatar={<Avatar
                                icon={<FontIcon className="icon-user" />}
                                color={Colors.blue300}
                                backgroundColor={Colors.indigo900} />}
                            rightIcon={<FontIcon className="icon-bubble" />}>
                            Brendan Lim
                        </ListItem>
                        <ListItem
                            leftAvatar={<Avatar
                                icon={<FontIcon className="icon-user" />}
                                color={Colors.blue300}
                                backgroundColor={Colors.indigo900} />}
                            rightIcon={<FontIcon className="icon-bubble" />}>
                            Eric Hoffman
                        </ListItem>
                        <ListItem
                            leftAvatar={<Avatar
                                icon={<FontIcon className="icon-user" />}
                                color={Colors.blue300}
                                backgroundColor={Colors.indigo900} />}
                            rightIcon={<FontIcon className="icon-bubble" />}>
                            Grace Ng
                        </ListItem>
                        <ListItem
                            leftAvatar={<Avatar
                                icon={<FontIcon className="icon-user" />}
                                color={Colors.blue300}
                                backgroundColor={Colors.indigo900} />}
                            rightIcon={<FontIcon className="icon-bubble" />}>
                            Kerem Suer
                        </ListItem>
                        <ListItem
                            leftAvatar={<Avatar
                                icon={<FontIcon className="icon-user" />}
                                color={Colors.blue300}
                                backgroundColor={Colors.indigo900} />}
                            rightIcon={<FontIcon className="icon-bubble" />}>
                            Raquel Parrado
                        </ListItem>
                    </List>
                </Paper>
            </div>
        );
    }
}

Lists.childContextTypes = {
    muiTheme: React.PropTypes.object
};

