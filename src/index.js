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

// Internal dependencies

// Classes
module.exports = class {
    constructor (config) {
        // Load configuration from provided config in the constructor, if keys exist replace the default values, else leave them as they are.
        for (let key in config) {
            if (config.hasOwnProperty(key)) {
                this[key] = config[key];
            }
        }
        this.configData = config;
        // bind all internal methods to this
        require('./config/index.js')(this);
    }

    start () {

    }
}