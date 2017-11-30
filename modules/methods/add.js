const sharedModule = require('../../shared');


class Add {
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


class AddItem extends Add {
    exec() {
        let body = {
            Item: this.data
        };
        return sharedModule.postApi({ action: 'AddItem', reqBody: body });
    }
}


module.exports = {
    item: (data) => {
        return new AddItem(data);
    }
}