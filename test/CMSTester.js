const CMS = require("../src/index");

let ThunderCMS = new CMS({
  logs: {
    logLevel: "debug",
  },
});

ThunderCMS.start();
