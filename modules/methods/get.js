class GetModule {
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


module.exports = GetModule;