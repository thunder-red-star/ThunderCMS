module.exports = function (cms) {
    cms['config']['get'] = function (key) {
        if (typeof key === 'undefined') {
	    return this.config;
	}
	if (typeof key === 'string') {
	    return cms['configData'][key];
	}
	if (typeof key === 'object') {
	    let value;
	    value = cms['configData'];
	    for (let i = 0; i < key.length; i++) {
	        value = value[key[i]];
	    }
	    return value;
	}
    }
    return cms;
};
