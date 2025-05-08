class Customer {
    firstName: string;
    lastName: string;
    phoneNumber : string;

    constructor(firstName : string, lastName: string, phoneNumber : string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}

let customer1 = new Customer("John", "Doe", "12345678");

console.log(customer1)