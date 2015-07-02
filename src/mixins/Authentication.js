import Auth from '../store/auth';

module.exports = {
    statics: {
        willTransitionTo: function(transition) {
            if(!new Auth().loggedIn()) {
                transition.redirect('login');
            }
        }
    }
};
