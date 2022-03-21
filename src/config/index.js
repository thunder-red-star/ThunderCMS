const fs = require('fs');

methods = [
    "set",
    "get",
    "loadJSON",
    "loadConfigFile"
];

module.exports = function (cms) {
    for (const method of methods) {
        require(`./${method}`)(cms);
    }
}
