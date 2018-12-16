class ContactList {
  /**
   * Simple Contact List class
   */
  constructor() {
    this._list = [];
  }

  isContactValid(new_contact){
    if(new_contact.hasOwnProperty('name') && new_contact.hasOwnProperty('phone')){
      if(typeof new_contact.name !== 'string' || new_contact.name.trim().length === 0){
        throw new Error(`The contact name ${new_contact.name} is not valid.`);
      } 
      if(typeof new_contact.phone !== 'number' || new_contact.phone.toString().length < 5){
        throw new Error(`The contact phone ${new_contact.phone} is not valid.`);
      } 
    } else {
      throw new Error('The contact needs to have a name and a phone number.');
    }
  }


  add(new_contact){
    try {
      this.isContactValid(new_contact);
      const nameCheck = this._list.find(contact => contact.name === new_contact.name);
      const phoneCheck = this._list.find(contact => contact.phone === new_contact.phone);
        if (nameCheck) {
          console.log('A contact with the name ' + new_contact.name + ' already exists');
        } else if (phoneCheck) {
          console.log('A contact with the phone number ' + new_contact.phone + ' already exists');;
        } else {
            this._list.push(new_contact);
        }
    }
    catch(error){
      console.log(error);
    }
 }

  removeContact(name){
    if (this._list.length === 0) {
      console.log('The list is empty');
    } else{
      const checkName = this._list.find(contact => contact.name.toLowerCase() === name.toLowerCase());
      //console.log(checkName);
      if(checkName){
        let index = this._list.indexOf(checkName);
        this._list.splice(index,1);
        // console.log(index);
        // console.log(name);
      } else{
        console.log('There is no contact with the name ' + name + ' .');
      }
    }
  }


  searchByValue(value) {
    if(typeof value === 'string'){
      const findName = this._list.filter(contact => contact.name.toLowerCase() === value.toLowerCase());
      console.log(findName);
    } else if(typeof value === 'number'){
      const findPhone = this._list.filter(contact => contact.phone === value);
      console.log(findPhone);
    } else{
      console.log(`${value} doesn't exist on the contacts.`);
    }
  }
  

  getList() {
    return this._list;
  }
}



module.exports = ContactList;