var $ = require('./../../bower_components/jquery/dist/jquery');

var VKStore = {};

VKStore.auth = function (req, res) {
    var url = 'https://oauth.vk.com/access_token?client_id=4963858&client_secret=7itok47K1hkGf7h7FXyW&redirect_uri=http://localhost:3000/vk&code=' + req.query['code'];

    $.ajax({
        url: url,
        dataType: 'json',
        cache: false,
        success: function(data) {
            console.log(data);
            res.redirect('back');
        },
        error: function(xhr, status, err) {
            console.error(url, status, err.toString());
        }
    });
};

module.exports = VKStore;