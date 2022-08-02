/*
data tyoes in Js 
Primitive data types -----stack -----string---numbers
string eg "jarry"
numbers eg "Bollean"
bollean eg "true /false"
null
undefined 
symbol

Reference data type ------Heap
array
object literals
functions
dates
*/

// Primitve data types
//string
var name ='Harry'
console.log("my name is " + name);
console.log("data type is " + (typeof name));

//number
let marks=34
console.log(marks);
console.log("data type is " + (typeof marks));

//Bollean
let isDriver=true;
console.log(isDriver);
console.log ("data type is " + (typeof isDriver));

//null
let nullvar =null;
console.log(nullvar);
console.log("data type is" + (typeof nullvar));


//undefined
let undef=undefined;
console.log("data type is " + (typeof undef));

//arrays
let myarr=[1,2,3,4]
console.log("data type is " + (typeof myarr));

//object Literals

let stmarks = {
    harry:89,
    Shubham:36,
    RohanDas:34, 
    Ankit: 32
}
console.log(stmarks)
console.log(typeof stmarks);


function findname()
{

}
console.log(typeof findname);

let date = new Date();
console.log(typeof date);



