var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
    return Customer;
}());
var customer1 = new Customer("John", "Doe", "12345678");
console.log(customer1);
