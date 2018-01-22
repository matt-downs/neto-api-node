"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sharedModule = require("../shared");
class GetCurrencySettings {
    constructor() {
        return this;
    }
    exec({ debug = false } = {}) {
        let req = { action: 'GetCurrencySettings', body: {} };
        if (debug)
            return req;
        return sharedModule.postApi(req);
    }
}
exports.GetCurrencySettings = GetCurrencySettings;
class UpdateCurrencySettings {
    constructor(data) {
        return this.updateSettings(data);
    }
    updateSettings(data) {
        this.data = data;
        return this;
    }
    exec({ debug = false } = {}) {
        let body = { CurrencySettings: this.data };
        let req = { action: 'UpdateCurrencySettings', body: body };
        if (debug)
            return req;
        return sharedModule.postApi(req);
    }
}
exports.UpdateCurrencySettings = UpdateCurrencySettings;
exports.methods = {
    getSettings: () => {
        return new GetCurrencySettings();
    },
    updateSettings: (data) => {
        return new UpdateCurrencySettings(data);
    }
};
