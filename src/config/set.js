module.exports = function (cms) {
    cms["config"]["set"] = function (key, value) {
        if (typeof key == "string") {
	    cms["configData"][key] = value;
	}
	if (typeof key == "object") {
            // World's most insecure code!
	    let depthString = "";
	    for (let i = 0; i < key.length; i++) {
		depthString += "[" + key[i] + "]";
	    }
	    eval(`cms["configData"]${depthString} = value;`);
	}
    }
    return cms;
}
