import React from 'react';
import marked from 'marked';
import { ListItem } from 'material-ui';

export default class Comment extends React.Component {
    constructor() {
        super();
    }
    render() {
        var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
        return (
            <div className="comment">
                <ListItem>
                    <h2 className="commentAuthor">
                        {this.props.author}
                    </h2>
                    <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
                </ListItem>
            </div>
        );
    }
}
