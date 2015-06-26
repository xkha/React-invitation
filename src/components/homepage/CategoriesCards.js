import React from 'react';
import { Styles, Paper } from 'material-ui';
let { Colors, Spacing, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();

export default class CategoriesCards extends React.Component {
    constructor() {
        super();
        this._onMouseOut = this._onMouseOut.bind(this);
        this._onMouseOver = this._onMouseOver.bind(this);
        this.state = { zDepth: 0 };
    }
    // Important for theme!
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }
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
    }
    getInitialState() {
        return { zDepth: this.state.zDepth };
    }
    render() {
        var styles = this.getStyles();
        return (
            <Paper zDepth={this.state.zDepth}
                   style={styles.card}
                   onMouseOver={this._onMouseOver}
                   onMouseOut={this._onMouseOut}>
                <h2 style={styles.h2}> {this.props.heading} </h2>
                <img src={this.props.img} style={styles.img}/>
            </Paper>
        );
    }
    _onMouseOver() {
        this.setState({ zDepth: 4 });
    }

    _onMouseOut() {
        this.setState({ zDepth: 0 });
    }
}

// Important for theme!
CategoriesCards.childContextTypes = {
    muiTheme: React.PropTypes.object
};