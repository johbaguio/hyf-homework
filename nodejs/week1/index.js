class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    };

    addPhone(phoneNumber){
        this.phoneNumber = phoneNumber;
    };

    call(){
        if(this.phoneNumber !== undefined){
            console.log(`Calling ${this.name} at ${this.phoneNumber}...`);
        } else {
            console.log(`${this.name} has no phone number saved.`);
        }
    };

    birthday(){
        let newAge = this.age + 1;
        console.log(`Wishing ${this.name} a happy ${newAge}th birthday!`);
    };


};

// remember to write a constructor function
let jimmy = new Person("Jimmy", 28);

jimmy.addPhone("55551234");

jimmy.call();
// should say "Calling Jimmy at 55551234..."

jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill",26);

jill.call();
// should say "Jill has no phone number saved."

jill.birthday();