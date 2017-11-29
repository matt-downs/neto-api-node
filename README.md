# neto-api-node
A Node.js wrapper for the Neto API.

**This is a work in progress.**

## Proposed syntax example: 
```javascript
const Neto = require('./index');

let api = new Neto({
    url: 'https://mysite.neto.com.au',
    user: 'user',
    key: 'api-key'
});

// Add item example
api.item
    // You can pass in an array of items, or chain together multiple seperate item objects
    .add([{ SKU: 'smp_1' }, { SKU: 'smp_2' }])
    .add({ SKU: 'smp_3' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => console.error(err));

// Get item example
api.item
    .get({ SKU: ['smp_1', 'smp_2'] })
    .output(['Model', 'DefaultPrice'])
    .exec()
    .then((response) => {
        for (let product of response.Item) {
            console.log(product);
        }
    })
    .catch((err) => console.error(err));

// Update item example
api.item
    .update([{ SKU: 'smp_1' }, { SKU: 'smp_2' }])
    .update({ SKU: 'smp_3' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => console.error(err));
```


## Endpoint actions supported
- [ ] Item
    - [ ] `AddItem`
    - [x] `GetItem`
    - [x] `UpdateItem`
- [ ] Customer
    - [ ] `AddCustomer`
    - [ ] `GetCustomer`
    - [ ] `UpdateCustomer`
    - [ ] `AddCustomerLog`
    - [ ] `UpdateCustomerLog`
- [ ] Order
    - [ ] `AddOrder`
    - [ ] `GetOrder`
    - [ ] `UpdateOrder`


## Potential future features
- [ ] JOI validation
    - [ ] Validate values passed into .filter() and .output()
    - [ ] Create global config to enable/disable JOI


API documentation available at:
http://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/getting-started/