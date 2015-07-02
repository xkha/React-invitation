import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends React.Component {
    constructor() {
        super();
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
        this.state = { data: [] };
    }
    getInitialState() {
        return { data: [] };
    }
    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }
    render() {
        return (
            <div className="commentBox">
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
    loadCommentsFromServer() {
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
    handleCommentSubmit(comment) {
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
