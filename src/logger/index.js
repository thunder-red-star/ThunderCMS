const fs = require('fs');

methods = [
    "error",
    "warn",
    "info",
    "debug",
];

module.exports = function (cms) {
    cms.logger = {};
    for (const method of methods) {
        cms = require(`./${method}`)(cms);
    }
    return cms;
}
