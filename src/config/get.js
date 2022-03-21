module.exports = function get(cms) {
    cms['config']['get'] = function (key) {
        return cms['configData'][key];
    }
};