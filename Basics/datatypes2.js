// PRIMITIVE -- Call by Value
 
// 7 types : String, Number, Boolean , null, undefined , Symbol
//  ,BigInt


const score = 100 
const scoreValue = 19.2

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')

// Reference (NON PRIMITIVE)

// Array, Objects , Functions

const heros = ["ironman","spiderman","Dr.strange"]
let myObj ={
    name:"pritesh",
    age:22,

}

const myfunction = function(){
    console.log("hello world");


}

//*********************************

// Stack (Primitive)-change in copy, Heap (Non-Primitive)- change original value

let codeName = "alexben";

let anothername = codeName
anothername = "kirmada"

console.log(codeName)
console.log(anotername)

// output: alexben
//         kirmada


let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;


userTwo.email = "priteshlad@.com";

console.log(userOne.email);
console.log(userTwo.email);

// output : priteshlad@.com
//          priteshlad@.com


