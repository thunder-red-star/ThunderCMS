const chalk = require("chalk");

module.exports = function (cms) {
  cms["logger"]["info"] = function (message) {
    if (
      cms.config.get(["logs", "logLevel"]) == "debug" ||
      cms.config.get(["logs", "logLevel"]) == "info"
    ) {
      console.log("[INFO] " + message);
    }
  };
  return cms;
};
