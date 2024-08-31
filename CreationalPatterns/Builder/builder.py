from abc import ABC, abstractmethod
from typing import List, Union, Optional

class IBuilder(ABC):
    @abstractmethod
    def build(self):
        pass

class Address:
    def __init__(self, address: str, city: str, country: str, postal_code: str):
        self.address = address
        self.city = city
        self.country = country
        self.postal_code = postal_code

    def __str__(self) -> str:
        return (f"Country: {self.country}\nCity: {self.city}\nAddress: {self.address}\nPostal Code: {self.postal_code}")

class Phone:
    def __init__(self, phone_number: str, extension: str, phone_type: str):
        self.phone_number = phone_number
        self.extension = extension
        self.phone_type = phone_type

    def __str__(self) -> str:
        return f"Phone: {self.phone_number}, Ext: {self.extension}, Phone Type: {self.phone_type}"

class Contact:
    def __init__(self, name: str, phone: Phone, address: Address):
        self.name = name
        self.phone = phone
        self.address = address

    def __str__(self) -> str:
        return (f"Contact [Name: {self.name}, Phone: {self.phone}, Address: {self.address}]")

class Employee:
    def __init__(self, age: int, name: str, gender: str, address: Address,
                 phones: List[Phone], contacts: List[Contact]):
        self.age = age
        self.name = name
        self.gender = gender
        self.address = address
        self.phones = phones
        self.contacts = contacts

    def __str__(self) -> str:
        phones_str = ", ".join(str(phone) for phone in self.phones)
        contacts_str = ", ".join(str(contact) for contact in self.contacts)
        return (f"Employee [Name: {self.name}, Age: {self.age}, Gender: {self.gender}, "
                f"Address: {self.address}, Phones: [{phones_str}], Contacts: [{contacts_str}]]")

class EmployeeBuilder(IBuilder):
    def __init__(self):
        self.age: Optional[int] = None
        self.name: Optional[str] = None
        self.gender: Optional[str] = None
        self.address: Optional[Address] = None
        self.phones: List[Phone] = []
        self.contacts: List[Contact] = []

    def set_age(self, age: int) -> 'EmployeeBuilder':
        self.age = age
        return self

    def set_name(self, name: str) -> 'EmployeeBuilder':
        self.name = name
        return self

    def set_gender(self, gender: str) -> 'EmployeeBuilder':
        self.gender = gender
        return self

    def set_address(self, address: Union[Address, str], city: Optional[str] = None,
                    country: Optional[str] = None, postal_code: Optional[str] = None) -> 'EmployeeBuilder':
        if isinstance(address, Address):
            self.address = address
        else:
            if not all([city, country, postal_code]):
                raise ValueError("Missing parameters for Address")
            self.address = Address(address, city, country, postal_code)
        return self

    def set_phones(self, phone: Union[Phone, str], extension: Optional[str] = None, 
                   phone_type: Optional[str] = None) -> 'EmployeeBuilder':
        if isinstance(phone, Phone):
            self.phones.append(phone)
        else:
            if not all([phone, extension, phone_type]):
                raise ValueError("Missing parameters for Phone")
            self.phones.append(Phone(phone, extension, phone_type))
        return self

    def set_contacts(self, contact: Union[Contact, str], phone: Optional[Phone] = None, 
                     address: Optional[Address] = None) -> 'EmployeeBuilder':
        if isinstance(contact, Contact):
            self.contacts.append(contact)
        else:
            if not all([contact, phone, address]):
                raise ValueError("Missing parameters for Contact")
            self.contacts.append(Contact(contact, phone, address))
        return self

    def build(self) -> Employee:
        if not all([self.age, self.name, self.gender, self.address]):
            raise ValueError("Missing required fields to build Employee")
        return Employee(self.age, self.name, self.gender, self.address, self.phones, self.contacts)

# Example usage
employee = (EmployeeBuilder()
    .set_name("Edgar Godina")
    .set_age(28)
    .set_gender("Male")
    .set_address(Address("Republica de Brazil", "Mexicali", "Mexico", "21125"))
    .set_phones(Phone("1108999", "667", "mobile"))
    .set_contacts(Contact("Ana Cristina", Phone("3777719", "664", "mobile"), Address("Ecuador 349", "Mexicali", "Mexico", "21111")))
    .build())

print(employee)
