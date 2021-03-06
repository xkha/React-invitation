import React from 'react';
import { Styles, Paper } from 'material-ui';
let { Colors, Spacing, Typography } = Styles;

export default class CategoriesCards extends React.Component {
    constructor() {
        super();
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.state = { zDepth: 0 };
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
                margin: '0px',
                marginBottom: '-4px'
            }
        };
    }
    getInitialState() {
        return { zDepth: this.state.zDepth };
    }
    render() {
        var styles = this.getStyles();
        return (
            <Paper zDepth={this.state.zDepth}
                   style={styles.card}
                   onMouseOver={this.onMouseOver}
                   onMouseOut={this.onMouseOut}>
                <h2 style={styles.h2}> {this.props.heading} </h2>
                <img src={this.props.img} style={styles.img}/>
            </Paper>
        );
    }
    onMouseOver() {
        this.setState({ zDepth: 4 });
    }

    onMouseOut() {
        this.setState({ zDepth: 0 });
    }
}

// Important for theme!
CategoriesCards.childContextTypes = {
    muiTheme: React.PropTypes.object
};

