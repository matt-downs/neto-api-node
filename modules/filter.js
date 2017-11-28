const sharedModule = require('../shared');


class Filter {
    constructor(filter) {
        this.filterVal = filter;
        return this;
    }

    output(output) {
        this.outputVal = output;
        return this;
    }

    exec() {

        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetItem', reqBody: body });
    }
}


module.exports = (filter) => {
    return new Filter(filter)
};