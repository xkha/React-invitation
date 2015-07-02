import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

export default class CommentForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        var style = {
            form: {
                margin: '20px',
                paddingBottom: '50px'
            },
            button: {
                marginLeft: '5px',
                marginRight: '5px'
            },
            input: {
                marginRight: '10px'
            }
        };
        return (
            <form className="commentForm" onSubmit={this.handleSubmit} style={style.form}>
                <TextField type="text" ref="author" floatingLabelText="Your name" style={style.input}/>
                <TextField type="text" ref="text" floatingLabelText="Say something..." style={style.input}/>
                <RaisedButton label="Post" primary={true} style={style.button} />
            </form>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        var author = this.refs.author.getValue().trim();
        var text = this.refs.text.getValue().trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.setValue('');
        this.refs.text.setValue('');
    }
}
