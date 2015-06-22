import React from 'react';
import InjectTapEventPlugin from 'react-tap-event-plugin';

import LoginForm from './../components/LoginForm';
import Registration from './../components/Registration';
import Lists from './../components/Lists';
import CommentBox from './../components/CommentBox';
import CardComponent from './../components/CardComponent';

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
        <Route path="card" handler={CardComponent}/>
    </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.body);
});


