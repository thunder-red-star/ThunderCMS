module.exports = function get(cms) {
    cms['logger']['error'] = function (message) {
        console.error(message);
        if (cms.config.get('logger.exitOnError')) {
            process.exit(1);
        }
    }
};