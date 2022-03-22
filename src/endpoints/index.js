const fs = require("fs");
const path = require("path");

module.exports = function (cms) {
  // Get all GET endpoints by reading the files in the get directory and trimming the file extension
  const getEndpoints = fs
    .readdirSync(path.join(__dirname, "get"))
    .map((file) => file.replace(".js", ""));

  // Get all POST endpoints by reading the files in the post directory and trimming the file extension
  const postEndpoints = fs
    .readdirSync(path.join(__dirname, "post"))
    .map((file) => file.replace(".js", ""));

  for (const endpoint of getEndpoints) {
    cms.app.get(`/${endpoint.replace("index", "")}`, async (req, res) => {
      cms.logger.info(`GET ${endpoint}`);
      // Log IP in Debug as proof of concept
      cms.logger.debug(`IP: ${req.ip}`);
      require("./get/" + endpoint)(req, res, cms);
    });
    cms.logger.info(`Added GET endpoint: ${endpoint}`);
  }

  for (const endpoint of postEndpoints) {
    cms.app.post(`/${endpoint.replace("index", "")}`, async (req, res) => {
      cms.logger.info(`POST ${endpoint}`);
      // Log IP in Debug as proof of concept
      cms.logger.debug(`IP: ${req.ip}`);
      require("./post/" + endpoint)(req, res, cms);
    });
    cms.logger.info(`Added POST endpoint: ${endpoint}`);
  }
  return cms;
};
