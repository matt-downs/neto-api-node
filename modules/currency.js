const sharedModule = require('../shared');


class GetCurrencySettings {
    constructor() {
        return this;
    }

    exec({ debug = false } = {}) {
        return sharedModule.postApi({ action: 'GetCurrencySettings', body: {} });
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
        let body = {
            CurrencySettings: this.data
        };

        return sharedModule.postApi({ action: 'UpdateCurrencySettings', body: body });
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