"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer1 = void 0;
var Customer1 = /** @class */ (function () {
    function Customer1(firstName, lastName, phoneNumber) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
    }
    Object.defineProperty(Customer1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer1.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (phoneNumber) {
            this._phoneNumber = phoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    return Customer1;
}());
exports.Customer1 = Customer1;
var customer2 = new Customer1("Long", "Ngo", "12312312312");
customer2.firstName = "Long Long";
customer2.lastName = "Ngo ngo";
console.log(customer2);
