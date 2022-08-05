console.log('this is tutorial 8')
const age=28
const vari=1;
if (age==19)
{
    console.log('age is 19 ')
}

if(age!==65)
 {
    console.log('age is not 65')
}

else {
        console.log('age is not 19')
    }

//note == only matches the value
// === matches value as well as type of the data


if (typeof vari !=='undefined')
{
    console.log('vari is defined')
}
else 
{
    console.log('vari is not defined')
}

const doesdrive=true;

if (doesdrive || age>18)
{
 console.log('you can drive')
}

else 
{
    console.log('you cannot drive')
}

console.log(age==45? 'Age is 45' : 'Age is not 45')

switch (age){
    case 18:
        console.log('You are 18')
        break;
    case 28:
        console.log('You are 28')
        break;
    case 38:
        console.log('You are 38')
        break;
    case 48:
        console.log('You are 48')
        break;
    default:
        console.log("you are foolish")
        break;
}

 