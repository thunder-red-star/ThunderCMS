const chalk = require("chalk");

module.exports = function (cms) {
  cms["logger"]["debug"] = function (message) {
    if (cms.config.get(["logs", "logLevel"]) == "debug") {
      console.log(chalk.blue("[DEBUG] " + message));
    }
  };
  return cms;
};
