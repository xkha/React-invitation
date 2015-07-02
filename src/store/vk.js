var VKStore = {};

VKStore.auth = function (req, res) {
    var getAccessTokenUrl = 'https://oauth.vk.com/access_token?client_id=4963858&client_secret=7itok47K1hkGf7h7FXyW&redirect_uri=http://localhost:3000/vk&code=' + req.query.code + '&https=1';
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", getAccessTokenUrl, false);
    xhr.send(null);
    var data = JSON.parse(xhr.responseText);

    var userId = data.user_id;
    var accessToken = data.access_token;

    xhr = new XMLHttpRequest();
    var getUserInfoUrl = 'https://api.vk.com/method/users.get?user_id=' + userId + '&v=5.34&access_token=' + accessToken + '&fields=photo_50&https=1';
    xhr.open("GET", getUserInfoUrl, false);
    xhr.send(null);

    req.session.user = JSON.parse(xhr.responseText);

    res.redirect('back');
};

module.exports = VKStore;
