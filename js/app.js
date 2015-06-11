var React = require('react');
var CommentBox = require('./../components/CommentBox');

//Needed for React Developer Tools
window.React = React;

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

React.render(
    <CommentBox url='/comments' pollInterval={10000} />,
    document.getElementById('content')
);