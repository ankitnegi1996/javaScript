console.log('we are at tute6');
const name='Harry';
const greeting ='Good morning';
console.log(greeting+ ' ' + name);

let html;
html = "<h1> this is heading</h1>" +
"<p>this is My para</p>";
// html="ankit   "
html = html.concat('this',' str2');
html=html.concat('   adding another line',' hi')
console.log(html)
console.log(html.length)
console.log(html.toLocaleLowerCase())
console.log(html.toUpperCase())
console.log(html);

console.log( html[1]);


console.log(html.indexOf('h1'))
// this will give the first occurance place
console.log(html.lastIndexOf('<'))
// this will give last occurance place
console.log(html.charAt(1));
// other way of console.log( html[1]);
console.log(html.endsWith('hi'))
// this is checking the last word of the string
console.log(html.endsWith('str2'))
//if the last word does not match it gives false

console.log(html.includes('is'));
//it is checking the workd mentioned in the string
console.log(html.includes('and'));
// as string does not inclue and so it is giving false

 console.log(html.substring(0,5))
// this gives the index vales mentioned in the range

console.log(html.slice(-4))
// through this function we can get the last words of the string
console.log(html.slice(0,5))
// this is the same as  console.log(html.substring(0,5))

console.log(html.split('>'))
// this will split the words as given in the ().

console.log(html.replace('this','it'))
// it only replaces the first occurance of the word in the string

let fruit1 ='orange\''
let fruit2 ='Apple'
let myhtml=`Hello ${name}
<h1> this is "my" heading2</h1>
<p> you like ${fruit1} and ${fruit2}
`;
document.body.innerHTML=myhtml;







