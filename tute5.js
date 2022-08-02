/*
type conversion andy type coercion


*/

console.log('welcome to tute5')
let myVar,ank;
ank=34
myVar= String(34);
console.log(myVar,ank,(typeof myVar));

let date =new Date();
console.log(date,(typeof date));
let date1= String(new Date());
console.log(date1,(typeof date1));

let arr=[1,2,3,4,5];
console.log(arr,(typeof arr),arr.length);

let arr1=String([1,2,3,4,5]);
console.log(arr1.length,(typeof arr1))
//note numbers and comma are counted but [] is not counted

let i=8
console.log(i.toString()); //here we converted it to the string with the help of tostring function
console.log(i)

let stri ="3434"
console.log(stri,(typeof stri));
stri1=Number("3434");
console.log(stri1,(typeof stri1))
stri2=Number("3434ee");
console.log(stri2,(typeof stri2))
stri3=Number(true)
console.log(stri3,(typeof stri3))
//note true=1 false=0
stri4=Number([1,2,3,4,5]);
console.log(stri4,(typeof stri4))

let number='34';
console.log(number,(typeof number));
let number1=parseInt('34.98')
console.log(number1,(typeof number1));
let number2=parseFloat('34.98')
console.log(number2,(typeof number2));

let number3=parseFloat('34.98')
console.log(number3.toFixed(10),(typeof number3));





