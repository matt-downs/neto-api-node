# neto-api
A promise based Neto API client for Node


### `npm install neto-api`


## Initialisation
Before you start making calls, you will need to initialise the API like so:
```javascript
const Neto = require('neto-api');

const mySite = new Neto({
    url: 'https://myawesomesite.neto.com.au',
    user: 'user', // optional
    key: 'api-key'
});
```


## Basic syntax
Once the library is initialised, you can use it like so:
```javascript
mySite
    .[type]     // See below for a list of supported types
    .[method]() // See below for a list of methods for each type (generally add, get or update)
    .exec()     // Returns a promise that resolves with the API response in JSON format
```
[Supported types and methods](#supported-types-and-methods)


## Examples
### item.add
```javascript
mySite.item
    .add({ SKU: 'smp_3' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((e) => console.log(e));
```
### order.get
```javascript
mySite.order
    .get({ OrderStatus: ['New', 'Pick'] })
    .output(['OrderID'])
    .exec()
    .then((response) => {
        for (let order of response.Order) {
            console.log(order);
        }
    })
    .catch((e) => console.log(e));
```
### customer.update
```javascript
mySite.customer
    .update({ Username: 'someguy', EmailAddress: 'bob@email.com'})
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((e) => console.log(e));
```


## Advanced usage
### Chaining
`.add()` and `.update()` methods can be chained together with themselves to improve readability - the request itself will only be sent when `.exec()` is called. Check it out below:
```javascript
mySite.item
    .add({ SKU: 'smp_1' })
    .add({ SKU: 'smp_2' })
    .add({ SKU: 'smp_3' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((e) => console.log(e));
```
This allows you to some other cool stuff, such as building a bulk request to execute at some time in the future:
```javascript
// Expose a copy of the request type
var addItems = api.item;
// Do some stuff...
addItems = addItems.add({ SKU: 'smp_1' });
// Do some other stuff...
addItems = addItems.add({ SKU: 'smp_2' });
// Keep building the request...
addItems = addItems.add({ SKU: 'smp_3' });

// Finally execute the request at a later time
addItems.exec()
    .then((response) => {
        console.log(response);
    })
    .catch((e) => console.log(e));
```
Chaining `.get()` methods will be supported soon, I promise.

### async/await support
Because this library is built on promises, it supports the use of `async` and `await` operators. Here's an example:
```javascript
async function addItem() {
    try {
        var response = mySite.item.add({ SKU: 'smp_1' }).exec();
        // Do some stuff...
        console.log(await response);
    } catch (e) console.log(e)
}
addItem();
```
It's that easy!


## Supported types and methods

### `.cart`
Method | Neto API Action
--- | ---
<code>.get( CartFilter )</code> | `GetCart`

### `.category`
Method | Neto API Action
--- | ---
<code>.add( Category &#124; Category[] )</code> | `AddCategory`
<code>.get( CategoryFilter )</code> | `GetCategory`
<code>.update( Category &#124; Category[] )</code> | `UpdateCategory`

### `.content`
Method | Neto API Action
--- | ---
<code>.add( Content &#124; Content[] )</code> | `AddContent` 
<code>.get( ContentFilter )</code> | `GetContent` 
<code>.update( Content &#124; Content[] )</code> | `UpdateContent`

### `.currency`
Method | Neto API Action
--- | ---
<code>.getSettings()</code> | `GetCurrencySettings` 
<code>.updateSettings( CurrencySettings )</code> | `UpdateCurrencySettings` 

### `.customer`
Method | Neto API Action
--- | ---
<code>.add( Customer &#124; Customer[] )</code> | `AddCustomer` 
<code>.get( CustomerFilter )</code> | `GetCustomer` 
<code>.update( Customer &#124; Customer[] )</code> | `UpdateCustomer`
<code>.addLog( CustomerLog &#124; CustomerLog[] )</code> | `AddCustomerLog`
<code>.updateLog( CustomerLog &#124; CustomerLog[] )</code> | `UpdateCustomerLog`

### `.item`
Method | Neto API Action
--- | ---
<code>.add( Item &#124; Item[] )</code> | `AddItem` 
<code>.get( ItemFilter )</code> | `GetItem` 
<code>.update( Item &#124; Item[] )</code> | `UpdateItem`

### `.order`
Method | Neto API Action
--- | ---
<code>.add( Order &#124; Order[] )</code> | `AddOrder` 
<code>.get( OrderFilter )</code> | `GetOrder` 
<code>.update( Order &#124; Order[] )</code> | `UpdateOrder`

### `.payment`
Method | Neto API Action
--- | ---
<code>.add( Payment &#124; Payment[] )</code> | `AddPayment` 
<code>.get( PaymentFilter )</code> | `GetPayment` 
<code>.getMethods()</code> | `GetPaymentMethods`

### `.rma`
Method | Neto API Action
--- | ---
<code>.add( Rma &#124; Rma[] )</code> | `AddRma` 
<code>.get( RmaFilter )</code> | `GetRma` 

### `.shipping`
Method | Neto API Action
--- | ---
<code>.getMethods()</code> | `GetShippingMethods` 
<code>.getQuote( ShippingQuote )</code> | `GetShippingQuote` 

### `.supplier`
Method | Neto API Action
--- | ---
<code>.add( Supplier &#124; Supplier[] )</code> | `AddSupplier` 
<code>.get( SupplierFilter )</code> | `GetSupplier` 
<code>.update( Supplier &#124; Supplier[] )</code> | `UpdateSupplier`

### `.voucher`
Method | Neto API Action
--- | ---
<code>.add( Voucher &#124; Voucher[] )</code> | `AddVoucher` 
<code>.get( VoucherFilter )</code> | `GetVoucher` 
<code>.update( Voucher &#124; Voucher[] )</code> | `UpdateVoucher`

### `.warehouse`
Method | Neto API Action
--- | ---
<code>.add( Warehouse &#124; Warehouse[] )</code> | `AddWarehouse` 
<code>.get( WarehouseFilter )</code> | `GetWarehouse` 
<code>.update( Warehouse &#124; Warehouse[] )</code> | `UpdateWarehouse`


## Endpoint actions supported
- [ ] Accounting (TODO)
    - [ ] `UpdateAccountingSystemRelatedAccount`
    - [ ] `DeleteAccountingSystemRelatedAccount`
    - [ ] `AddAccountingSystemRelatedAccount`
    - [ ] `GetAccountingSystemRelatedAccounts`
- [x] Cart
    - [x] `GetCart`
- [x] Category
    - [x] `AddCategory`
    - [x] `GetCategory`
    - [x] `UpdateCategory`
- [x] Content
    - [x] `AddContent`
    - [x] `GetContent`
    - [x] `UpdateContent`
- [x] Currency
    - [x] `GetCurrencySettings`
    - [x] `UpdateCurrencySettings`
- [x] Customer
    - [x] `AddCustomer`
    - [x] `GetCustomer`
    - [x] `UpdateCustomer`
    - [x] `AddCustomerLog`
    - [x] `UpdateCustomerLog`
- [x] Item
    - [x] `AddItem`
    - [x] `GetItem`
    - [x] `UpdateItem`
- [x] Order
    - [x] `AddOrder`
    - [x] `GetOrder`
    - [x] `UpdateOrder`
- [x] Payment
    - [x] `AddPayment`
    - [x] `GetPayment`
    - [x] `GetPaymentMethods`
- [x] RMA
    - [x] `AddRma`
    - [x] `GetRma`
- [x] Shipping
    - [x] `GetShippingMethods`
    - [x] `GetShippingQuote`
- [x] Supplier
    - [x] `GetSupplier`
    - [x] `UpdateSupplier`
    - [x] `AddSupplier`
- [x] Voucher
    - [x] `UpdateVoucher`
    - [x] `AddVoucher`
    - [x] `GetVoucher`
- [x] Warehouse
    - [x] `AddWarehouse`
    - [x] `UpdateWarehouse`
    - [x] `GetWarehouse`


## Potential future features
- [ ] JOI validation before submission
    - [ ] Create global config to enable/disable JOI
- [ ] Add to the [ProgrammableWeb Neto API SDK page](https://www.programmableweb.com/api/neto/sdks)
- [ ] TypeScript support


Neto API documentation available [here](http://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/getting-started/).


Note: This is currently a personal project of mine and is not offically endorsed or supported by Neto.