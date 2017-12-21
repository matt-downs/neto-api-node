const sharedModule = require('../shared');


class GetCurrencySettings {
    constructor() {
        return this;
    }

    exec({ debug = false } = {}) {
        let req = { action: 'GetCurrencySettings', body: {} };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class UpdateCurrencySettings {
    constructor(data) {
        return this.updateSettings(data);
    }

    updateSettings(data) {
        this.data = data;
    }

    exec({ debug = false } = {}) {
        let body = { CurrencySettings: this.data };
        let req = { action: 'UpdateCurrencySettings', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


module.exports = {
    getSettings: () => {
        return new GetCurrencySettings();
    },
    updateSettings: (data) => {
        return new UpdateCurrencySettings(data);
    }
};