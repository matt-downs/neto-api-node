const sharedModule = require('../shared');


class GetCurrencySettings {
    constructor() {
        return this;
    }

    exec() {
        return sharedModule.postApi({ action: 'GetCurrencySettings', reqBody: {} });
    }
}


class UpdateCurrencySettings {
    constructor(data) {
        return this.updateSettings(data);
    }

    updateSettings(data) {
        this.data = data;
    }

    exec() {
        let body = {
            CurrencySettings: this.data
        };

        return sharedModule.postApi({ action: 'UpdateCurrencySettings', reqBody: body });
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