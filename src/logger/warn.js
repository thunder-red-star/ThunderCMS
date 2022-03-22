const chalk = require("chalk"); // Chalk@4 for CJS

module.exports = function (cms) {
  cms["logger"]["warn"] = function (message) {
    if (
      cms.config.get(["logs", "logLevel"]) == "debug" ||
      cms.config.get(["logs", "logLevel"]) == "info" ||
      cms.config.get(["logs", "logLevel"]) == "warn"
    ) {
      console.log(chalk.yellow("[WARN] " + message));
    }
  };
  return cms;
};
