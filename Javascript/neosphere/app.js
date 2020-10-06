// log to console
console.log('Hello World');
console.log('123');
console.log('true');

let greetings = 'Hello';
console.log(greetings);

console.log(1,2,3,4);
console.log([1,2,3,4]);

console.log({a:1, b:2});
console.table({a:1, b:2});   // Creating a table

console.error('This is an warning');
console.warn('This is a warning');
//console.clear();

var name = 'John';
let age = 39;

name = 'Smith';
age = 40;
console.log(name,age);

const pi = 3.1415;
console.log(pi);

let data = 'Hellow'; // String
console.log(typeof data);

data = 100.34; // Number
console.log(typeof data);

data1 = false; // Boolean
console.log(typeof data1);

data2 = null; // Null
console.log(typeof data2);

let car; // Undefined
console.log(typeof car);

// Refrence types
// Array
const hobbiesArray = ['movies', 'music'];
console.log(typeof hobbiesArray);

// Object literals
const address = {
    city:'kathmandu',
    state:'State no 3'
}
console.log(typeof address);

// date objects
const today = new Date();
console.log(today);
console.log(typeof today);

// functions 
const hello = function() {
    alert('hello');
}
console.log(hello());
console.log(typeof hello);

