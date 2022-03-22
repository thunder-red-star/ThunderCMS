const chalk = require("chalk"); // Chalk@4 for CJS

module.exports = function (cms) {
  cms["logger"]["error"] = function (message) {
    console.log(chalk.red("[ERROR] " + message));
    if (cms.config.get("logger.exitOnError")) {
      process.exit(1);
    }
  };
  return cms;
};
