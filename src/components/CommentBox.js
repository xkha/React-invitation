import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { AppBar, LeftNav, MenuItem, IconButton } from 'material-ui'
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

    _loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    _handleCommentSubmit(comment) {
        var comments = this.state.data;
        comments.push(comment);
        this.setState({data: comments}, function() {
            // `setState` accepts a callback. To avoid (improbable) race condition,
            // `we'll send the ajax request right after we optimistically set the new
            // `state.
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                type: 'POST',
                data: comment,
                success: function(data) {
                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        });
    },
    getInitialState() {
        return {data: []};
    },
    componentDidMount() {
        this._loadCommentsFromServer();
        setInterval(this._loadCommentsFromServer, this.props.pollInterval);
    },
    render() {
        let menuItems = [
            { route: 'volleyball', text: 'Volleyball' },
            { route: 'football', text: 'Football' },
            {
                type: MenuItem.Types.LINK,
                payload: 'https://github.com/xkha/React-invitation',
                text: 'GitHub'
            }
        ];
        return (
            <div className="commentBox">
                <AppBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
                        title='Invitation'
                        iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <LeftNav ref='leftNav' docked={false} menuItems={menuItems} />
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this._handleCommentSubmit} />
            </div>
        );
    },
    _onLeftIconButtonTouchTap(e) {
        this.refs.leftNav.toggle();
    }
});