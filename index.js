let array = [0,1,2,3,4,5,6];

function getFirstValue (array)
{
    return array [0];
}
console.log(getFirstValue(array));
function incrementItems (array)
{
    return array.map(num => num +1);
}
console.log(incrementItems(array));
function rotate (array)
{
    let thing = array.shift();
    array.push(thing);
}
rotate (array);
console.log(array);