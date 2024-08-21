// BAD SYNTAX

// const city = "pune"
// const repoCount = 20

// console.log(name + repoCount+ "value");

//GOOD SYNTAX

console.log(`Hello my city is ${city}
    and my repo count is ${repoCount}`)

const gameName = 'dina-mo'

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName/indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  pritesh  "
console.log(newStringOne.trim());

const url = "https://pritesh.com/pritesh%20lad"
 
console.log(url.replace('%20','-'))  // edits 20 with -

console.log(url.includes('pritesh')) // Check if there is pritesh in this url

console.log(gameName.splite('-'))














