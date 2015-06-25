import React from 'react';
import InjectTapEventPlugin from 'react-tap-event-plugin';

import App from './../src/components/App';
import LoginForm from './../src/components/LoginForm';
import Registration from './../src/components/Registration';
import CardComponent from './../src/components/CardComponent';

import Router from 'react-router';
let { Route, Redirect } = Router;

InjectTapEventPlugin();
window.React = React;

let AppRoutes = (
    <Route name="root" path="/" handler={App}>
        <Route name="login" handler={LoginForm} />
        <Route name="registration" handler={Registration} />
        <Route name="card" handler={CardComponent} />
        <Route name="profile" handler={Registration} />
        <Route name="logout" handler={Registration} />
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