export default class Auth {

    login(username, password, loginCallback) {
        $.ajax({
            url: '/login',
            dataType: 'json',
            type: 'POST',
            data: {'username': username, 'password': password },
            success: function(data) {
                sessionStorage.username = data.username;
                loginCallback();
            }
        });
    }

    username() {
        return sessionStorage.username || '';
    }

    logout(logoutCallback) {
        delete sessionStorage.username;
        logoutCallback();
    }

    loggedIn() {
        return !!sessionStorage.username;
    }
}

