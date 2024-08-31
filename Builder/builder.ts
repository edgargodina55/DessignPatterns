interface IBuilder<T>{
    build():T ;
}


class Address {

    private address:string;
    private city:string;
    private country:string;
    private postalCode:string;

    constructor(
        address:string,
        city: string,
        country:string,
        postalCode:string
    ) {
        this.address = address;
        this.city= city;
        this.country = country;
        this.postalCode = postalCode;
    }

    toString():string{
        return `Country:${this.country}\nCity: ${this.city}\nAddress: ${this.address}\nPostal Code: ${this.postalCode} `
    }
}


class Phone{
    private phoneNumber:string;
    private extension:string;
    private phoneType:string;

    constructor(
        phoneNumber:string,
        extension:string,
        phoneType:string
    ){
        this.extension=extension;
        this.phoneNumber=phoneNumber;
        this.phoneType=phoneType;
    }

    toString(): string{
        return `Phone: ${this.phoneNumber} , Ext: ${this.extension}, Phone Type: ${this.phoneType}`
    }
}

class Contact {

    private name:string;
    public phone:Phone;
    public address:Address;

    constructor(
        name:string,
        phone:Phone,
        address:Address
    ){
        this.address=address;
        this.name = name;
        this.phone=phone;
    }

    toString():string{
        return `Contact [Name: ${this.name}, Phone: ${this.phone.toString()}, Address: ${this.address.toString()}]`;
    }
}


class Employee {
    private age:number;
    private name:string;
    private gender:string;
    private address:Address;
    private phones:Phone[]
    private contacts:Contact[]

    

    constructor(
        age:number,
        name:string,
        gender:string,
        address:Address,
        phones:Phone[],
        contacts:Contact[]
    ){
        this.address=address;
        this.age = age;
        this.name=name;
        this.gender = gender;
        this.phones = phones;
        this.contacts = contacts;
    }

    toString(): string {
        const phonesString = this.phones.map(phone => phone.toString()).join(", ");
        const contactsString = this.contacts.map(contact => contact.toString()).join(", ");
        return `Employee [Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}, Phones: [${phonesString}], Contacts: [${contactsString}]]`;
    }
}

class EmployeeBuilder implements IBuilder<Employee>{

    private age:number;
    private name:string;
    private gender:string;
    private address:Address;
    private phones:Phone[] = []
    private contacts:Contact[] = []

    constructor(){}

    setAge(age:number):EmployeeBuilder{
        this.age=age;
        return this;
    }

    setName(name:string):EmployeeBuilder{
        this.name=name;
        return this
    }

    setGender(gender:string):EmployeeBuilder{
        this.gender=gender;
        return this
    }
    
    setAddress(address:Address): EmployeeBuilder;
    setAddress(address:string,city:string,country:string,postalCode:string):EmployeeBuilder;
    
    setAddress(
        address:Address | string,
        city?:string,
        country?:string,
        postalCode?:string 
    ):EmployeeBuilder{
        if(address instanceof Address){
            this.address=address
        }else{
            if( !city || !country || !postalCode ) throw new Error("Missing parameters for Address")
            this.address = new Address(address,city,country,postalCode)
        }

        return this;
    }

    setPhones(phone:Phone): EmployeeBuilder;
    setPhones(phone:string,extension:string,typePhone:string):EmployeeBuilder;

    setPhones(phone:Phone|string,extension?:string,typePhone?:string):EmployeeBuilder{
        if(phone instanceof Phone){
            this.phones.push(phone)
        }else{
            if( !phone || !extension || !typePhone ) throw new Error("Missing parameter for Phone")
            this.phones.push(new Phone(phone,extension,typePhone))
        }
        return this
    }

    setContacts(contact:string,phone:Phone,address:Address):EmployeeBuilder;
    setContacts(contact:Contact):EmployeeBuilder;
    setContacts(contact:Contact|string,phone?:Phone,address?:Address):EmployeeBuilder{
        if( contact instanceof Contact){
            this.contacts.push(contact)
        }else{
            if(!contact || !phone || !address) throw new Error("Missing parameter for Address")
            this.contacts.push(new Contact(contact,phone,address))
        }
        return this
    }


    build(): Employee {
        return  new Employee(
            this.age,
            this.name,
            this.gender,
            this.address,
            this.phones,
            this.contacts
        );
    }

}

const employee:Employee = new EmployeeBuilder()
    .setName("Edgar Godina")
    .setAge(28)
    .setGender("Male")
    .setAddress(new Address("Republica de Brazil","Mexicali","Mexico","21125"))
    .setPhones(new Phone("1108999","667","mobile"))
    .setContacts(new Contact("Ana Cristina",new Phone("3777719","664","mobile"),new Address("Ecuador 349","Mexicali","Mexico","21111")))
    .build();

console.log(employee.toString())