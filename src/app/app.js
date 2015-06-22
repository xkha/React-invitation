import React from 'react';
import InjectTapEventPlugin from 'react-tap-event-plugin';

import LoginForm from './../components/LoginForm.js';
import Registration from './../components/Registration.js';
import Lists from './../components/Lists.js';
import CommentBox from './../components/CommentBox';
import CardComponent from './../components/CardComponent';

import { AppBar, LeftNav, MenuItem } from 'material-ui';
import mui from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

InjectTapEventPlugin();
window.React = React;

var App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render() {
        let menuItems = [
            { route: 'login', text: 'Login' },
            { route: 'registration', text: 'Registration' },
            {
                type: MenuItem.Types.LINK,
                payload: 'https://github.com/xkha/React-invitation',
                text: 'GitHub'
            }
        ];
        return (
            <div>
                <AppBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
                        title='React invitation'
                        iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <LeftNav ref='leftNav' docked={false} menuItems={menuItems} />
                <RouteHandler/>
            </div>
        )
    },
    _onLeftIconButtonTouchTap() {
        this.refs.leftNav.toggle();
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