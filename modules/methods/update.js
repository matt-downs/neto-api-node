const sharedModule = require('../../shared');


class Update {
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


class UpdateItem extends Update {
    exec() {
        let body = {
            Item: this.data
        };
        return sharedModule.postApi({ action: 'UpdateItem', reqBody: body });
    }
}


module.exports = {
    item: (data) => {
        return new UpdateItem(data);
    }
}