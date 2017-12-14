const sharedModule = require('../../shared');


class GetModule {
    constructor(filter) {
        this.body = {
            Filter: {}
        };
        return this.get(filter);
    }

    // Logs object to console
    debug() {
        console.log(this);
        return this;
    }

    get(filter) {
        this.body.Filter = filter;
        return this;
    }

    output(output) {
        this.body.Filter.OutputSelector = output;
        return this;
    }

    exec({ debug = false, action }) {
        let req = { action: action, body: this.body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


module.exports = GetModule;