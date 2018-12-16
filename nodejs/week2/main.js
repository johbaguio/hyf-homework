const ContactList = require("./contactList.js");

const my_contact_list = new ContactList();

my_contact_list.add({
    name: "Marco",
    phone: 42838188
});

my_contact_list.add({
    name: "Badr",
    phone: 42578456
});

my_contact_list.add({
    name: "Yana",
    phone: 42578458
});

my_contact_list.add({
    name: "Monya",
    phone: 42578770
});

// my_contact_list.removeContact('Yana');
// // my_contact_list.removeContact('Badr');
// my_contact_list.removeContact('huy');
const mySearch = my_contact_list.searchBy('name','m');
console.log(mySearch);


console.log(my_contact_list.getList());