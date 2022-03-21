module.exports = function (cms) {
    cms["config"]["set"] = function (key, value) {
        cms["configData"][key] = value;
    }
}
