class AddModule {
    constructor(data) {
        this.data = [];
        return this.add(data);
    }

    // Logs object to console
    debug() {
        console.log(this);
        return this;
    }

    add(data) {
        if (Array.isArray(data)) {
            for (let element of data) {
                this.data.push(element);
            }
        } else this.data.push(data);

        return this;
    }
}


module.exports = AddModule;