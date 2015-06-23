import React from 'react';
import InjectTapEventPlugin from 'react-tap-event-plugin';

import App from './../components/App';
import LoginForm from './../components/LoginForm';
import Registration from './../components/Registration';

var Router = require('react-router');
var Route = Router.Route;

InjectTapEventPlugin();
window.React = React;

let AppRoutes = (
    <Route name="root" path="/" handler={App}>
        <Route name="login" handler={LoginForm} />
        <Route name="registration" handler={Registration} />
    </Route>
);

Router
    .create({
        routes: AppRoutes,
        scrollBehavior: Router.ScrollToTopBehavior
    })
    .run(function (Handler) {
        React.render(<Handler/>, document.body);
    });