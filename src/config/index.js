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