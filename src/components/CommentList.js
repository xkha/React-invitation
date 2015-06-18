import React from 'react';
import Comment from './Comment';
import { List } from 'material-ui';

export default React.createClass({
    render() {
        var commentNodes = this.props.data.map(function(comment, index) {
            return (
                // `key` is a React-specific concept and is not mandatory for the
                // purpose of this tutorial. if you're curious, see more here:
                // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
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
});