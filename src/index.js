/**
 * ThunderCMS
 */

// External dependencies

// These are all tentative, and will be changed as we go along. To activate a dependency, put a slash directly after the first asterisk in the line.
/*
 */ const express = require('express');                        /*
 */ const chalk = require('chalk');                            /*
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
modules = [
    
]

// Classes
module.exports = class {
    constructor (config = {}) {
        // Load configuration from provided config in the constructor, if keys exist replace the default values, else leave them as they are.
        // bind all internal methods to this
        this.loadModule.bind(this);

	// Must run these seperately, otherwise errors will pop up about config not being defined.
	this.loadModule("logger");
	if (config.logs && config.logs.logLevel == "debug") console.log(chalk.blue("[DEBUG] " + 'Loaded module logger'));
        this.loadModule("config");
        if (config.logs && config.logs.logLevel == "debug") console.log(chalk.blue("[DEBUG] " + 'Loaded module config'));
	
	// Loads all other modules   
	for (const module of modules) {
	    this.loadModule(module);
	};

	// Loads provided JSON into config.
	this.config.loadJSON(config);
    }

    loadModule (module) {
    	require('./' + module + "/index.js")(this);
	if (module !== "logger" && module !== "config") this.logger.debug('Loaded module ' + module);
    }

    start () {
	this.app = express();
        // Bind to port specified in configData
        // Create a random endpoint to test if the server is running
	this.app.get('/status', (req, res) => {
	    res.send('Server is running');
	});

	let port = this.config.get(['app', 'port']);

	this.app.listen(port, () => {
	    this.logger.info('Running on port ' + port);
	});
    }
}
