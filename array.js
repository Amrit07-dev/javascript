let numbers = [55,45,64,42,43,23,54,5];
let anotherone = [23,24,54,32,65,72,74,75];
let numbers2 = new Array(223,43,43);

let val;
//get array length
val = numbers.length;

//get value
val = numbers[2];

//insert into arrays
numbers[2] = 100;//you can see the change in the position of index[2]

//finding index
val = numbers.indexOf(42);

//Mutating arrays
//add one to end
numbers.push(250);//adds the number to the last index in the array 

//take off the end
numbers.pop();//delets the end of the array

//splice             // [55,45,64,42,43,23,54,5];
                     // 2 works as 0[55] 1[45] 2[100] index {2 is the index}
                     // 1 works as 0[55] 1[45] {this part tells that how many numbers should be removed}
numbers.splice(2,1);
anotherone.splice(3,0,10,10); //as shown above 3 is the index
                              //0 is the number of the items to be removed 
                              //10,10 are the items to be added in the given position of the index[3]

console.log(anotherone);
console.log(numbers);
console.log(val);