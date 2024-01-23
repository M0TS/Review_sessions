// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given ab array of numbers and a given target. return the target if it's in the array or undefined if it's not
const numbers = [1,3,6,9,11,13,15];
function findNum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return target;
        }
    }
    return undefined;
}
// console.log(findNum(numbers, 6));
// console.log(findNum(numbers, 5));

// return arr.find((num) => num === target); arrow function solution


// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14
const numbers2 = [1,3,6,9,11,13,15];

function findNumGreater(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 14) {
            return arr[i];
        }
    }
    return undefined;
}
// return arr.find((num) => num > 14);
// console.log(findNumGreater(numbers2));





// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found
const fruits = ["apple", "orange", "banana", "fig"];
function findlengthGreater(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            return arr[i];
        }
    }
    return undefined;
}

// for (let el of arr) {
//     if (el.length > 4) {
//         return el;
//     }
//     return undefined;
// }

// console.log(findlengthGreater(fruits));




// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/
const persons = [{
    id: "Y42C_a",
    name: "Robert",
    occupation: "Chef",
    eyeColor: "green"
   },
   {
    id: "Y5468",
    name: "Tom",
    occupation: "Cop",
    eyeColor: "blue"
   },
   {
    id: "Y76C_a",
    name: "Rachel",
    occupation: "Doctor",
    eyeColor: "green"
   }];

function findObjectId(objArr, targetId) {
    for (let i = 0; i < objArr.length; i++) {
        if (objArr[i].id === targetId) {
            return objArr[i];
        }
    }
    return undefined;
}
console.log(findObjectId(persons, "Y5468"));

// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/

// function findObjectName(objArr, targetName) {
//     for (let i = 0; i < objArr.length; i++) {
//         if (objArr[i].name === targetName) {
//             return objArr[i].name;
//         }
//     }
//     return undefined;
// }
// console.log(findObjectName([person], person.name));