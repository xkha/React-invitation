import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends React.Component {
    constructor() {
        super();
        this._handleCommentSubmit = this._handleCommentSubmit.bind(this);
        this._loadCommentsFromServer = this._loadCommentsFromServer.bind(this);
        this.state = { data: [] };
    }
    getInitialState() {
        return { data: [] };
    }
    componentDidMount() {
        this._loadCommentsFromServer();
        setInterval(this._loadCommentsFromServer, this.props.pollInterval);
    }
    render() {
        return (
            <div className="commentBox">
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this._handleCommentSubmit} />
            </div>
        );
    }
    _loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState( {data: data} );
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    _handleCommentSubmit(comment) {
        var comments = this.state.data;
        comments.push(comment);
        this.setState({data: comments}, function() {
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
    }
}