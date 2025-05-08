export class Customer1 {
    private _firstName: string;
    private _lastName: string;
    private _phoneNumber : string;

    constructor(firstName : string, lastName: string, phoneNumber : string){
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
    }

    public get firstName(): string{
        return this._firstName
    }
    public set firstName(firstName: string){
        this._firstName = firstName
    }

    public get lastName(): string{
        return this._lastName
    }
    public set lastName(lastName : string){
        this._lastName = lastName
    }

    public get phoneNumber(): string{
        return this._phoneNumber
    }

    public set phoneNumber(phoneNumber : string){
        this._phoneNumber = phoneNumber
    }


}

let customer2 = new Customer1("Long", "Ngo","12312312312");

customer2.firstName = "Long Long";
customer2.lastName = "Ngo ngo";
console.log(customer2)


