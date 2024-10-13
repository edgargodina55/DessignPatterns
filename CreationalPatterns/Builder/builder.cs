using System;

public interface IBuilder<T>
{
    T Build();
}

public class Address
{
    private string _address;
    private string _city;
    private string _country;
    private string _postalCode;

    public Address(string address, string city, string country, string postalCode)
    {
        this._address = address;    
        this._city = city;
        this._country = country;
        this._postalCode = postalCode;
    }

    public override string ToString()
    {
        return $"Adress: {this._address}\nCity: {this._city}\nCountry: {this._country}\nPostalCode: {this._postalCode}";
    }
}

public class Phone
{
    private string _phoneNumber;
    private string _extension;
    private string _phoneType;

    public Phone(string phoneNumber, string extension, string phoneType)
    {
        this._phoneNumber = phoneNumber;
        this._extension = extension;
        this._phoneType = phoneType;
    }

    public override string ToString()
    {
        return $"Phone: {this._phoneNumber} , Ext: {this._extension}, Phone Type: {this._phoneType}";
    }
}

public class Contact
{
    private string _name;
    private Phone _phone;
    private Address _address;

    public Contact(string name, Phone phone, Address address)
    {
        this._name = name;
        this._phone = phone;
        this._address = address;
    }

    public override string ToString()
    {
        return $"Contact [Name: {this._name}\nPhone: {this._phone.ToString()}\n Address: {this._address.ToString()}]";
    }
}

public class Employee
{
    private int _age;
    private string _name;
    private string _gender;
    private Address _address;
    private List<Phone> _phones;
    private List<Contact> _contacts;

    public Employee(int age, string name, string gender, Address address, List<Phone> phones, List<Contact> contacts)
    {
        this._age = age;
        this._name = name;
        this._gender = gender;
        this._address = address;
        this._phones = phones;
        this._contacts = contacts;
    }

    public override string ToString()
    {
        var phonesString = _phones.Count > 0 ? string.Join(", ", _phones) : "No phones";
        var contactsString = _contacts.Count > 0 ? string.Join("\n", _contacts) : "No contacts";

        return $"Employee [Name: {_name}, Age: {_age}, Gender: {_gender}, Address: {_address}, Phones: [{phonesString}], Contacts: [{contactsString}] ]";
    }
}

public class EmployeeBuilder : IBuilder<Employee>
{
    private int _age;
    private string _name;
    private string _gender;
    private Address _address;
    private List<Phone> _phones;
    private List<Contact> _contacts;

    public EmployeeBuilder()
    {
        this._phones = new List<Phone>();
        this._contacts = new List<Contact>();
    }

    public EmployeeBuilder SetAge(int age)
    {
        this._age = age;
        return this;
    }

    public EmployeeBuilder SetName(string name)
    {
        this._name = name;
        return this;
    }

    public EmployeeBuilder SetGender(string gender)
    {
        this._gender = gender;
        return this;
    }

    public EmployeeBuilder SetAddress(Address address)
    {
        this._address = address;
        return this;
    }

    public EmployeeBuilder SetAddress(string address, string city, string country, string postalCode)
    {
        this._address = new Address(address, city, country, postalCode);
        return this;
    }

    public EmployeeBuilder SetContacts(List<Contact> contacts)
    {
        this._contacts = contacts;
        return this;
    }

    public EmployeeBuilder SetPhones(List<Phone> phones)
    {
        this._phones = phones;
        return this;
    }
    public EmployeeBuilder AddContact(string name, Phone phone, Address address)
    {
        this._contacts.Add(new Contact(name,phone,address));
        return this;
    }
    public EmployeeBuilder AddContact(Contact contact)
    {
        this._contacts.Add(contact);
        return this;
    }

    public EmployeeBuilder AddPhone(string phoneNumber, string extension, string phoneType)
    {
        this._phones.Add(new Phone(phoneNumber, extension, phoneType));
        return this;
    }

    public EmployeeBuilder AddPhone(Phone phone)
    {
        this._phones.Add(phone);
        return this;
    }

    public Employee Build()
    {
        // Build the employee using the data provided by the builder methods
        var employee = new Employee(_age, _name, _gender, _address, _phones, _contacts);
        
        // Add phones and contacts to the employee
        return employee;    
    }
}


     public class Program
    {
        static void Main(string[] args)
        {
                
            //Builder Pattern Method
            Employee employee = new EmployeeBuilder()
                .SetName("Edgar Godina")
                .SetAddress("Siria 2795","Mexicali","Mexico","21165")
                .SetAge(29)
                .SetGender("Male")
                .AddPhone(new Phone("555-1234", "101", "Mobile"))
                .AddPhone(new Phone("555-5678", "102", "Work"))
                .AddContact("Edgar Godina",new Phone("1108449","686","+52"),new Address("Siria 2795","Mexicali","Mexico","21165"))
                .Build();
            
            Console.WriteLine(employee.ToString());

        }
        
        
    }

