var vk = require('./../../store/vk.js');

VKInit = {};

VKInit.init = function init(app) {
    app.get('/vk', vk.auth);
};

module.exports = VKInit;
