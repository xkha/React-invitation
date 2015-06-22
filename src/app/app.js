import React from 'react';
import CommentBox from './../components/CommentBox';
import InjectTapEventPlugin from 'react-tap-event-plugin';
import LoginForm from './../components/LoginForm.js';
import Registration from './../components/Registration.js';
import Lists from './../components/Lists.js';

var Router = require('react-router');
var Route = Router.Route;

InjectTapEventPlugin();

window.React = React;

/*React.render(<CommentBox url='/api/comments' pollInterval={10000} />, document.getElementById('content'));
React.render(<LoginForm />, document.getElementById('login'));
React.render(<Registration />, document.getElementById('reg'));
React.render(<Lists />, document.getElementById('list'));*/

var routes = (
    <Route handler={App}>
        <Route path="about" handler={LoginForm}/>
        <Route path="inbox" handler={Registration}/>
    </Route>
);

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render () {
        return (
            <div>
                <h1>App</h1>
                <RouteHandler/>
            </div>
        )
    }
});

Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.body);
});


