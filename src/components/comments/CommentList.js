import React from 'react';
import Comment from './Comment';
import { List } from 'material-ui';

export default class CommentList extends React.Component {
    constructor() {
        super();
    }
    render() {
        var commentNodes = this.props.data.map(function(comment, index) {
            return (
                <Comment author={comment.author} key={index}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                <List>
                    {commentNodes}
                </List>
            </div>
        );
    }
}
