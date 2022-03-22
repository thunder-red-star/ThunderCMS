const defaultConfig = require("../data/defaultConfig.json");

module.exports = function (cms) {
  cms["config"]["loadJSON"] = function (JSONData) {
    cms["configData"] = defaultConfig;
    // Assign the JSON data to the configData object
    Object.assign(cms["configData"], JSONData);
  };
  return cms;
};
