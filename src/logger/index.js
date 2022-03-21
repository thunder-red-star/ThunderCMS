const fs = require('fs');

methods = [
    "error",
    "warn",
    "info",
    "debug",
];

module.exports = function (cms) {
    for (const method of methods) {
        require(`./${method}`)(cms);
    }
}