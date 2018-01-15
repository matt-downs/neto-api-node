class AddModule {
    constructor(data) {
        this.data = [];
        return this.add(data);
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