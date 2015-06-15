var React = require('react');
var CommentBox = require('./../components/commentBox');

var injectTapEventPlugin = require('react-tap-event-plugin');

window.React = React;

injectTapEventPlugin();

React.render(
    <CommentBox url='/comments' pollInterval={10000} />,
    document.getElementById('content')
);