var Address = /** @class */ (function () {
    function Address(address, city, country, postalCode) {
        this.address = address;
        this.city = city;
        this.country = country;
        this.postalCode = postalCode;
    }
    Address.prototype.toString = function () {
        return "Country:".concat(this.country, "\nCity: ").concat(this.city, "\nAddress: ").concat(this.address, "\nPostal Code: ").concat(this.postalCode, " ");
    };
    return Address;
}());
var Phone = /** @class */ (function () {
    function Phone(phoneNumber, extension, phoneType) {
        this.extension = extension;
        this.phoneNumber = phoneNumber;
        this.phoneType = phoneType;
    }
    Phone.prototype.toString = function () {
        return "Phone: ".concat(this.phoneNumber, " , Ext: ").concat(this.extension, ", Phone Type: ").concat(this.phoneType);
    };
    return Phone;
}());
var Contact = /** @class */ (function () {
    function Contact(name, phone, address) {
        this.address = address;
        this.name = name;
        this.phone = phone;
    }
    Contact.prototype.toString = function () {
        return "Contact [Name: ".concat(this.name, ", Phone: ").concat(this.phone.toString(), ", Address: ").concat(this.address.toString(), "]");
    };
    return Contact;
}());
var Employee = /** @class */ (function () {
    function Employee(age, name, gender, address, phones, contacts) {
        this.address = address;
        this.age = age;
        this.name = name;
        this.gender = gender;
        this.phones = phones;
        this.contacts = contacts;
    }
    Employee.prototype.toString = function () {
        var phonesString = this.phones.map(function (phone) { return phone.toString(); }).join(", ");
        console.log(phonesString);
        console.log(12);
        var contactsString = this.contacts.map(function (contact) { return contact.toString(); }).join(", ");
        return "Employee [Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender: ").concat(this.gender, ", Address: ").concat(this.address, ", Phones: [").concat(phonesString, "], Contacts: [").concat(contactsString, "]]");
    };
    return Employee;
}());
var EmployeeBuilder = /** @class */ (function () {
    function EmployeeBuilder() {
        this.phones = [];
        this.contacts = [];
    }
    EmployeeBuilder.prototype.setAge = function (age) {
        this.age = age;
        return this;
    };
    EmployeeBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    EmployeeBuilder.prototype.setGender = function (gender) {
        this.gender = gender;
        return this;
    };
    EmployeeBuilder.prototype.setAddress = function (address, city, country, postalCode) {
        if (address instanceof Address) {
            this.address = address;
        }
        else {
            if (!city || !country || !postalCode)
                throw new Error("Missing parameters for Address");
            this.address = new Address(address, city, country, postalCode);
        }
        return this;
    };
    EmployeeBuilder.prototype.setPhones = function (phone, extension, typePhone) {
        if (phone instanceof Phone) {
            this.phones.push(phone);
        }
        else {
            if (!phone || !extension || !typePhone)
                throw new Error("Missing parameter for Phone");
            this.phones.push(new Phone(phone, extension, typePhone));
        }
        return this;
    };
    EmployeeBuilder.prototype.setContacts = function (contact, phone, address) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
        }
        else {
            if (!contact || !phone || !address)
                throw new Error("Missing parameter for Address");
            this.contacts.push(new Contact(contact, phone, address));
        }
        return this;
    };
    EmployeeBuilder.prototype.build = function () {
        return new Employee(this.age, this.name, this.gender, this.address, this.phones, this.contacts);
    };
    return EmployeeBuilder;
}());
var employee = new EmployeeBuilder()
    .setName("Edgar Godina")
    .setAge(28)
    .setGender("Male")
    .setAddress(new Address("Republica de Brazil", "Mexicali", "Mexico", "21125"))
    .setPhones(new Phone("1108999", "667", "mobile"))
    .setContacts(new Contact("Ana Cristina", new Phone("3777719", "664", "mobile"), new Address("Ecuador 349", "Mexicali", "Mexico", "21111")))
    .build();
console.log(employee.toString());
