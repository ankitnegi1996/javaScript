console.log('tute3');
// variables in Js
//var, let ,const
var name ='harry'
var channel;
var marks=34
marks=0
channel='codewithharry'
console.log(name,channel,marks)
//rules for creating java script
/* 
1.cannot start with Number
2.can start with letter ,numbers, _ or $
3. Are case sensitive 
*/

var city='Delhi'
console.log(city)
const ownersname='Hari Ram';
// ownersname = 'Harry'; //cannot do this (error)
console.log(ownersname)
const fruit='Orange';

{
    let city='Rampur'
    city='Kokalta'
    console.log(city);
    //here city is local variable hence orignal is not chaning like here i set the city to rampur and then kolkata. but here outside this scope it is same we can see
}
console.log(city);
const arr1 =[12,23,12,53,3];
arr1.push(45);
//note we can add in the const but cannot redeclare the arr1 again.
console.log(arr1);

/* most common programming types;
1.camelCase 
2.kebab-case 
3. snake_case 
4.PascalCase */

