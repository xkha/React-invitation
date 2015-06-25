import React from 'react';
import InjectTapEventPlugin from 'react-tap-event-plugin';

import LoginForm from './../src/components/LoginForm';
import Registration from './../src/components/Registration';
import CardComponent from './../src/components/CardComponent';
import HomePage from './../src/components/homepage/HomePage';
import App from './../src/components/App';

import Router from 'react-router';
let { Route, Redirect, DefaultRoute } = Router;

InjectTapEventPlugin();
window.React = React;

let AppRoutes = (
    <Route name="root" path="/" handler={App}>
        <Route name="home" path="/app" handler={HomePage}/>
        <Route name="login" path="/login" handler={LoginForm} />
        <Route name="registration" path="/registration"  handler={Registration} />
        <Route name="card" path="/card" handler={CardComponent} />
        <Route name="profile" path="/profile" handler={Registration} />
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