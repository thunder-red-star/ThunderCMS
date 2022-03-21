module.exports = function (cms) {
    cms['config']['get'] = function (key) {
        return cms['configData'][key];
    }
};
