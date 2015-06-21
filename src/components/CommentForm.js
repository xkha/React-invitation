import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

export default React.createClass({
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
    },
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <TextField type="text" ref="author" floatingLabelText="Your name" />
                <TextField type="text" ref="text" floatingLabelText="Say something..." />
                <RaisedButton label="Post" primary={true} />
                <RaisedButton linkButton={true} href="https://oauth.vk.com/authorize?client_id=4963858&scope=email,photos&redirect_uri=http://localhost:3000/vk& response_type=code&v=5.34&state=authfromvk" label="VK" primary={true} />
            </form>
        );
    }
});