let person = {
    firstName : 'Steve',
    lastName : 'Smith',
    age : 35,
    email : 'steve@gmail.com',
    hobbies : ['music, sports'],
    address : {
        city : 'Miami',
        State : 'FL'
    },
    getBithYear : function() {
        return 2020 - this.age;
    }
}

let val;
val = person;
val = person.firstName;
val = person['lastName'];          // [''] can be used as . to indicate the object
val = person.age;
val = person.hobbies;

console.log(val);