"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sharedModule = require("../shared");
const AddModule = require("./methods/add");
const GetModule = require("./methods/get");
const UpdateModule = require("./methods/update");
class AddCustomer extends AddModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddCustomer',
            schema: 'Customer'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.AddCustomer = AddCustomer;
class GetCustomer extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetCustomer'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.GetCustomer = GetCustomer;
class UpdateCustomer extends UpdateModule {
    exec(params = {}) {
        let superParams = {
            action: 'UpdateCustomer',
            schema: 'Customer'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.UpdateCustomer = UpdateCustomer;
class AddCustomerLog {
    constructor(data) {
        this.addModule = new AddModule(data);
        return this;
    }
    addLog(data) {
        this.addModule.add(data);
        return this;
    }
    exec({ debug = false } = {}) {
        let body = {
            CustomerLogs: {
                CustomerLog: this.addModule.data
            }
        };
        let req = { action: 'AddCustomerLog', body: body };
        if (debug)
            return req;
        return sharedModule.postApi(req);
    }
}
exports.AddCustomerLog = AddCustomerLog;
class UpdateCustomerLog {
    constructor(data) {
        this.updateModule = new UpdateModule(data);
        return this;
    }
    updateLog(data) {
        this.updateModule.update(data);
        return this;
    }
    exec({ debug = false } = {}) {
        let body = {
            CustomerLogs: {
                CustomerLog: this.updateModule.data
            }
        };
        let req = { action: 'UpdateCustomerLog', body: body };
        if (debug)
            return req;
        return sharedModule.postApi(req);
    }
}
exports.UpdateCustomerLog = UpdateCustomerLog;
exports.methods = {
    add: (data) => {
        return new AddCustomer(data);
    },
    get: (filter) => {
        return new GetCustomer(filter);
    },
    update: (data) => {
        return new UpdateCustomer(data);
    },
    addLog: (data) => {
        return new AddCustomerLog(data);
    },
    updateLog: (data) => {
        return new UpdateCustomerLog(data);
    }
};
