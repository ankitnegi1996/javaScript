console.log('We are in tute7')

let marks=[34,23,24,93,73,25];
const fruits =['Ornage','Apple','Pineapple'];
const mixed =['str',89,[3,5]];
const arr = new Array(23,123,21,'Orange');
console.log(arr);
console.log(mixed);
console.log(fruits[1]);
console.log(arr.length)
console.log(Array.isArray(mixed)) // here i have entred an array hence it is giving true value
console.log(Array.isArray('ankit'));
arr[0]='harry';
console.log(arr);
let value= marks.indexOf(73);
console.log(value)
//mutating or Modifying arrays.
 marks.push(34456); // it will add the value in the last
 console.log(marks)
marks.unshift(1009); // it is adding the value at first place
console.log(marks)
marks.pop() //it will delete the element from the end of array
console.log(marks)
marks.shift(marks) // it will remove the first element
console.log(marks)
marks.splice(1,2) // it will remove the value present at the defined index from given range here a[1],a[2]
console.log(marks)
marks.reverse()
console.log(marks)
//Note in these action original value is getting changed
let marks2= [1,2,3,4]
marks=marks.concat(marks2)
console.log(marks)
 
let myobj ={

    name: 'harry',
    channel: 'codewithharry',
    isActive: true,
    marks: [7,8,9,10]
}

console.log(myobj)
console.log(myobj.channel)
console.log(myobj.name)
