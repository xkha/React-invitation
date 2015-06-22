import React from 'react';
import InjectTapEventPlugin from 'react-tap-event-plugin';

import LoginForm from './../components/LoginForm.js';
import Registration from './../components/Registration.js';
import Lists from './../components/Lists.js';
import CommentBox from './../components/CommentBox';

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

InjectTapEventPlugin();
window.React = React;

var App = React.createClass({
    render() {
        return (
            <div>
                <RouteHandler/>
            </div>
        )
    }
});

var Comment = React.createClass({
    render() {
        return (
            <CommentBox url='/api/comments' pollInterval={10000} />
        )
    }
});

var routes = (
    <Route path="/" handler={App}>
        <Route path="login" handler={LoginForm}/>
        <Route path="registration" handler={Registration}/>
        <Route path="comment" handler={Comment}/>
        <Route path="list" handler={Lists}/>
    </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.body);
});


