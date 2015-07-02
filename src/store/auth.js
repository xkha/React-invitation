export default class Auth {

    login(username, password, loginCallback) {
        $.ajax({
            url: '/login',
            dataType: 'json',
            type: 'POST',
            data: {'username': username, 'password': password },
            success: function(data) {
                localStorage.username = data.username;
                loginCallback();
            }
        });
    }

    username() {
        return localStorage.username || '';
    }

    logout(logoutCallback) {
        delete localStorage.username;
        if (logoutCallback) {
            logoutCallback();
        }
    }

    loggedIn() {
        return !!localStorage.username;
    }
};

