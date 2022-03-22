module.exports = function (req, res, cms) {
  cms.logger.error("This error was triggered by the error endpoint");
  return res.send(
    `If you see this, an error was logged to the console. This could mean that you disabled the server stop on error config option.`
  );
};
