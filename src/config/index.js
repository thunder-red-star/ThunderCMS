// Config handler, provides methods to set config values from multiple sources.

const fs = require('fs');

methods = [
    "set",
    "get",
    "loadConfigFile",
];

module.exports = function (cms) {
    for (const method of methods) {
        require(`./${method}`)(cms);
    }
}