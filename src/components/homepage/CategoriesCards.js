import React from 'react';
let Router = require('react-router');
import { Styles, Paper } from 'material-ui';

let ThemeManager = new Styles.ThemeManager();
let { Colors, Spacing, Typography } = Styles;

export default React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    getStyles() {
        return {
            h2: {
                backgroundColor: Colors.grey300,
                fontFamily: 'Roboto',
                fontSize: '20px',
                lineHeight: '64px',
                textAlign: 'center',
                margin: '0px'
            },
            card: {
                width: '300px',
                float: 'left',
                marginRight: '4px'
            },
            img: {
                maxWidth: '300px',
                margin: '0px'
            }
        }
    },
    getInitialState: function() {
        return {
            zDepth: 0
        };
    },
    render() {
        var styles = this.getStyles();
        return (
            <Paper  zDepth={this.state.zDepth}
                    style={styles.card}
                    onMouseOver={this._onMouseOver}
                    onMouseOut={this._onMouseOut}>
                <h2 style={styles.h2}> {this.props.heading} </h2>
                <img src={this.props.img} style={styles.img}/>
            </Paper>
        );
    },
    _onMouseOver: function() {
        this.setState({
            zDepth: 4
        });
    },

    _onMouseOut: function() {
        this.setState({
            zDepth: 0
        });
    }
});