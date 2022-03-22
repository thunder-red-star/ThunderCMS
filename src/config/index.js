const fs = require('fs');

methods = [
    "set",
    "get",
    "loadJSON",
    "loadConfigFile"
];

module.exports = function (cms) {
    cms.config = {};
    for (const method of methods) {
        cms = require(`./${method}`)(cms);
    }
    return cms;
}
