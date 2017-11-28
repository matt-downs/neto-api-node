const sharedModule = require('../shared');


class Filter {
    constructor(filter) {
        return this.filter(filter);
    }

    filter(filter) {
        this.filterVal = filter;
        return this;
    }

    output(output) {
        this.outputVal = output;
        return this;
    }
}


class ProductFilter extends Filter {
    exec() {
        // TODO pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetItem', reqBody: body });
    }
}


module.exports = (filter) => {
    return new ProductFilter(filter)
};