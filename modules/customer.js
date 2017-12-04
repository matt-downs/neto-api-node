const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddCustomer extends AddModule {
    exec() {
        let body = {
            Customer: this.data
        };
        return sharedModule.postApi({ action: 'AddCustomer', reqBody: body });
    }
}


class GetCustomer extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetCustomer', reqBody: body });
    }
}


class UpdateCustomer extends UpdateModule {
    exec() {
        let body = {
            Customer: this.data
        };
        return sharedModule.postApi({ action: 'UpdateCustomer', reqBody: body });
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
        return sharedModule.postApi({ action: 'AddCustomerLog', reqBody: body });
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
        return sharedModule.postApi({ action: 'UpdateCustomerLog', reqBody: body });
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