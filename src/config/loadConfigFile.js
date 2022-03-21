const fs = require('fs');
const defaultConfig = require('../data/defaultConfig.json');
const path = require('path');

module.exports = function (cms) {
    cms['config']['loadConfigFile'] = function (filePath) {
        // Filepath can be absolute or relative, so account for both
        // Check if filePath is absolute
        if (filePath.split("")[0] ==="/") {
            // Filepath is absolute
            filePath = path.resolve(filePath);
        } else {
            // Filepath is relative
            filePath = path.resolve(__dirname, filePath);
        }

        // Check if file exists
        if (fs.existsSync(filePath)) {
            // File exists, load it
            let config = require(filePath);
            // Merge config with defaultConfig
            config = Object.assign(defaultConfig, config);
            // Set configData to config
            cms['configData'] = config;
        } else {
            // File does not exist, return defaultConfig
            cms['configData'] = defaultConfig;
        }
    };
}