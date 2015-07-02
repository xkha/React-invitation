import { Styles } from 'material-ui';
let ThemeManager = new Styles.ThemeManager();

module.exports = {
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }
};

