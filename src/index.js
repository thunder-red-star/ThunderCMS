/**
 * ThunderCMS
 */

// External dependencies

// These are all tentative, and will be changed as we go along. To activate a dependency, put a slash directly after the first asterisk in the line.
/*
 */ const express = require('express');                        /*
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

const loadModule = (cms, module) => {
    require('./' + module + '/index.js')(cms);
    cms.logger.debug('Loaded module ' + module);
}

// Classes
module.exports = class {
    constructor (config = {}) {
        // Load configuration from provided config in the constructor, if keys exist replace the default values, else leave them as they are.
        // bind all internal methods to this
        loadModule(this, 'logger');
	loadModule(this, 'config');	
	// Loads provided JSON into config.
	this.config.loadJSON(config);
    }

    start () {
	this.app = express();
        // Bind to port specified in configData
        // Create a random endpoint to test if the server is running
	this.app.get('/status', (req, res) => {
	    res.send('Server is running');
	});
	this.app.listen(this.config.port, () => {
	    this.logger.info('Running on port ' + this.config.port);
	});
    }
}
