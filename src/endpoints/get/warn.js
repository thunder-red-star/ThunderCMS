module.exports = function (req, res, cms) {
  cms.logger.warn("This warning was triggered by the warn endpoint");
  return res.send(`If you see this, a warning was logged to the console.`);
};
