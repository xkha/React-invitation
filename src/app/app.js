import React from 'react';
import CommentBox from './../components/CommentBox';
import InjectTapEventPlugin from 'react-tap-event-plugin';
import LoginForm from './../components/LoginForm.js';
import Registration from './../components/Registration.js';

InjectTapEventPlugin();

window.React = React;

React.render(<CommentBox url='/api/comments' pollInterval={10000} />, document.getElementById('content'));
React.render(<LoginForm />, document.getElementById('login'));
React.render(<Registration />, document.getElementById('reg'));
