const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddCustomer extends AddModule {
    exec() {
        let body = {
            Customer: this.data
        };
        return sharedModule.postApi({ action: 'AddCustomer', body: body });
    }
}


class GetCustomer extends GetModule {
    exec() {
        return sharedModule.postApi({ action: 'GetCustomer', body: this.body });
    }
}


class UpdateCustomer extends UpdateModule {
    exec() {
        let body = {
            Customer: this.data
        };
        return sharedModule.postApi({ action: 'UpdateCustomer', body: body });
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
        return sharedModule.postApi({ action: 'AddCustomerLog', body: body });
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
        return sharedModule.postApi({ action: 'UpdateCustomerLog', body: body });
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