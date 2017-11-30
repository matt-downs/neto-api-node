# neto-api-node
A Node.js wrapper for the Neto API.

**This is a work in progress.**

## Examples
### Initialisation
You will need to initialise the API like so:
```javascript
const Neto = require('./index');
const api = new Neto({
    url: 'https://mysite.neto.com.au',
    user: 'user',
    key: 'api-key'
});
```
### item
#### add
```javascript
api.item
    .add({ SKU: 'smp_3' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => console.error(err));
```
#### get
```javascript
api.item
    .get({ SKU: 'smp_1' })
    .output(['Model', 'DefaultPrice'])
    .exec()
    .then((response) => {
        for (let product of response.Item) {
            console.log(product);
        }
    })
    .catch((err) => console.error(err));
```
#### update
```javascript
api.item
    .update({ SKU: 'smp_3', Name: 'Updated name' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => console.error(err));
```

### Order
#### add
```javascript
api.order
    .add({ OrderID: 'DEMO123' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => console.error(err));
```
#### get
```javascript
api.order
    .get({ OrderStatus: ['New', 'Pick'] })
    .output(['OrderID'])
    .exec()
    .then((response) => {
        for (let order of response.Order) {
            console.log(order);
        }
    })
    .catch((err) => console.error(err));
```
#### update
```javascript
api.order
    .update({ OrderID: 'DEMO123' OrderStatus: 'Dispatched'})
    .exec()
    .then((response) => {
        for (let order of response.Order) {
            console.log(order);
        }
    })
    .catch((err) => console.error(err));
```


## Endpoint actions supported
- [x] Item
    - [x] `AddItem`
    - [x] `GetItem`
    - [x] `UpdateItem`
- [ ] Customer
    - [ ] `AddCustomer`
    - [ ] `GetCustomer`
    - [ ] `UpdateCustomer`
    - [ ] `AddCustomerLog`
    - [ ] `UpdateCustomerLog`
- [x] Order
    - [x] `AddOrder`
    - [x] `GetOrder`
    - [x] `UpdateOrder`


## Potential future features
- [ ] JOI validation
    - [ ] Validate values passed into .filter() and .output()
    - [ ] Create global config to enable/disable JOI


API documentation available at:
http://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/getting-started/