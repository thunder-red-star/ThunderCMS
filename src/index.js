/**
 * ThunderCMS
 */

// External dependencies

// These are all tentative, and will be changed as we go along. To activate a dependency, put a slash directly after the first asterisk in the line.
/*
 */ const express = require("express");
/*
 */ const chalk = require("chalk");
/*
 * const bodyParser = require('body-parser');                  /*
 * const cookieParser = require('cookie-parser');              /*
 * const session = require('express-session');                 /*
 * const passport = require('passport');                       /*
 * const LocalStrategy = require('passport-local').Strategy;   /*
 * const cluster = require('cluster');                         /*
 * const fs = require('fs');                                   /*
 * const path = require('path');                               /*
 * const crypto = require('crypto');                           /*
 * const bcrypt = require('bcrypt');                           /*
 * const sqlite3 = require('sqlite3');                         /*
 * const { exec } = require('child_process');                  /*
 * // Currently infected with malware, will re-add once I can pin it to 9.1.2
 * // const IPC = require('node-ipc');                         /*
 */

// Do not place logger or config modules here, they're loaded before everything else.
modules = ["endpoints"];

// Classes
module.exports = class {
  constructor(config = {}) {
    // Load configuration from provided config in the constructor, if keys exist replace the default values, else leave them as they are.
    // bind all internal methods to this
    this.loadModule.bind(this);

    // Must run these seperately, otherwise errors will pop up about config not being defined.
    // These are critical modules, and if they fail to load, the server will not start.
    try {
      this.loadModule("logger");
      if (
        (config.logs && config.logs.logLevel == "debug") ||
        config.logs.logLevel == "info"
      )
        console.log("[INFO] " + "Loaded module logger");
      if (config.logs && config.logs.logLevel == "debug")
        if (Object.keys(this.logger).length == 0) {
          console.log(
            chalk.blue(
              "[DEBUG] " +
                "Module logged has no methods, but it's loaded. This is a bug."
            )
          );
        } else {
          console.log(
            chalk.blue(
              "[DEBUG] " +
                "Module logger has " +
                Object.keys(this.logger).length +
                " methods: " +
                Object.keys(this.logger).join(", ")
            )
          );
        }
    } catch (err) {
      console.log(chalk.red("[ERROR] Failed to load logger module: " + err));
      process.exit(1);
    }

    try {
      this.loadModule("config");
      if (
        (config.logs && config.logs.logLevel == "debug") ||
        config.logs.logLevel == "info"
      )
        console.log("[INFO] " + "Loaded module config");
      if (config.logs && config.logs.logLevel == "debug")
        if (Object.keys(this.config).length == 0) {
          console.log(
            chalk.blue(
              "[DEBUG] " +
                "Module config has no methods, but it's loaded. This is probably because you're running the server with no config file."
            )
          );
        } else {
          console.log(
            chalk.blue(
              "[DEBUG] " +
                "Module config has " +
                Object.keys(this.config).length +
                " methods: " +
                Object.keys(this.config).join(", ")
            )
          );
        }
    } catch (err) {
      console.log(chalk.red("[ERROR] Failed to load config module: " + err));
      process.exit(1);
    }

    this.app = express();

    // Loads provided JSON into config.
    this.config.loadJSON(config);

    // Loads all other modules
    for (const module of modules) {
      this.loadModule(module);
    }
  }

  // These modules are not as important and can allow the server to start even if they fail to load.
  loadModule(module) {
    try {
      require("./" + module + "/index.js")(this);
      if (module !== "logger" && module !== "config")
        this.logger.info("Loaded module " + module);
      if (module !== "logger" && module !== "config")
        try {
          if (Object.keys(this[module]).length == 0) {
            this.logger.debug(
              "Module " + module + " has no methods, but it's loaded."
            );
          } else {
            this.logger.debug(
              "Module " +
                module +
                " has " +
                Object.keys(this[module]).length +
                " methods: " +
                Object.keys(this[module]).join(", ")
            );
          }
        } catch (err) {
          this.logger.debug(
            "Module " + module + " has no methods, but it's loaded."
          );
        }
    } catch (err) {
      this.logger.warn("Failed to load module " + module + ": " + err);
    }
  }

  start() {
    let port = this.config.get(["app", "port"]);

    this.app.listen(port, '0.0.0.0', () => {
      this.logger.info("Running on port " + port);
    });
  }
};
