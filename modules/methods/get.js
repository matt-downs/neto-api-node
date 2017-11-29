const sharedModule = require('../../shared');


class Get {
    constructor(filter) {
        return this.get(filter);
    }

    // Logs object to console
    debug() {
        console.log(this);
        return this;
    }

    get(filter) {
        this.filterVal = filter;
        return this;
    }

    output(output) {
        this.outputVal = output;
        return this;
    }
}


class GetItem extends Get {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetItem', reqBody: body });
    }
}


module.exports = {
    item: (filter) => {
        return new GetItem(filter)
    }
}