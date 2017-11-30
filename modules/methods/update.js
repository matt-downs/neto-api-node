class UpdateModule {
    constructor(data) {
        this.data = [];
        return this.update(data);
    }

    // Logs object to console
    debug() {
        console.log(this);
        return this;
    }

    update(data) {
        if (Array.isArray(data)) {
            for (let element of data) {
                this.data.push(element);
            }
        } else this.data.push(data);

        return this;
    }
}


module.exports = UpdateModule;