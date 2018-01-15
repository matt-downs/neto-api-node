class UpdateModule {
    constructor(data) {
        this.data = [];
        return this.update(data);
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