const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddCustomer extends AddModule {
    exec({ debug = false } = {}) {
        let body = {
            Customer: this.data
        };

        let req = { action: 'AddCustomer', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class GetCustomer extends GetModule {
    exec(params = {}) {
        params.action = 'GetCustomer';
        return super.exec(params);
    }
}


class UpdateCustomer extends UpdateModule {
    exec({ debug = false } = {}) {
        let body = {
            Customer: this.data
        };
        
        let req = { action: 'UpdateCustomer', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class AddCustomerLog {
    constructor(data) {
        this.addModule = new AddModule(data)
        return this;
    }

    addLog(data) {
        this.addModule.add(data);
        return this;
    }

    exec() {
        let body = {
            CustomerLogs: {
                CustomerLog: this.addModule.data
            }
        };

        let req = { action: 'AddCustomerLog', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class UpdateCustomerLog {
    constructor(data) {
        this.updateModule = new UpdateModule(data)
        return this;
    }

    updateLog(data) {
        this.updateModule.update(data);
        return this;
    }

    exec() {
        let body = {
            CustomerLogs: {
                CustomerLog: this.updateModule.data
            }
        };
        
        let req = { action: 'UpdateCustomerLog', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


module.exports = {
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