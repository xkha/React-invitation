import React from 'react';
import CommentBox from './../components/CommentBox';
import InjectTapEventPlugin from 'react-tap-event-plugin';

InjectTapEventPlugin();

window.React = React;

React.render(<CommentBox url='/api/comments' pollInterval={10000} />, document.getElementById('content'));